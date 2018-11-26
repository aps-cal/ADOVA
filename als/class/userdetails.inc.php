<?php
class userDetails {
	private $autoCreateUser		= false; // Automatically create a local user record if one doesnt exist
	private $autoCreateNYLeave	= true; // Automatically create new annual leave based on last years
	
	private $color 			= NULL;
	private $textColor		= NULL;
	
	private $events 		= array();
	private $supervisor		= array();
	private $supervisee		= array();
	private $authorise		= array();
	
	public $user 			= NULL;
	public $name			= NULL;
	public $email			= NULL;
	public $is_admin		= false;
	public $is_supervisor	= false;
	public $is_booking		= NULL;
	public $weekend			= false;
	
	public $leave		= array();

	public function __construct($user = NULL)
	{
		if($user === NULL) {
			global $token;
	
			$ch = curl_init();
			curl_setopt_array($ch, array(
				CURLOPT_RETURNTRANSFER => 1,
				CURLOPT_URL => "https://websignon.warwick.ac.uk/sentry?requestType=1".WSOSAPI."&token=$token"
			));
			$resp = @curl_exec($ch);
			curl_close($ch);
			$user_array = ssoParse($resp);
		} else {
			$user_array = ssoSearch($user);
		}

		if(!empty($user_array['user'])) {

			$this->user		= $user_array['user'];
			$this->name 	= $user_array['name'];
			$this->email	= $user_array['email'];

			// OnEmpty Create Admin
			if(!$this->checkAdmin()) $this->addUser(false, false, true);
			
			// Auto Create
			if($this->autoCreateUser) {
				if(!$this->localDetails()) {
					$this->addUser(true, false, false);
					
					mysql_insert("users_leave", 
					array(
						'user' 			=> '\''.$this->user.'\'',
						'year'			=> '\''.$this->yearDates().'\'',
						'area_id'		=> '\''.AREA.'\''
					)
					, false);
				}
			}
		}
	}
	
	public function addUser($is_booking = false, $is_supervisor = false, $is_admin = false)
	{
		if(!$this->localDetails()) {
			
			require_once('class/getcolor.inc.php');
			$getColor = new getColor($this->user['user']);
			
			$query = mysql_query("SELECT id FROM users WHERE active = '0' AND user = '".$this->user."' AND area_id = '".AREA."' LIMIT 1");
			$result = mysql_fetch_array($query);
			if(!empty($result)) {
				mysql_update("users", $result['id'], 
				array(
					'color'			=> '\''.$getColor->color().'\'',
					'textColor'		=> '\''.$getColor->textColor().'\'',
					'is_booking' 	=> ($is_booking ? '1' : '0'),
					'is_supervisor' => ($is_supervisor ? '1' : '0'),
					'is_admin' 		=> ($is_admin ? '1' : '0'),
					'active' 		=> '1'
				));
			} else {
				mysql_insert("users", 
				array(
					'user' 			=> '\''.$this->user.'\'',
					'email' 		=> '\''.$this->email.'\'',
					'color'			=> '\''.$getColor->color().'\'',
					'textColor'		=> '\''.$getColor->textColor().'\'',
					'is_booking' 	=> ($is_booking ? '1' : '0'),
					'is_supervisor' => ($is_supervisor ? '1' : '0'),
					'is_admin' 		=> ($is_admin ? '1' : '0'),
					'area_id'		=> '\''.AREA.'\''
				)
				, false);
			}
			return true;
		} else {
			return false;	
		}
	}
	
	public function removeUser()
	{
		return mysql_update("users", $this->user, array('active' => 0),"user");
	}
	
	private function checkAdmin()
	{
		$query = mysql_query("SELECT id FROM users WHERE is_admin = '1' AND active = '1' AND area_id = '".AREA."' LIMIT 1");
		$result = mysql_fetch_array($query);
		if(!empty($result)) return true;
		return false;
	}
	
