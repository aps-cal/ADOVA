<?php

/*
/  <a href='https://websignon.warwick.ac.uk/origin/logout?target=https://troja.csv.warwick.ac.uk/sso/sso.php?'>Sign in</a>
*/
   

class warwick_sso {
	private $token 			= '115bbb94ca0d2883a3233f53ec5b75d58e506dd6';
	private $wsos_api_key	= 'troja.csv.warwick.ac.uk';
	
	public $user			= array(); // The currently logged in SSO User
	
	public function __construct()
	{		
		$this->token = $_COOKIE['WarwickSSO'];
		if(empty($this->token)) {
			$this->login();
		} else {
			$this->user = $this->parse(file_get_contents('https://websignon.warwick.ac.uk/sentry?requestType=1'.$this->wsos_api_key.'&token='.$this->token));
			if(empty($this->user['id'])) {
				$this->login();
			}
		}
	}
	
	// Parse the returned string from the SSO
	private function parse($returnSSOString)
	{
		$array = array();
		$pieces = explode("\n", $returnSSOString);
		foreach ($pieces as $line) {
			list($field, $string) = split('=', $line);
			if(!empty($field)) {
				if($field == 'id') $array[$field] = (int) $string;
				else $array[$field] = makesafe($string);
			}
		}
		return $array;
	}
	
	// Search for a User by Username
	public function search($user)
	{		
		$search = $this->parse(file_get_contents("https://websignon.warwick.ac.uk/sentry?requestType=4".$this->wsos_api_key."&user=$user"));
		if(!empty($search['id'])) {
			return $search;
		} else {
			$search['id'] = 0;
			return $search;
		}
	}
	public function login()
	{
		$return_page = 'http'.($_SERVER['HTTPS'] ? 's' : '').'://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?'.$get;
		header("Location: https://websignon.warwick.ac.uk/origin/slogin?providerId=urn%3A".$_SERVER['SERVER_NAME']."%3A    YOUR SERVICE NAME HERE    %3Aservice&target=$return_page");
		exit();
	}
	public function logout()
	{
		$return_page = 'http'.($_SERVER['HTTPS'] ? 's' : '').'://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?'.$get;
		return "https://websignon.warwick.ac.uk/origin/logout?target=$return_page";
	}
}
?>
