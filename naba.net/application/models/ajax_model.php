<?php
class Ajax_model extends CI_Model {
    public function __construct()	{
        $this->load->database();
        $this->load->library('session');
        $this->load->model('Referral_model'); 
    }
    
    public function test($data){
        $data2 = array(
            array(
                "first_name" => "Darian",
                "last_name" => "Brown",
                "age" => "28",
                "email" => "darianbr@example.com"
            ),
            array(
                "first_name" => "John",
                "last_name" => "Doe",
                "age" => "47",
                "email" => "john_doe@example.com"
            )
        );
        /* encode the array as json. this will output [{"first_name":"Darian","last_name":"Brown","age":"28","email":"darianbr@example.com"},{"first_name":"John","last_name":"Doe","age":"47","email":"john_doe@example.com"}] */
        echo json_encode($data2);
    }
    
    
    public function GetStudents($data){
        
    }
    
    
    public function GetCountryOptions($data){
        if(!isset($data['Country'])){ $data['Country'] = 'China'; }
        $sql = "SELECT DISTINCT Country as Name FROM districts "
            ."WHERE Country IS NOT NULL "
            ."ORDER BY Country ";   
        $query = $this->db->query($sql);
        $Countries = $query->result_array();
        $result = '<option value=""'
                .((!isset($data['Country']) or $data['Country']=="")?" Selected":"")
                .'>[ Select Country ]</option>';
        if(isset($Countries)){
            // Get missing data at this point after full list has been populated
            $data = $this->SetPlaceData($data);
            foreach($Countries as $country){
                $result .= '<option value="'.$country['Name'].'"';
                $result .= ($country['Name']==(isset($data['Country'])?$data['Country']:'#')?' Selected':'');
                $result .= '>'.$country['Name'].'</option>';
            }
        }
        echo $result;
    }

    public function GetProvinceOptions($data){
        $sql = "SELECT DISTINCT Province as Name FROM districts "
            ."WHERE Province IS NOT NULL ";
        if(isset($data['Country']) AND !$data['Country'] ==''){
            $sql.="AND Country = '".$data['Country']."' ";      }
        $sql.="ORDER BY Province ";   
        $query = $this->db->query($sql);
        $Provinces = $query->result_array();
        $result = '<option value=""'
                .((!isset($data['Province']) or $data['Province']=="")?" Selected":"")
                .'>[ Select Province ]</option>';
        if(isset($Provinces)){
            // Get missing data at this point after full list has been populated
            $data = $this->SetPlaceData($data);
            foreach($Provinces as $province){
                $result .= '<option value="'.$province['Name'].'"';
                $result .= ($province['Name']==(isset($data['Province'])?$data['Province']:'#')?' Selected':'');
                $result .= '>'.$province['Name'].'</option>';
            }
        }
        echo $result;
    }
    
    public function GetCityOptions($data){
        $sql = "SELECT DISTINCT City as Name FROM districts "
            ."WHERE City IS NOT NULL ";
        if(isset($data['Country']) AND !$data['Country'] ==''){
            $sql.="AND Country = '".$data['Country']."' ";      }
        if(isset($data['Province']) AND !$data['Province'] ==''){
            $sql.="AND Province = '".$data['Province']."' ";}
        $sql.="ORDER BY City ";   
        $query = $this->db->query($sql);
        $Cities = $query->result_array();
        $result = '<option value=""'
                .((!isset($data['City']) or $data['City']=="")?" Selected":"")
                .'>[ Select City ]</option>';
        if(isset($Cities)){
            // Get missing data at this point after full list has been populated
            $data = $this->SetPlaceData($data);
            foreach($Cities as $city){
                $result .= '<option value="'.$city['Name'].'"';
                $result .= ($city['Name']==(isset($data['City'])?$data['City']:'#')?' Selected':'');
                $result .= '>'.$city['Name'].'</option>';
            }
        }
        echo $result;
    }

    public function GetPostcodeOptions($data){
        $sql = "SELECT DISTINCT Postcode as Name FROM districts "
            ."WHERE Postcode IS NOT NULL ";
        if(isset($data['Country']) AND !$data['Country'] ==''){
            $sql.="AND Country = '".$data['Country']."' ";      }
        if(isset($data['Province']) AND !$data['Province'] ==''){
            $sql.="AND Province = '".$data['Province']."' ";}
        if(isset($data['City']) AND !$data['City'] ==''){
            $sql.="AND City = '".$data['City']."' ";}
        $sql.="ORDER BY Postcode ";   
        $query = $this->db->query($sql);
        $Postcodes = $query->result_array();
        $result = '<option value=""'
                .((!isset($data['Postcode']) or $data['Postcode']=="")?" Selected":"")
                .'>[ Select Postcode ]</option>';
        if(isset($Postcodes)){
            // Get missing data at this point after full list has been populated
            $data = $this->SetPlaceData($data);
            foreach($Postcodes as $postcode){
                $result .= '<option value="'.$postcode['Name'].'"';
                $result .= ($postcode['Name']==(isset($data['Postcode'])?$data['Postcode']:'#')?' Selected':'');
                $result .= '>'.$postcode['Name'].'</option>';
            }
        }
        echo $result;
    }

