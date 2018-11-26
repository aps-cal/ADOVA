<?php
class getColor {
	private $user 		= NULL;
	private $color		= NULL;
	private $textColor	= NULL;
	private $colors		= array("#00e4e4" => "#000000", // Background => Font
								"#000000" => "#FFFFFF",
								"#0000FF" => "#FFFFFF",
								"#A02820" => "#FFFFFF",
								"#80FF00" => "#000000",
								"#FF00FF" => "#FFFFFF",
								"#808080" => "#FFFFFF",
								"#008000" => "#FFFFFF",
								"#00e600" => "#000000",
								"#800000" => "#FFFFFF",
								"#000080" => "#FFFFFF",
								"#808000" => "#FFFFFF",
								"#de8b00" => "#FFFFFF",
								"#800080" => "#FFFFFF",
								"#FF0000" => "#FFFFFF",
								"#C0C0C0" => "#000000",
								"#008080" => "#FFFFFF",
								"#F080F0" => "#000000",
								"#ffa200" => "#000000",
								"#cc9999" => "#000000",	
								"#999999" => "#FFFFFF",
								"#666666" => "#FFFFFF",
								"#33ccff" => "#000000"						
							);

	public function __construct($user)
	{
		$query = mysql_query("SELECT user, color, textColor FROM users WHERE active = '1' AND area_id = '".AREA."' OR area_id = 0");
		while($result = mysql_fetch_array($query)) {
			if($result['user'] == $user) {
				$this->color 		= $result['color'];
				$this->textColor 	= $result['textColor'];
				break;
			} else {
				unset($this->colors[$result['color']]);
			}
		}
	}
	
	public function color()
	{
		if($this->color === NULL) $this->setColors();
		return $this->color;
	}
	
	public function textColor()
	{
		if($this->textColor === NULL) $this->setColors();
		return $this->textColor;
	}
	
	private function setColors()
	{
		$this->color = array_rand($this->colors);
		$this->textColor = $this->colors[$this->color];
		unset($this->colors[$this->color]);
	}
}
?>