	public function localDetails()
	{
		$query = mysql_query("SELECT color, textColor, is_admin, is_supervisor, is_booking, weekend FROM users WHERE active = '1' AND user = '".$this->user."' AND area_id = '".AREA."' LIMIT 1");
		$result = mysql_fetch_array($query);
		if(!empty($result)) {
			$this->color			= $result['color'];
			$this->textColor		= $result['textColor'];
			$this->is_admin			= ($result['is_admin'] ? true : false);
			$this->is_supervisor	= ($result['is_supervisor'] ? true : false);
			$this->is_booking		= ($result['is_booking'] ? true : false);
			$this->weekend			= ($result['weekend'] ? true : false);
			return true;
		}
		return false;
	}
	
	public function yearDates($year = NULL, $adjust = 0) // Defualt to the current year
	{
		if(!empty($year)) {
			$years	= explode('/', $year);
			$syCalc = $years[0] + $adjust;
			$fyCalc = ('20'.$years[0]) + $adjust;
		} else {
			$syCalc = date('y') + $adjust;
			$fyCalc = date('Y') + $adjust;
		}

		// 1st Oct rollover
		if(date('n') >= 10) { 
			$year = sprintf('%02d',$syCalc).'/'.sprintf('%02d',$syCalc + 1);
			$this->leave[$year]['start'] 	= mktime(0,0,0,10,1,$fyCalc);
			$this->leave[$year]['end']		= mktime(0,0,0,10,1,$fyCalc + 1);
		} else {
			$year = sprintf('%02d',$syCalc - 1).'/'.sprintf('%02d',$syCalc);
			$this->leave[$year]['start'] 	= mktime(0,0,0,10,1,$fyCalc - 1);
			$this->leave[$year]['end']		= mktime(0,0,0,10,1,$fyCalc);
		}

		return $year;
	}
	
	public function getSupervisees() // Find users supervisees
	{
		if($this->is_supervisor == true && empty($this->supervisee)) {
			$supervisee_query = mysql_query("SELECT user FROM users_supervisors WHERE supervisor = '".$this->user."' AND area_id = '".AREA."'");
			while($supervisee_result = mysql_fetch_array($supervisee_query,MYSQL_ASSOC)) $this->supervisee[] = $supervisee_result['user'];
		}
		return $this->supervisee;
	}
	
	public function getSupervisors() // Find users supervisors
	{
		if($this->is_booking == true && empty($this->supervisor)) {
			$supervisor_query = mysql_query("SELECT supervisor FROM users_supervisors WHERE user = '".$this->user."' AND area_id = '".AREA."'");
			while($supervisor_result = mysql_fetch_array($supervisor_query,MYSQL_ASSOC)) $this->supervisor[] = $supervisor_result['supervisor'];
		}
		return $this->supervisor;
	}
	