    public function GetDistrictOptions($data){
        $sql = "SELECT DISTINCT District as Name FROM districts "
            ."WHERE District IS NOT NULL ";
        if(isset($data['Country']) AND !$data['Country'] ==''){
            $sql.="AND Country = '".$data['Country']."' ";      }
        if(isset($data['Province']) AND !$data['Province'] ==''){
            $sql.="AND Province = '".$data['Province']."' ";}
        if(isset($data['City']) AND !$data['City'] ==''){
            $sql.="AND City = '".$data['City']."' ";}
        //if(isset($data['Postcode']) AND !$data['Postcode'] ==''){
        //    $sql.="AND Postcode = '".$data['Postcode']."' ";}
        $sql.="ORDER BY District ";   
        $query = $this->db->query($sql);
        $Districts = $query->result_array();
        $result = '<option value=""'
                .((!isset($data['District']) or $data['District']=="")?" Selected":"")
                .'>[ Select District ]</option>';
        if(isset($Districts)){
            // Get missing data at this point after full list has been populated
            $data = $this->SetPlaceData($data);
            foreach($Districts as $district){
                $result .= '<option value="'.$district['Name'].'"';
                $result .= ($district['Name']==(isset($data['District'])?$data['District']:'#')?' Selected':'');
                $result .= '>'.$district['Name'].'</option>';
            }
        }
        echo $result;
    }
/*
    public function GetDistrictCountry($data){
       $sql = "SELECT Country FROM districts "
           ."WHERE Country IS NOT NULL ";
        if(isset($data['Province']) and !$data['Province'] == ''){
            $sql.="AND Province = '".$data['Province']."' ";
        } 
        if(isset($data['City']) and !$data['City'] == ''){
            $sql.="AND City = '".$data['City']."'";
        }
        if(isset($data['Postcode']) and !$data['Postcode'] == ''){
            $sql.="AND Postcode = '".$data['Postcode']."' ";
        }
        if(isset($data['District']) and !$data['District'] == ''){
            $sql.="AND District = '".$data['District']."' ";
        }   
        $query = $this->db->query($sql);
        $row = $query->row_array();
        if($row){
            echo $row['Country'];
        } else {
            echo '';
        }
    }
    
    public function GetDistrictProvince($data){
       $sql = "SELECT Province FROM districts "
           ."WHERE Province IS NOT NULL ";
        if(isset($data['City']) and !$data['City'] == ''){
            $sql.="AND City = '".$data['City']."'";
        }
        if(isset($data['Postcode']) and !$data['Postcode'] == ''){
            $sql.="AND Postcode = '".$data['Postcode']."' ";
        }
        if(isset($data['District']) and !$data['District'] == ''){
            $sql.="AND District = '".$data['District']."' ";
        }   
        $query = $this->db->query($sql);
        $row = $query->row_array();
        if($row){
            echo $row['Province'];
        } else {
            echo '';
        }
    }
    
    public function GetDistrictCity($data){
       $sql = "SELECT City FROM districts "
           ."WHERE City IS NOT NULL ";
        if(isset($data['Postcode']) and !$data['Postcode'] == ''){
            $sql.="AND Postcode = '".$data['Postcode']."' ";
        }
        if(isset($data['District']) and !$data['District'] == ''){
            $sql.="AND District = '".$data['District']."' ";
        }   
        $query = $this->db->query($sql);
        $row = $query->row_array();
        if($row){
            echo $row['City'];
        } else {
            echo '';
        }
    }
    public function GetDistrictPostcode($data){
       $sql = "SELECT Postcode FROM districts "
           ."WHERE Postcode IS NOT NULL ";
        if(isset($data['District']) and !$data['District'] == ''){
            $sql.="AND District = '".$data['District']."' ";
        }   
        $query = $this->db->query($sql);
        $row = $query->row_array();
        if($row){
            echo $row['Postcode'];
        } else {
            echo '';
        }
    }
    
//    public function SetDistrictData($data){
//       $sql = "SELECT * FROM districts "
//          ."WHERE District IS NOT NULL ";
//        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
//            $sql.="AND PlaceID = '".$data['PlaceID']."' ";
//        }
//        $query = $this->db->query($sql);
//        $row = $query->row_array();
//        if($row){
//            echo $row['District'];
//        } else {
//            echo 'No value';
//        }
//    }

   public function GetPlaceCountry($data){
       $sql = "SELECT Country FROM gatekeeperplaces "
           ."WHERE Country IS NOT NULL ";
        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
            $sql.="AND PlaceID = '".$data['PlaceID']."' ";
        }
        $query = $this->db->query($sql);
        $row = $query->row_array();
        if($row){
            echo $row['Country'];
        } else {
            echo '';
        }
    }
    
    public function GetPlaceProvince($data){
       $sql = "SELECT Province FROM gatekeeperplaces "
           ."WHERE Province IS NOT NULL ";
        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
            $sql.="AND PlaceID = '".$data['PlaceID']."' ";
        }
        $query = $this->db->query($sql);
        $row = $query->row_array();
        if($row){
            echo $row['Province'];
        } else {
            echo '';
        }
    }
    
    public function GetPlaceCity($data){
       $sql = "SELECT City FROM gatekeeperplaces "
           ."WHERE City IS NOT NULL ";
        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
            $sql.="AND PlaceID = '".$data['PlaceID']."' ";
        }
        $query = $this->db->query($sql);
        $row = $query->row_array();
        if($row){
            echo $row['City'];
        } else {
            echo '';
        }
    }
    public function GetPlacePostcode($data){
       $sql = "SELECT Postcode FROM gatekeeperplaces "
           ."WHERE Postcode IS NOT NULL ";
        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
            $sql.="AND PlaceID = '".$data['PlaceID']."' ";
        }
        $query = $this->db->query($sql);
        $row = $query->row_array();
        if($row){
            echo $row['Postcode'];
        } else {
            echo '';
        }
    }
    public function GetPlaceDistrict($data){
       $sql = "SELECT District FROM gatekeeperplaces "
           ."WHERE District IS NOT NULL ";
        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
            $sql.="AND PlaceID = '".$data['PlaceID']."' ";
        }
        $query = $this->db->query($sql);
        $row = $query->row_array();
        if($row){
            echo $row['District'];
        } else {
            echo '';
        }
    }
*/    
    public function SetPlaceData($data){
        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
            $sql = "SELECT * FROM gatekeeperplaces "
            ."WHERE PlaceID = '".$data['PlaceID']."' ";
            $query = $this->db->query($sql);
            $row = $query->row_array();
            if($row){
                $data['Country'] = $row['Country'];
                $data['Province'] = $row['Province'];
                $data['City'] = $row['City'];
                $data['Postcode'] = $row['Postcode'];
                $data['District'] = $row['District'];
            }

        } else {
            $sql = "SELECT * FROM districts "
                ."WHERE District IS NOT NULL ";
            if(isset($data['District']) AND !$data['District'] ==''){
                $sql.="AND District = '".$data['District']."' ";
            } elseif(isset($data['Postcode']) AND !$data['Postcode'] ==''){
                $sql.="AND Postcode = '".$data['Postcode']."' ";
            } elseif(isset($data['City']) AND !$data['City'] ==''){
                $sql.="AND City = '".$data['City']."' ";
            } elseif(isset($data['Province']) AND !$data['Province'] ==''){
                $sql.="AND Province = '".$data['Province']."' ";
            } elseif(isset($data['Country']) AND !$data['Country'] ==''){
                $sql.="AND Country = '".$data['Country']."' ";
            }
            $query = $this->db->query($sql);
            $row = $query->row_array();
            if($row){
                // Only set the values greater that those already known. 
                if(isset($data['District']) AND !$data['District'] ==''){
                    if($data['Postcode']==''){
                        $data['Postcode'] = $row['Postcode'];
                    }
                } 
                if(isset($data['Postcode']) AND !$data['Postcode'] ==''){
                    if($data['City']==''){
                        $data['City'] = $row['City'];
                    }
                } 
                if(isset($data['City']) AND !$data['City'] ==''){
                    if($data['Province']==''){
                        $data['Province'] = $row['Province'];
                    }   
                } 
                if(isset($data['Province']) AND !$data['Province'] ==''){
                    $data['Country'] = $row['Country'];
                }
            }
        }   
        return($data);
    }

    
    public function GetMyPlacesRadioList($data){
        $data['ListOrder'] = (isset($data['ListOrder'])?$data['ListOrder']:"Country, Province, City, District"); 
	$data['MemberID'] = (isset($data['MemberID'])?$data['MemberID']:""); 
        $data['GatekeeperID'] = (isset($data['GatekeeperID'])?$data['GatekeeperID']:$data['MemberID']);
        $data['PlaceID'] = (isset($data['PlaceID'])?$data['PlaceID']:"");
        $sql = "SELECT DISTINCT PlaceID, GatekeeperID, "
            ."Country, Province, City, Postcode, District, "
            ."Returnee, Contact, Fellowship, Church, Nearby, Reminder "
            ."FROM gatekeeperplaces WHERE GatekeeperID = ? ";
        if(isset($data['Country']) and !$data['Country'] == ''){
            $sql.="AND Country = '".$data['Country']."' ";
        }
        if(isset($data['Province']) and !$data['Province'] == ''){
            $sql.="AND Province = '".$data['Province']."' ";
        } 
        if(isset($data['City']) and !$data['City'] == ''){
            $sql.="AND City = '".$data['City']."'";
        }
        if(isset($data['Postcode']) and !$data['Postcode'] == ''){
            $sql.="AND Postcode = '".$data['Postcode']."' ";
        }
        if(isset($data['District']) and !$data['District'] == ''){
            $sql.="AND District = '".$data['District']."' ";
        }   
        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
            $sql.="AND PlaceID = '".$data['PlaceID']."' ";
        }
        $sql.="ORDER BY ".$data['ListOrder']; 
	$query = $this->db->query($sql, array($data['MemberID'])); 
        $results = $query->result_array();
        $result = '';
        foreach ($results as $row){ 
            $result .= "<label for=\"PlaceID".$row['PlaceID']."\">".$row['Province'].", "
                    .($row['City']==$row['Province']?"":$row['City'].", ")
                    .($row['District']==''?$row['Postcode']:$row['District']);
            $result .= "</label>"; 
            $result .= "<input type=\"radio\" name=\"PlaceID\" id=\"PlaceID".$row['PlaceID']
                    ."\" value=\"".$row['PlaceID']."\" class=\"MyPlaceRadio\" "
                    .((count($results)==1 
                        or $row['PlaceID']==$data['PlaceID']
                        or ($row['Country']==$data['Country']
                            and $row['Province']==$data['Province']
                            and $row['City']==$data['City']
                            and chknul($row['Postcode'])==chknul($data['Postcode'])
                            and chknul($row['District'])==chknul($data['District'])
                        )
                    )?"checked=\"checked\"":"")."/>"; 
        }    
        if($result ==''){
            if(isset($data['City']) and !$data['City'] == ''){
                $result .= '<H4>Create NEW place record</H4>';
                if(isset($data['District']) and $data['District'] == ''){
                    $result .='<p>Please try to select a Postcode / District</p>';
                }
               //$result .='<fieldset data-role="controlgroup" data-mini="true">';
               $result .="<input type=\"radio\" name=\"PlaceID\" id=\"PlaceID\" >"; 
               $result .="<label for=\"PlaceID\">New</label>";
               //$result .="</fieldset>";
            } else {
                $result .= '<H4>No places listed</h4><p>Please refine place selection</p>';
            }
        } else {
            //$result .= '<H4>My Places List </H4>';
            //$result .= '<fieldset data-role="controlgroup" data-mini="true">';
            //   .$result.'</fieldset>';
            //$result .= "<input type=\"button\" "
        }
        echo $result;
    }   

    public function chknul($val){
        $result = '#';
        if(isset($val)){
            if($val!==''){
                $result=$val;
            }
        }
        return($result);
    }
        
    public function GetMyPlacesSelect($data){
        $data['ListOrder'] = (isset($data['ListOrder'])?$data['ListOrder']:"Country, Province, City, District"); 
	$data['MemberID'] = (isset($data['MemberID'])?$data['MemberID']:""); 
        $data['GatekeeperID'] = (isset($data['GatekeeperID'])?$data['GatekeeperID']:$data['MemberID']);
        $data['PlaceID'] = (isset($data['PlaceID'])?$data['PlaceID']:"");
        $sql = "SELECT DISTINCT PlaceID, GatekeeperID, "
            ."Country, Province, City, Postcode, District, "
            ."Returnee, Contact, Fellowship, Church, Nearby, Reminder "
            ."FROM gatekeeperplaces "
            ."WHERE GatekeeperID = ? ";
        if(isset($data['Country']) and !$data['Country'] == ''){
            $sql.="AND Country = '".$data['Country']."' ";
        }
        if(isset($data['Province']) and !$data['Province'] == ''){
            $sql.="AND Province = '".$data['Province']."' ";
        } 
        if(isset($data['City']) and !$data['City'] == ''){
            $sql.="AND City = '".$data['City']."'";
        }
        if(isset($data['Postcode']) and !$data['Postcode'] == ''){
            $sql.="AND Postcode = '".$data['Postcode']."' ";
        }
        if(isset($data['District']) and !$data['District'] == ''){
            $sql.="AND District = '".$data['District']."' ";
        }
        $sql.="ORDER BY ".$data['ListOrder']; 
	$query = $this->db->query($sql, array($data['MemberID'])); 
        $result = '<option value=""'
                .((!isset($data['PlaceID']) or $data['PlaceID']=="")?" Selected":"")
                .'>[ Select Place ]</option>';
        $size = 1;
        foreach ($query->result_array() as $row){ 
            $result .= '<option value="'.$row['PlaceID'].'"'
                .($row['PlaceID']==(isset($data['PlaceID'])?$data['PlaceID']:'#')?' Selected':'').'>' 
                .$row['Province'].", "
                .($row['City']==$row['Province']?"":$row['City'].', ')
                .($row['District']==''?$row['Postcode']:$row['District'])
                .'</option>';  
//            $size++;
        } 
//        $size = ($size>10?10:$size);
        //$result = '<select id="PlaceID" name="PlaceID" placeholder="[Select a Place]" size='.$size.' required >'
       //         .($result==''?'<li class=\"ui-btn\">No Places Listed</li>':$result)
        //        .'</select>';
        //echo $result; 
        echo ($result==''?'<option>No Places Listed</option>':$result);
    }   

    
    public function GetMyPlacesFieldSet($data){
        $sql = "SELECT Returnee, Contact, Fellowship, Church, Nearby "
            ."FROM gatekeeperplaces "
            ."WHERE GatekeeperID = '".$data['MemberID']."' ";
        if(isset($data['Country']) and !$data['Country'] == ''){
            $sql.="AND Country = '".$data['Country']."' ";
        }
        if(isset($data['Province']) and !$data['Province'] == ''){
            $sql.="AND Province = '".$data['Province']."' ";
        } 
        if(isset($data['City']) and !$data['City'] == ''){
            $sql.="AND City = '".$data['City']."'";
        }
        if(isset($data['Postcode']) and !$data['Postcode'] == ''){
            $sql.="AND Postcode = '".$data['Postcode']."' ";
        }
        if(isset($data['District']) and !$data['District'] == ''){
            $sql.="AND District = '".$data['District']."' ";
        }   
        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
            $sql.="AND PlaceID = '".$data['PlaceID']."' ";
        }
        $query = $this->db->query($sql);
        $results = $query->result_array();
        //$row = $query->row_array();
        
        $result = '';
        if(count($results)==1 
            or (isset($data['City']) and !$data['City'] == '')
            or (isset($data['Postcode']) and !$data['Postcode'] == '')
            or (isset($data['District']) and !$data['District'] == '')){
            if(count($results)==1) $row = $results[0]; 
            
            
         //   $result .= '<label>'
         //       .'<select name="Returnee" id="Returnee" data-role="slider">'
         //       .'<option value="N">No</option>'
         //       .'<option value="Y"'
         //       .((isset($row['Returnee']) and $row['Returnee']=='Y')?' Selected="Selected"':'')
         //       .">Yes</option>"
         //       ."</select>Another Returnee</label>"; 
            
            
            $result .= '<legend>Tick all options that apply:</legend>';
            $result .= '&nbsp;<input type="checkbox" name="Returnee" id="Returnee" '
                    .((isset($row['Returnee']) and $row['Returnee']=='Y')?' Checked="Checked"':'').'/>';
            $result .= '<label for="Returnee">Another Returnee</label>';
            $result .= '&nbsp;<input type="checkbox" name="Contact" id="Contact" '
                    .((isset($row['Contact']) and $row['Contact']=='Y')?' Checked="Checked"':'').'/>';
            $result .= '<label for="Contact">A Christian Contact</label>';
            $result .= '&nbsp;<input type="checkbox" name="Fellowship" id="Fellowship" '
                    .((isset($row['Fellowship']) and $row['Fellowship']=='Y')?' Checked="Checked"':'').'/>';
            $result .= '<label for="Fellowship">A Fellowship Group</label>';
            $result .= '&nbsp;<input type="checkbox" name="Church" id="Church" '
                    .((isset($row['Church']) and $row['Church']=='Y')?' Checked="Checked"':'').'/>';
            $result .= '<label for="Church">A Good Local Church</label>';
            $result .= '&nbsp;<input type="checkbox" name="Nearby" id="Nearby" '
                    .((isset($row['Nearby']) and $row['Nearby']=='Y')?' Checked="Checked"':'').'/>';
            $result .= '<label for="Nearby">A Christian Nearby</label>';
            $result .= '&nbsp;<input id="SubmitDetails" name="SubmitDetails" type="button" '
                    .'value="Submit Details" onClick="SubmitUpdate(this);"/> ';
            $result .= '<label for="Submit"></label>';
        }
        echo $result;
        //$results['Returnee'].$results['Contact'].$results['Fellowship'].$results['Church'];
    }
    
    public function SetMyPlaceDetails($data){
    try{
        $sql = "SELECT DISTINCT PlaceID, GatekeeperID, "
            ."Country, Province, City, Postcode, District, "
            ."Returnee, Contact, Fellowship, Church, Nearby, Reminder "
            ."FROM gatekeeperplaces WHERE GatekeeperID = ? ";
        if(isset($data['Country']) and !$data['Country'] == ''){
            $sql.="AND Country = '".$data['Country']."' ";
        }
        if(isset($data['Province']) and !$data['Province'] == ''){
            $sql.="AND Province = '".$data['Province']."' ";
        } 
        if(isset($data['City']) and !$data['City'] == ''){
            $sql.="AND City = '".$data['City']."' ";
        }
        if(isset($data['Postcode']) and !$data['Postcode'] == ''){
            $sql.="AND Postcode = '".$data['Postcode']."' ";
        }
        if(isset($data['District']) and !$data['District'] == ''){
            $sql.="AND District = '".$data['District']."' ";
        }   
        if(isset($data['PlaceID']) and !$data['PlaceID'] == ''){
            $sql.="AND PlaceID = '".$data['PlaceID']."' ";
        }
        //echo $sql; 
        //quit;
        $query = $this->db->query($sql,array($data['MemberID']));
        $results = $query->result_array();
        if(count($results)>1) {
            $data["Message"] = "Please refine your place selection"; 
        }elseif(count($results)==1){
            $data["PlaceID"] = (isset($data["PlaceID"])?$data["PlaceID"]:$results["PlaceID"]);
            if($data['Returnee']=='N' and $data['Contact'] =='N'
                and $data['Fellowship']=='N' and $data['Church']=='N'
                and $data['Nearby']=='N'){
                $sql = "DELETE FROM gatekeeperplaces "
                    ."WHERE GatekeeperID = ?  AND PlaceID = ? ";
                $query = $this->db->query($sql, array($data['MemberID'], $data['PlaceID'])); 
                $data["Message"] = "My Place DELETED! - no contact informaion!";
            } else {
                $sql = "UPDATE gatekeeperplaces SET "
                    ."Returnee = ?, Contact = ?, Fellowship = ?, Church = ?, "
                    ."Nearby = ?,  Reminder = ? "
                    ."WHERE GatekeeperID = ?  AND PlaceID = ? ";
                $query = $this->db->query($sql, array(
                    $data['Returnee'], $data['Contact'],
                    $data['Fellowship'], $data['Church'],
                    $data['Nearby'], $data['Reminder'],
                    $data['MemberID'], $data['PlaceID'])); 
                $data["Message"] = "Place Updated";
            }
        } else {
            $sql = "INSERT INTO gatekeeperplaces (GatekeeperID, "
               ."Country, Province, City, Postcode, District, "
               ."Returnee, Contact, Fellowship, Church, Nearby) "
               ."VALUES (?,?,?,?,?,?,?,?,?,?,?) "; 
            $query = $this->db->query($sql, array($data['MemberID'],
                $data['Country'],$data['Province'],$data['City'],$data['Postcode'],$data['District'],
                $data['Returnee'],$data['Contact'],$data['Fellowship'],$data['Church'],$data['Nearby']));
            $data["Message"] = "Place Added";
        }
        echo $data['Message'];
    } catch(Exception $e) {
        echo 'Message: ' .$e->getMessage();
    }
        
    }
    
    public function ProcessClickLink($data){
        // Process a clinklick code executed from an email message
        //$data = array('Clickcode'=>$code, 'Message'=>'');
        //$data = $this->Test($data); 
        //$data['Message'] = $data['ClickLinkCheck'];
        //$data['CLCode'] = 
        $sql = "SELECT * FROM clicklinks WHERE CLCode = ? ";
        $query = $this->db->query($sql, array($data['CLCode']));
        $row = $query->row_array();
        $result = '<b style="color:red;">Failed!</b>';
        if($row){
            $sql = str_replace('$','\'',$row['CLSQL']);
            $this->db->query($sql);
            $data['Message'] = $row['ModelFn']." ".$row['Model']." "
               .$row['ModelID']." ".$row['CLValue']." - Successful.";
            $sql = "UPDATE clicklinks SET Executed = NOW() WHERE CLCode = ? ";
            $this->db->query($sql, array($data['CLCode']));
            $result = "<b>Today!</b>";
        }
         echo $result;  
    }
    
    public function NewReferralCheck($data){
        $data = $this->Referral_model->ReferralCheck($data);
        echo $data['Result'];  
    }

    
    
    
