<?php
class World_model extends CI_Model {
    
    public function __construct(){
    	$this->load->database('world');
    }

    public function get_continents($data){
	$sql = "SELECT DISTINCT Continent FROM Country "
            ."WHERE 1 ORDER BY CONCAT(Continent)";
        $query = $this->db->query($sql);
        $continents = array();
        $continents['ALL'] = '';
        if ($query->num_rows() > 0){
            foreach ($query->result_array() as $row){
                $continents[$row['Continent']] = $row['Continent'];
            }
            return $continents;
        }
    }
    
    public function get_regions($data){
	$sql = "SELECT DISTINCT Region FROM Country WHERE 1 ";
        if(isset($data['ui_continent']) && $data['ui_continent'] <> 'ALL')
            $sql .= "AND Continent = '".$data['ui_continent']."' "; 
        $sql .= " ORDER BY CONCAT(Region)";
        $query = $this->db->query($sql);
        $regions = array();
        $regions['ALL'] = '';
        if ($query->num_rows() > 0){
            foreach ($query->result_array() as $row){
                $regions[$row['Region']] = $row['Region'];
            }
            return $regions;
        }
    }
    
    public function get_countries($data){
        $sql = "SELECT DISTINCT Name As Country FROM Country WHERE 1 ";
        if(isset($data['ui_region']) && $data['ui_region'] <> 'ALL')
            $sql .= "AND Region = '".$data['ui_region']."' "; 
        elseif (isset($data['ui_continent']) && $data['ui_continent'] <> 'ALL')
            $sql .= "AND  Continent = '".$data['ui_continent']."' "; 
        $sql .= " ORDER BY CONCAT(Name)";
        $query = $this->db->query($sql);
        $countries = array();
        $countries['ALL'] = '';
        if ($query->num_rows() > 0){
            foreach ($query->result_array() as $row){
                $countries[$row['Country']] = $row['Country'];
            }
        }
        return $countries;
    }   
    public function get_details($data){
        $sql = "SELECT CO.Continent, CO.Region, CO.Population/1000000 AS Population, "
            ."CO.LifeExpectancy, CI.Name AS Capital, CO.GNP "
            ."FROM country CO, city CI "
            ."WHERE CO.Capital = CI.ID AND CO.Name ='".$data['ui_country']."'";
        $query = $this->db->query($sql);
        $details = array();
        if ($query->num_rows() > 0){
            $details = $query->row_array();
        }
        return $details;
    }   
    public function get_cities($data){
        $sql = "SELECT City.Name AS City, City.District, City.Population "
            . "FROM City, Country "
            . "WHERE City.CountryCode = Country.Code "
            . "AND Country.Name ='".$data['ui_country']."'"
            . "ORDER BY City.Population DESC "
            . "LIMIT 10 ";
        $query = $this->db->query($sql);
        $cities = array();
        if ($query->num_rows() > 0){
            foreach ($query->result_array() as $row){
                $cities[$row['City']] = $row;
            }
        }
        return $cities;
    }   
    public function get_languages($data){
        $sql = "SELECT L.Language, L.Percentage, "
            ."if(L.IsOfficial = 'T','Yes','No') AS Official "
            ."FROM countrylanguage L, country C "
            ."WHERE L.CountryCode = C.Code "
            ."AND C.Name ='".$data['ui_country']."' "
            ."ORDER BY L.IsOfficial, L.Percentage DESC "
            ."LIMIT 10 ";
        $query = $this->db->query($sql);
        $languages = array();
        if ($query->num_rows() > 0){
            foreach ($query->result_array() as $row){
                $languages[$row['Language']] = $row;
            }
        }
        return $languages;
    }   
}    
    