	public function getAuthorise() // Get annual leave you should authorise
	{
		if($this->is_supervisor == true || $this->is_admin == true) {
			if(empty($this->authorise)) {
				$authorise_where = '';
				if($this->is_supervisor == true) {
					$authorise_where .= "us.supervisor = '".$this->user."' OR ";
				}
				if($this->is_admin == true) {
					$authorise_where .= "(
												us.supervisor IS NULL 
												AND e.user != '".$this->user."'
											) OR ";
											
					$prevFiveDays = time() - 432000;
					$authorise_where .= "(
												us.supervisor IS NOT NULL 
												AND UNIX_TIMESTAMP(e.modified) < '$prevFiveDays'
												AND e.user != '".$this->user."'
											) OR ";	
				}
				
				if(!empty($authorise_where)) {
					$authorise_where = rstrtrim($authorise_where, 'OR ');
	
					$authorise_query = mysql_query("SELECT
														e.id,
														e.user,
														e.start,
														e.end,
														e.allDay
													FROM
														events e
													LEFT OUTER JOIN
														users_supervisors us
													ON
														(
															e.user = us.user)
													AND (
															e.area_id = us.area_id)
													WHERE
														e.area_id = '".AREA."'
													AND e.auth = 0
													AND ($authorise_where)");
					while($authorise_result = mysql_fetch_array($authorise_query,MYSQL_ASSOC)) {
						$localUserDetails 	= new userDetails($authorise_result['user']);
						$authorise_result['name'] = $localUserDetails->name;
						$authorise_result['email'] = $localUserDetails->email;
						$this->authorise[] = $authorise_result;
					}
				}
			}
		}
		return $this->authorise;
	}
	
	private function getLeave($year)
	{
		if(!empty($year)) {
			// Get leave allocation
			$query = mysql_query("SELECT id, unit, unitNum, suppNum, dayHours FROM users_leave AS u WHERE user = '".$this->user."' AND year = '$year' && area_id = '".AREA."' LIMIT 1");
			$result = mysql_fetch_array($query);
			if(!empty($result)) {
				$this->leave[$year]['id'] 		= $result['id'];
				$this->leave[$year]['unit'] 	= $result['unit'];
				$this->leave[$year]['unitNum'] 	= $result['unitNum'];
				$this->leave[$year]['suppNum'] 	= $result['suppNum'];
				$this->leave[$year]['combNum'] 	= $result['unitNum'] + $result['suppNum'];
				$this->leave[$year]['unitRem'] 	= $result['unitNum'] + $result['suppNum'];
				$this->leave[$year]['dayHours'] = $result['dayHours'];
			} else {
				$now = $this->yearDates();
				if($now == $year) { // Only create rollover year records if we're querying the current year
					
					// Create a new record for this academic year with the data from last
					if($this->autoCreateNYLeave == true) {
						$this->autoCreateNYLeave = false; // Do not get into an infinite loop, stop after a single year
						
						$last_year = $this->yearDates($year, -1);
						$this->getLeave($last_year);
						$this->getRemaining($last_year);

						if(!empty($this->leave[$last_year]['id'])) {
							mysql_insert('users_leave', array(
								'user' 		=> '\''.$this->user.'\'',
								'year' 		=> '\''.$year.'\'',
								'unit' 		=> '\''.$this->leave[$last_year]['unit'].'\'',
								'unitNum' 	=> '\''.$this->leave[$last_year]['unitNum'].'\'',
								'suppNum' 	=> '\''.$this->leave[$last_year]['unitRem'].'\'',
								'dayHours' 	=> '\''.$this->leave[$last_year]['dayHours'].'\'',
								'area_id' 	=> '\''.AREA.'\''
							)
							,false);
									
							$this->leave[$year]['id'] 		= mysql_insert_id();
							$this->leave[$year]['unit'] 	= $this->leave[$last_year]['unit'];
							$this->leave[$year]['unitNum'] 	= $this->leave[$last_year]['unitNum'];
							$this->leave[$year]['suppNum'] 	= $this->leave[$last_year]['unitRem'];
							$this->leave[$year]['combNum'] 	= $this->leave[$last_year]['unitNum'] + $this->leave[$last_year]['unitRem'];
							$this->leave[$year]['unitRem'] 	= $this->leave[$last_year]['unitNum'] + $this->leave[$last_year]['unitRem'];
							$this->leave[$year]['dayHours'] = $this->leave[$last_year]['dayHours'];
						}
					}
				
					// No leave record has been found for the current year
					// Disable booking
					
					if(empty($this->leave[$year]['id'])) {
						mysql_update("users", $this->user, array('is_booking' => 0),"user");
						return false;	
					}					
				}
			}
			return true;
		}
	}
	
	private function getRemaining($year = NULL)
	{	
		// Get year details
		$year = $this->yearDates($year);
		
		// Get years leave
		$leaveAvailable = $this->getLeave($year);
		if($leaveAvailable) {
		
			// Calculate remaining leave
			$events_query = mysql_query("SELECT UNIX_TIMESTAMP(start) AS start, UNIX_TIMESTAMP(end) AS end, allDay FROM events WHERE ((user = 'customary' AND area_id = '0') OR (user = '".$this->user."' AND area_id = '".AREA."')) AND UNIX_TIMESTAMP(start) > '".$this->leave[$year]['start']."' AND UNIX_TIMESTAMP(end) < '".$this->leave[$year]['end']."'");
			while($events_result = mysql_fetch_array($events_query,MYSQL_ASSOC)) $this->events[$year][] = $events_result;
			
			foreach($this->events[$year] as $events_result) {
				if($this->leave[$year]['unit'] == 0) { // Days
					if($events_result['allDay'] == 1) {
						if(true) { // Count weekends?
							$start = $events_result['start'];
							while($start < $events_result['end']) {
								if(date('N',$start) != 6 && date('N',$start) != 7) $this->leave[$year]['unitRem'] -= 1;
								$start += 86400;
							}
						} else {
							$day_calc = $events_result['end'] - $events_result['start'];
							$day_calc = $day_calc / 86400;
							$this->leave[$year]['unitRem'] -= floor($day_calc) + 1;
						}
					} else {
						$this->leave[$year]['unitRem'] -= 0.5;
					}
				} elseif($this->leave[$year]['unit'] == 1) { // Hours
					if($events_result['allDay'] == 1) {
						if(true) { // Count weekends?
							$start = $events_result['start'];
							while($start < $events_result['end']) {
								if(date('N',$start) != 6 && date('N',$start) != 7) $this->leave[$year]['unitRem'] -= $this->leave[$year]['dayHours'];
								$start += 86400;
							}
						} else {
							$day_calc = $events_result['end'] - $events_result['start'];
							$day_calc = $day_calc / 86400;
							$day_calc = floor($day_calc) + 1; // Finally get the number of days
							$this->leave[$year]['unitRem'] -= ($this->leave[$year]['dayHours'] * $day_calc); // Times the normal working hours by the number of days and remove from the remaining total
						}
					} else {
						if($events_result['end'] - $events_result['start'] > 27000) { // If the hours booked on a day are more than 7.5 hours default to 7.5
							$this->leave[$year]['unitRem'] -= $this->leave[$year]['dayHours'];
						} else {
							$hr_calc = $events_result['start'];					
							while($hr_calc < $events_result['end']) {
								if(date('G',$hr_calc) >= 8 && date('G',$hr_calc) <= 17) $this->leave[$year]['unitRem'] -= 0.5;
								$hr_calc += 1800;
							}
						}
					}
				}
			}
			
		}
		return $year;
	}
	
	public function getArray($year = NULL)
	{
		$array = array();
		
		if($this->localDetails()) {
		
			$array = array(
				'user'			=> $this->user,
				'name'			=> $this->name,
				'color'			=> $this->color,
				'textColor'		=> $this->textColor,
				'is_admin'		=> $this->is_admin,
				'is_supervisor'	=> $this->is_supervisor,
				'is_booking'	=> $this->is_booking,
				'weekend'		=> $this->weekend
			);
			
			if(!empty($this->is_booking)) {
				$year = $this->getRemaining($year);
				if(!empty($this->leave[$year]['id'])) {
					$array = array_merge($array,array(
						'leaveId'	=> (isset($this->leave[$year]['id']) ? $this->leave[$year]['id'] : ''),
						'unit'		=> (isset($this->leave[$year]['unit']) ? $this->leave[$year]['unit'] : ''),
						'unitNum'	=> (isset($this->leave[$year]['unitNum']) ? $this->leave[$year]['unitNum'] : ''),
						'suppNum'	=> (isset($this->leave[$year]['suppNum']) ? $this->leave[$year]['suppNum'] : ''),
						'combNum'	=> (isset($this->leave[$year]['combNum']) ? $this->leave[$year]['combNum'] : ''),
						'unitRem'	=> (isset($this->leave[$year]['unitRem']) ? $this->leave[$year]['unitRem'] : ''),
						'dayHours'	=> (isset($this->leave[$year]['dayHours']) ? $this->leave[$year]['dayHours'] : '')
					));
				}
			}
		}
		
		return $array;
	}
}
?>