/*    
    
    
    public function SelectDistricts($data){  
        if(!isset($data['Country'])){ $data['Country'] = 'China'; }
        if(!isset($data['Province'])){ $data['Province'] = ''; }
        if(!isset($data['City'])){ $data['City'] = ''; }
        if(!isset($data['District'])){ $data['District'] = ''; }
        if(!isset($data['Postcode'])){ $data['Postcode'] = ''; }
        // Search provided data for district matches
        if(!$data['Province']==''){
            $sql = "SELECT Country FROM districts "
                ."WHERE Province = ? ";
            $query =   $this->db->query($sql, array($data['Province']));
            $row = $query->row_array();
            if($row){
                $data['Country'] = $row['Country'];
            }
        }
        if(!$data['City']==''){
            $sql = "SELECT Province, Country FROM districts "
                ."WHERE City = ? ";
            $query =   $this->db->query($sql, array($data['City']));
            $row = $query->row_array();
            if($row){
                $data['Province'] = $row['Province'];
                $data['Country'] = $row['Country'];
            }
        }
        if(!$data['District']==''){
            $sql = "SELECT City, Province, Country, Postcode FROM districts "
                ."WHERE District = ? ";
            $query = $this->db->query($sql, array($data['District']));
            $row = $query->row_array();
            if($row){
                $data['Country'] = $row['Country'];
                $data['Province'] = $row['Province'];
                $data['City'] = $row['City'];
                $data['Postcode'] = $row['Postcode'];
            }
        }
        if(!$data['Postcode']=='' AND !$data['Country']=='' AND $data['District']==''){
            $sql = "SELECT Country, Province, City, District FROM districts "
                ."WHERE Country = ? AND Postcode LIKE '".trim($data['Postcode'])."%' ";
            $query =   $this->db->query($sql, array($data['Country']));
            $row = $query->row_array();
            if($row){
                $data['Country'] = $row['Country'];
                $data['Province'] = $row['Province'];
                $data['City'] = $row['City'];
                $data['District'] = $row['District'];
                
            }
        }
        // Countries
        $sql = "SELECT DISTINCT Country as Name FROM districts "
            ."WHERE Country IS NOT NULL ";
        if(isset($data['Province']) AND !$data['Province'] ==''){
            $sql.="AND Province = '".$data['Province']."' ";}
        if(isset($data['City']) AND !$data['City'] ==''){
            $sql.="AND City = '".$data['City']."' ";      }
        if(isset($data['District']) AND !$data['District'] ==''){
            $sql.="AND District = '".$data['District']."' ";}
        if(isset($data['Postcode']) AND !$data['Postcode'] ==''){
          $sql.="AND Postcode LIKE '".trim($data['Postcode'])."%' ";}
        $sql.="ORDER BY Country ";
        $query = $this->db->query($sql);
        $Countries = $query->result_array();
        $data['Countries'] = $Countries;
        // Provinces
        $sql = "SELECT DISTINCT Province as Name FROM districts "
            ."WHERE Province IS NOT NULL ";
        if(isset($data['Country']) AND !$data['Country'] ==''){
            $sql.="AND Country = '".$data['Country']."' ";      }
        if(isset($data['City']) AND !$data['City'] ==''){
            $sql.="AND City = '".$data['City']."' ";      }
        if(isset($data['District']) AND !$data['District'] ==''){
            $sql.="AND District = '".$data['District']."' ";}
        if(isset($data['Postcode']) AND !$data['Postcode'] ==''){
          $sql.="AND Postcode LIKE '".trim($data['Postcode'])."%' ";}
        $sql.="ORDER BY Province ";
            $query = $this->db->query($sql);
        $Provinces = $query->result_array();
        $data['Provinces'] = $Provinces;
        // Cities
        $sql = "SELECT DISTINCT City as Name FROM districts "
            ."WHERE City IS NOT NULL ";
        $query = $this->db->query($sql);
        $Cities = $query->result_array();
        if(isset($data['Country']) AND !$data['Country'] ==''){
          $sql.="AND Country = '".$data['Country']."' ";      }
      if(isset($data['Province']) AND !$data['Province'] ==''){
          $sql.="AND Province = '".$data['Province']."' ";}
      if(isset($data['District']) AND !$data['District'] ==''){
          $sql.="AND District = '".$data['District']."' ";}
      if(isset($data['Postcode']) AND !$data['Postcode'] ==''){
          $sql.="AND Postcode LIKE '".trim($data['Postcode'])."%' ";}
      $sql.="ORDER BY City ";
      $query = $this->db->query($sql);
      $Cities = $query->result_array();
      $data['Cities'] = $Cities;
      // Postcodes
      $sql = "SELECT DISTINCT Postcode as Name FROM districts "
         ."WHERE Postcode IS NOT NULL ";
      if(isset($data['Country']) AND !$data['Country'] ==''){
          $sql.="AND Country = '".$data['Country']."' ";      }
      if(isset($data['Province']) AND !$data['Province'] ==''){
          $sql.="AND Province = '".$data['Province']."' ";}
      if(isset($data['City']) AND !$data['City'] ==''){
          $sql.="AND City = '".$data['City']."' ";}
      if(isset($data['District']) AND !$data['District'] ==''){
          $sql.="AND District = '".$data['District']."' ";}
      $sql.="ORDER BY Postcode ";   
      $query = $this->db->query($sql);
      $Postcodes = $query->result_array();
      $data['Postcodes'] = $Postcodes;
      // Districts
      $sql = "SELECT DISTINCT District as Name FROM districts "
         ."WHERE District IS NOT NULL ";
      if(isset($data['Country']) AND !$data['Country'] ==''){
          $sql.="AND Country = '".$data['Country']."' ";      }
      if(isset($data['Province']) AND !$data['Province'] ==''){
          $sql.="AND Province = '".$data['Province']."' ";}
      if(isset($data['City']) AND !$data['City'] ==''){
          $sql.="AND City = '".$data['City']."' ";}
      if(isset($data['Postcode']) AND !$data['Postcode'] ==''){
          $sql.="AND Postcode LIKE '".trim($data['Postcode'])."%' ";}
      $sql.="ORDER BY District ";   
      $query = $this->db->query($sql);
      $Districts = $query->result_array();
      $data['Districts'] = $Districts;
      return($data);
 
    }
    
    public function AllChurches($data){ 
        $data = $this->Location_model->SelectLocations($data);
        $data['PageMode'] = (isset($data['PageMode'])?$data['PageMode']:"List"); 
        $data['ListOrder'] = (isset($data['ListOrder'])?$data['ListOrder']:"Country, Province, City, District"); 
        $data['NewStatus'] = (isset($data['NewStatus'])?$data['NewStatus']:""); 
        $data['MemberID'] = (isset($data['MemberID'])?$data['MemberID']:""); 
        //echo var_dump($data);
	if($data['PageMode'] == "Update"){ 
            if(!$data['MemberID']=='' and !$data['NewStatus']==''){ 
                if($data['NewStatus']=="Delete"){ 
                    $sql = "DELETE FROM amitychurches WHERE ChurchNum = ? "; 
                    $query = $this->db->query($sql, array($data['GroupID']));
		}else{ 
                    $sql = "UPDATE amitychurches SET Status = ? "
                        ."WHERE ChurchNum = ? ";
                    $query = $this->db->query($sql, array($data['NewStatus'],
                    $data['GroupID'])); 
		} 
            }
        }
        $sql = "SELECT DISTINCT ChurchName, ChurchNum, Country, Province, City, "
            ."District "
            ."FROM amitychurches WHERE TRUE ";
        if(isset($data['Country']) and !$data['Country'] == ''){
            $sql.="AND Country = '".$data['Country']."' ";
        }
        if(isset($data['Province']) and !$data['Province'] == ''){
            $sql.="AND Province = '".$data['Province']."' ";
        } 
        if(isset($data['City']) and !$data['City'] == ''){
            $sql.="AND City = '".$data['City']."'";
        }
        if(isset($data['District']) and !$data['District'] == ''){
            $sql.="AND District = '".$data['District']."' ";
        }
        $sql.="ORDER BY ".$data['ListOrder']; 
	$query = $this->db->query($sql); 
        //echo $sql;
        //echo $data['ListOrder'];
	$results = array(); 
	foreach ($query->result_array() as $row){ 
            $results[] = $row; 
	} 
        $data['NextPage'] = 'sysadmin/allchurches';
        $data['results'] = $results; 
        $data['PageMode'] ='List';
        return($data); 	
    }
    
  */  
/*       
        if(count($results)==1){
            $data['PlaceID'] = $results[0]['PlaceID'];
            $data['Country'] = $results[0]['Country'];
            $data['Province'] = $results[0]['Province'];
            $data['City'] = $results[0]['City'];
            $data['Postcode'] = $results[0]['Postcode'];
            $data['District'] = $results[0]['District'];
            $data['Returnee'] = $results[0]['Returnee'];
            $data['Contact'] = $results[0]['Contact'];
            $data['Fellowship'] = $results[0]['Fellowship'];
            $data['Church'] = $results[0]['Church'];
            $data['Nearby'] = $results[0]['Nearby'];
            $data['Reminder'] = $results[0]['Reminder'];
            $data['Message'] = 'Single place identified ['.$data['PlaceID'].']';
        }    
        $data['NextPage'] = 'gatekeeper/myplaces';
        $data['results'] = $results; 
        $data['PageMode'] ='List';
        return($data); 	
    }

  */
   
    
    
 }
