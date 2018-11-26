<?php
class BA_model extends CI_Model {

    public function __construct()	{
        $this->load->database();
        $this->load->library('email');
        $data = array();     
    }
    public function chkVar($var){
        if(!isset($var)){
            $var = '';
        }
        return($var);
    }
  
  public function GetCourses($data){
      $data['Course_Year'] = (isset($_POST['Course_Year'])?$_POST['Course_Year']:'1');
      $sql = "SELECT * FROM ba_courses S ORDER BY Course_ID ";
      $query = $this->db->query($sql);
      $courses = $query->result_array();
      $data['courses'] = $courses;
      $data['Course_ID'] = (isset($_POST['Course_ID'])?$_POST['Course_ID']:$courses[0]['Course_ID']);
      return($data);
   } 
   public function GetCourse($data){
      $data['Course_ID'] = (isset($_POST['Course_ID'])?$_POST['Course_ID']:'X');
      $sql = "SELECT * FROM ba_courses WHERE Course_ID = ? ";
      $query = $this->db->query($sql,$data['Course_ID']);
      $data['course'] = $query->row_array();
      return($data);
   }
   
   public function SaveCourse($data){
      $data['Course_ID'] = (isset($_POST['Course_ID'])?$_POST['Course_ID']:0);
      $data['Course_Code'] = (isset($_POST['Course_Code'])?$_POST['Course_Code']:'');
      $data['Course_Name'] = (isset($_POST['Course_Name'])?$_POST['Course_Name']:'');
      $data['Course_Type'] = (isset($_POST['Course_Type'])?$_POST['Course_Type']:'');
      $data['Degree'] = (isset($_POST['Degree'])?$_POST['Degree']:'');
      $sql = "SELECT * FROM ba_courses "
         ."WHERE Course_ID = ? ";
      $query = $this->db->query($sql,$data['Course_ID']);
      if (Count($query->result_array())==0){
         $sql = "INSERT INTO ba_courses "
            ."(Course_ID, Course_Code, Course_Name, Course_Type, Degree) "
            ." VALUES (?, ?, ?, ?, ?) ";
         $this->db->query($sql,array($data['Course_ID'], $data['Course_Code'], $data['Course_Name'], $data['Course_Type'], $data['Degree']));
      }else{
         $sql = "UPDATE ba_courses SET "
            ."Course_Code = ?, Course_Name = ?, Course_Type = ?, Degree = ? "
            ."WHERE Course_ID = ? ";
         $this->db->query($sql,array($data['Course_Code'], $data['Course_Name'], $data['Course_Type'], $data['Degree'], $data['Course_ID']));
      }
      return($data);
   }
   
   
   public function GetModules($data){
      //$data['Course_ID'] = (isset($_POST['Course_ID'])?$_POST['Course_ID']:'%');
      $data['Course_Year'] = (isset($_POST['Course_Year'])?$_POST['Course_Year']:'1');
      $sql = "SELECT DISTINCT M.* FROM ba_modules M, ba_course_modules CM "
           ."WHERE M.Module_ID = CM.Module_ID "
           ."AND CM.Academic_Year = ? ";
      if(isset($data['Course_ID']) and $data['Course_ID'] != ''){
           $sql .= "AND CM.Course_ID = '".$data['Course_ID']."' ";
      }
      if(isset($data['Course_Year']) and $data['Course_Year'] != ''){
           $sql .= "AND CM.Course_Year = '".$data['Course_Year']."' ";
      }
      $sql .= "ORDER BY M.Module_ID ";
      $query = $this->db->query($sql,array($data['Academic_Year']));
      $modules = $query->result_array();
      $data['modules'] = $modules;
      $data['Module_ID'] = (isset($_POST['Module_ID'])?$_POST['Module_ID']:$modules[0]['Module_ID']);
      return($data);
   }  
   public function GetClassTypes($data){
      $sql = "SELECT * FROM ba_class_types S ORDER BY List_Order ";
      $query = $this->db->query($sql);
      $types = $query->result_array();
      $data['classtypes'] = $types;
      $data['Class_Type'] = (isset($_POST['Class_Type'])?$_POST['Class_Type']:$types[0]['Class_Type']);
      return($data);
   }  
   public function GetClasses($data){
       $sql = "SELECT C.Class_ID, C.Module_ID, M.Module_Name, "
           ."C.Class_Day, C.Class_Start, C.Class_Type "
           ."FROM ba_classes C, ba_course_modules CM, ba_modules M, class_days CD "
           ."WHERE C.Module_ID = CM.Module_ID AND C.Module_ID = M.Module_ID "
           ."AND C.Class_Day = CD.Class_Day3 "
           ."AND C.Academic_Year = ? AND C.Academic_Term = ? ";
      if(isset($data['Course_ID']) and $data['Course_ID'] != ''){
           $sql .= "AND CM.Course_ID = '".$data['Course_ID']."' ";
      }
//      if(isset($data['Module_ID']) and $data['Module_ID'] != ''){
//           $sql .= "AND CM.Module_ID = '".$data['Module_ID']."' ";
//      }
      if(isset($data['Course_Year']) and $data['Course_Year'] != ''){
           $sql .= "AND CM.Course_Year = '".$data['Course_Year']."' ";
      }
      $sql .= "ORDER BY CD.List_Order, C.Class_Start ";
      $query = $this->db->query($sql,array($data['Academic_Year'],$data['Academic_Term']));
      $classes = $query->result_array();
      $data['classes'] = $classes;
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:0); // $classes[0]['Class_ID']);
      return($data);
   } 
   /*
      // Get Next Class Number for selected Academic Term
      $sql = "SELECT MAX(C.Class_No)+1 AS Next_Class_No "
         ."FROM ins_classes C "
         ."WHERE C.Academic_Year = ? AND C.Academic_Term = ?";
      $query = $this->db->query($sql,array($data['Academic_Year'],$data['Academic_Term']));
      $row = $query->row_array();
      $data['Next_Class_No'] = $row['Next_Class_No'];
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:0);
  //    echo var_dump($data['Class_ID']);
      $data['List_Order'] = (isset($_POST['List_Order'])?$_POST['List_Order']:'C.Class_No '); // , D.List_Order, CT.Class_Start');
      
      // Old Code prior to introduction of table INS_CLASS_TIMES
      $sql = "SELECT C.Class_ID, C.Class_No, C.Class_Subject, C.Class_Instance, C.Class_Room, C.Class_Tutor_Inits, "
           ."C.Class_Day, C.Class_Start, C.Class_Finish, C.Academic_Year, C.Academic_Term, "
           ."IF(S.Class_Size IS NULL, 0, S.Class_Size) AS Class_Size "
           ."FROM ins_classes C "
           ."LEFT JOIN ( "
           ."  SELECT Class_ID, Academic_Year, Academic_Term, Count(0) AS Class_Size "
           ."  FROM ins_student_classes "
           ."  WHERE Status IN ('Selected', 'Notified', 'Confirmed') "
           ."  GROUP BY Class_ID, Academic_Year, Academic_Term "
           .") S ON S.Class_ID = C.Class_ID "
           ."WHERE C.Academic_Year = ? AND C.Academic_Term = ? "
           ."ORDER BY ".$data['List_Order']." ";   
      
      // New Code incorporating code for new INS_CLASS_TIMES table
      $sql = "SELECT C.Class_ID, C.Class_No, C.Class_Subject, C.Class_Instance, CT.Class_Room, CT.Class_Tutor_Inits, "
           ."CT.Class_Day, CT.Class_Start, CT.Class_Finish, C.Academic_Year, C.Academic_Term, "
           ."IF(S.Class_Size IS NULL, 0, S.Class_Size) AS Class_Size "
           ."FROM ((ins_classes C "
           ."LEFT JOIN ins_class_times CT ON CT.Class_ID = C.Class_ID) "
           ."LEFT JOIN class_days D ON D.Class_Day = CT.Class_Day) "
           ."LEFT JOIN ( "
           ."  SELECT Class_ID, Academic_Year, Academic_Term, Count(0) AS Class_Size "
           ."  FROM ins_student_classes "
           ."  WHERE Status IN ('Selected', 'Notified', 'Confirmed') "
           ."  GROUP BY Class_ID, Academic_Year, Academic_Term "
           .") S ON S.Class_ID = C.Class_ID "
           ."WHERE C.Academic_Year = ? AND C.Academic_Term = ? "
           ."ORDER BY ".$data['List_Order']." ";   

      //echo var_dump($sql,$data['Academic_Year'],$data['Academic_Term'] )      ;
      $query = $this->db->query($sql,array($data['Academic_Year'],$data['Academic_Term']));
      $data['classes'] = $query->result_array();
      return($data);
   }
  */ 
   
   public function GetRegister($data){
      // Ensure that the register table is populated
      $data['Register_Order'] = (isset($_POST['Register_Order'])?$_POST['Register_Order']:'Family_Name, First_Names');
      $sql = "INSERT INTO ba_registers (Academic_Year, Academic_Term, Class_ID, Student_ID) "
         ."SELECT SM.Academic_Year, SM.Academic_Term, C.Class_ID, SM.Student_ID "
         ."FROM ba_student_modules SM, ba_classes C, current_values CV "
         ."WHERE SM.Academic_Year = CV.Academic_Year "
         ."AND C.Academic_Year = CV.Academic_Year "
         ."AND C.Academic_Term = CV.Academic_Term "
         ."AND SM.Module_ID = C.Module_ID "
         ."AND NOT EXISTS ( "
         ."   SELECT 1 FROM ba_registers R "
         ."   WHERE R.Academic_Year = CV.Academic_Year "
         ."   AND R.Academic_Term = CV.Academic_Term "
         ."   AND R.Class_ID = C.Class_ID "
         ."   AND R.Student_ID = SM.Student_ID "
         .") ";
      $this->db->query($sql); 
      //echo var_dump($sql);
      // Get any Class Notes from Class record 
      $sql = "SELECT Class_Notes from ba_classes WHERE Class_ID = ? ";
      $query = $this->db->query($sql,array($data['Class_ID']));
      $row = $query->row_array();
      if($row){
         $data['Class_Notes'] = $row['Class_Notes'];
      }
      // Select correct 
      $sql = "SELECT S.Family_Name, S.First_Names, "
         ."R.Class_ID, R.Student_ID,  "
         ."R.Wk1, R.Wk2, R.Wk3, R.Wk4, R.Wk5, R.Wk6, R.Wk7, R.Wk8, R.Wk9, R.Wk10, R.Comments "
         ."FROM ba_students S, ba_registers R "
         ."WHERE R.Academic_Year = ? AND R.Academic_Term = ? "
         ."AND R.Student_ID = S.Student_ID "
         ."AND R.Class_ID = ? "
         ."ORDER BY ".$data['Register_Order']." ";
      $query = $this->db->query($sql,array($data['Academic_Year'],$data['Academic_Term'],$data['Class_ID']));
      $data['register'] = $query->result_array();
      //echo var_dump($sql,$data['Academic_Year'],$data['Academic_Term'],$data['Class_ID'], $data['register'] )      ;

      return($data);
   }
   
   public function SaveRegister($data){
    //  echo var_dump($_POST);
      // Get Current Values
      $sql = "SELECT R.Class_ID, R.Student_ID "
         ."FROM ba_registers R, ba_student_modules SM "
         ."WHERE R.Student_ID = SM.Student_ID "
         ."AND R.Class_ID = ? ";
      $query = $this->db->query($sql, array($data['Class_ID']));
      $register = $query->result_array();
      $weeks = array(11);
      foreach($register as $student) {
         $sql = "UPDATE ba_registers SET ";
         for($wk=1;$wk<11;$wk++){
            $field = 'Wk'.$wk.'Id'.$student['Student_ID'];
            $weeks[$wk] = (isset($_POST[$field])?$_POST[$field]:'0');
            $sql.="Wk".$wk."=".$weeks[$wk].", ";
     
         }
         $field = 'Note'.$student['Student_ID'];
         $Note = (isset($_POST[$field])?$_POST[$field]:'');
         $sql.="Comments='".str_replace("'","''",$Note)."', "
            ."Updated_By = '".$data['UserName']."' "
            ."WHERE Class_ID = ".$data['Class_ID']." AND Student_ID = ".$student['Student_ID'];
         $this->db->query($sql);
   //      echo var_dump($sql);
      }
      // Get Updated Values
      $data['Register_Order'] = (isset($_POST['Register_Order'])?$_POST['Register_Order']:'Family_Name, First_Names');
      $sql = "SELECT S.Family_Name, S.First_Names, S.Student_ID, "
         ."R.Class_ID, R.Student_ID,  "
         ."R.Wk1, R.Wk2, R.Wk3, R.Wk4, R.Wk5, R.Wk6, R.Wk7, R.Wk8, R.Wk9, R.Wk10, R.Comments "
         ."FROM ba_students S, ba_student_modules SM, ins_registers R "
         ."WHERE SM.Academic_Year = ? AND SM.Academic_Term = ? "
         ."AND R.Student_ID = SM.Student_ID "
         ."AND S.Student_ID = R.Student_ID "
         ."AND R.Class_ID = ? "
         ."ORDER BY ".$data['Register_Order']." ";
      $query = $this->db->query($sql,array($data['Academic_Year'],$data['Academic_Term'],$data['Class_ID']));
      $data['register'] = $query->result_array();
      return($data);
   }
   public function GetStudents($data){
      $data['List_Order'] = (isset($_POST['List_Order'])?$_POST['List_Order']:'Family_Name, First_Names');
      $data['Course_Year'] = (isset($_POST['Course_Year'])?$_POST['Course_Year']:'1');
      $sql = "SELECT DISTINCT S.* "
           ."FROM ba_students S, ba_course_students CS, ba_student_modules SM "
           ."WHERE S.Student_ID = CS.Student_ID AND S.Student_ID = SM.Student_ID "
           ."AND CS.Course_ID = ? "
           ."AND CS.Course_Year = ? "
           ."AND CS.Academic_Year = ? "; 
      if(isset($data['Module_ID']) and $data['Module_ID'] != ''){
           $sql .= "AND SM.Module_ID = '".$data['Module_ID']."' ";
      }
      $sql .= "ORDER BY ".$data['List_Order'];
      $query = $this->db->query($sql,array($data['Course_ID'], $data['Course_Year'], $data['Academic_Year']));
      $students = $query->result_array();
      $data['students'] = $students;
      //echo var_dump($data['List_Order']);
      return($data);
   }
   
   public function EditStudent($data){
   //   $data['Submission_ID'] = (isset($_POST['Submission_ID'])?$_POST['Submission_ID']:'0');
      $data['Student_ID'] = (isset($_POST['Student_ID'])?$_POST['Student_ID']:'0');
      $sql = "SELECT * FROM ins_students S "
           ."WHERE Student_ID = ? "
           ."ORDER BY S.Submission_ID DESC ";
      $query = $this->db->query($sql,array($data['Student_ID']));
      $stu = $query->row_array();
      $data['stu'] = $stu;
      return($data);
   }
   
   public function SaveStudent($data){
      // Add all form values into $data array
      $data['Student_ID'] = (isset($_POST['Student_ID'])?$_POST['Student_ID']:'0');
      $fields = array('Submission_ID', 'Submission_Time', 'University_ID', 'Status',
          'First_Name', 'Last_Name', 'Department', 'Email', 'Skills', 'English_Level',
          'Attendance', 'Referrer', 'Writing', 'Speaking', 'Pronunc', 'Culture', 
          'Staff_Name', 'Staff_Dept', 'Staff_Email', 'Student_Name', 'Student_Dept', 'Student_Email',
          'Erasmus', 'Partners', 'Removed','Notes');
      $params = array();
      $sql = "UPDATE ins_students SET ";
      foreach($fields as $field){
         $data[$field] = (isset($_POST[$field])?$_POST[$field]:'');
         $params[$field] = $data[$field];
         $sql.="".$field."=?, ";
      }
      $sql.="Updated = NOW() WHERE Student_ID = ".$data['Student_ID']." ";
      try{
         $this->db->query($sql,$params);
         $sql = "UPDATE ins_students S, current_values CV SET "
            ."   S.Academic_Year = CV.Academic_Year, "
            ."   S.Academic_Term = CV.Academic_Term "
            ."WHERE S.Academic_Year = '' "
            ."AND S.Academic_Term ='' ";
         $this->db->query($sql);
      }catch (Exception $e) {
         echo $e->message();
      }
  
      return($data);
   }
   public function EditClass($data){
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:'0');
      $data['Class_No'] = (isset($_POST['Class_No'])?$_POST['Class_No']:'0');
      $sql = "SELECT * FROM ins_classes WHERE Class_ID = ? ";
      $query = $this->db->query($sql,array($data['Class_ID']));
      if(count($query->result_array()) == 0){
//         $sql = "INSERT INTO ins_classes (Class_ID) VALUES (".$data['Class_ID'].")";
         $sql = "INSERT INTO ins_classes SET Class_ID = DEFAULT ";
         $this->db->query($sql);
         $sql = "SELECT * FROM ins_classes WHERE Class_ID = "
            ."(SELECT MAX(Class_ID) FROM ins_classes ) ";
//         $query = $this->db->query($sql,array($data['Class_ID']));
          $query = $this->db->query($sql);
      }
      $data['class'] = $query->row_array();
      return($data);
   }
   public function DeleteClass($data){
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:'0');
      $sql = "DELETE FROM ins_classes WHERE Class_ID = ".$data['Class_ID'];
      $this->db->query($sql);
      $data['Class_ID'] = 0;
      return($data);
   }
   
   public function SaveClass($data){
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:0);
      $data['Class_Notes'] = (isset($data['Class_Notes'])?trim($data['Class_Notes']):'');
      // Add all form values into $data array
      $fields = array('Class_No', 'Academic_Year', 'Academic_Term', 'Class_Subject',
          'Class_Type', 'Class_Instance', 'Class_Room', 'Class_Tutor_Inits', 'Class_List_Order', 
          'Class_Notes', 'Class_Day', 'Class_Start', 'Class_Finish');
      $params = array();
      $sql = "UPDATE ins_classes SET ";
      foreach($fields as $field){
         $data[$field] = (isset($_POST[$field])?$_POST[$field]:'');
         $params[$field] = $data[$field];
         $sql.="".$field."=?, ";
      }
      $sql.="Updated = NOW() WHERE Class_ID = ".$data['Class_ID']." ";
      try{
         $this->db->query($sql,$params);
      }catch (Exception $e) {
         echo $e->message();
      }
  
      return($data);
   }
   public function GetClassTimes($data){
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:'0');
      $sql = "SELECT * FROM ins_class_times T, class_days D "
           ."WHERE T.Class_Day = D.Class_Day AND Class_ID = ? "
           ."ORDER BY D.List_Order, T.Class_Start ";
      $query = $this->db->query($sql,array($data['Class_ID']));
      $data['classtimes'] = $query->result_array();
      return($data);
   }
   
   public function AddClassTime($data){
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:0);
      // Add all form values into $data array
      $fields = array('Class_No', 'Academic_Year', 'Academic_Term', 'Class_Subject',
          'Class_Type', 'Class_Instance', 'Class_Room', 'Class_Tutor_Inits', 'Class_List_Order', 
          'Class_Day', 'Class_Start', 'Class_Finish');
      $params = array();
      $sql = "UPDATE ins_classes SET ";
      foreach($fields as $field){
         $data[$field] = (isset($_POST[$field])?$_POST[$field]:'');
         $params[$field] = $data[$field];
         $sql.="".$field."=?, ";
      }
      $sql.="Updated = NOW() WHERE Class_ID = ".$data['Class_ID']." ";
      try{
         $this->db->query($sql,$params);
      }catch (Exception $e) {
         echo $e->message();
      }
      // Add all form values into $data array
      $fields = array('Class_ID', 'Class_Day', 'Class_Start', 'Class_Finish', 'Class_Room', 'Class_Tutor_Inits');
      $params = array();
      $sql = "INSERT INTO ins_class_times (";
      $vals = "";
      foreach($fields as $field){
         $data[$field] = (isset($_POST[$field])?$_POST[$field]:'');
         $params[$field] = $data[$field];
         $sql.="".$field.", ";
         $vals.="?, ";
      }
      $sql.="Class_Time_ID) VALUES (".$vals."NULL) ";
   
      try{
         $this->db->query($sql,$params);
      }catch (Exception $e) {
         echo $e->message();
      }
      return($data);
   }
   
   public function DelClassTime($data){
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:0);
      $data['Class_Time_ID'] = (isset($_POST['Class_Time_ID'])?$_POST['Class_Time_ID']:0);
      $sql = "DELETE FROM ins_class_times WHERE Class_Time_ID = ".$data['Class_Time_ID']." ";
      $this->db->query($sql);
      //echo var_dump($sql);
      return($data);
   }
      
   public function GetYearTerm($data){
      // Load drop down arrays for Year and Terms
      $data = $this->GetYears($data);
      $data = $this->GetTerms($data);
      // Get Current Selected Academic term
      $sql = "SELECT CV.Academic_Year, CV.Academic_Term "
         ."FROM current_values CV ";
      $query = $this->db->query($sql);
      $row = $query->row_array();
      $data['Academic_Year'] = $row['Academic_Year'];
      $data['Academic_Term'] = $row['Academic_Term'];
      $data['Academic_Year'] = (isset($_POST['Academic_Year'])?$_POST['Academic_Year']:$data['Academic_Year']);
      $data['Academic_Term'] = (isset($_POST['Academic_Term'])?$_POST['Academic_Term']:$data['Academic_Term']);
      return($data);
   }
   
   public function GetTerms($data){
      $sql = "SELECT academic_term FROM academic_terms ORDER BY academic_term ";
      $query = $this->db->query($sql);
      $terms = $query->result_array();
      $data['terms'] = $terms;
      return($data);
  }   
  public function GetYears($data){
      $sql = "SELECT academic_year FROM academic_years ORDER BY academic_year ";
      $query = $this->db->query($sql);
      $years = $query->result_array();
      $data['years'] = $years;
      return($data);
  }   
   
   public function GetClassStudents($data){
      // Students in current Class
      $data['Assigned_Order'] = (isset($_POST['Assigned_Order'])?$_POST['Assigned_Order']:'Last_Name, First_Name');
      $sql = "SELECT S.* FROM ins_students S, ins_student_classes SC "
           ."WHERE SC.Academic_Year = ? "
           ."AND SC.Academic_Term = ? "
           ."AND SC.Student_ID = S.Student_ID "
           ."AND SC.Status IN ('Notified','Selected') "
           ."AND SC.Class_ID = ? "
           ."ORDER BY ".$data['Assigned_Order']." ";
      $query = $this->db->query($sql,array($data['Academic_Year'],$data['Academic_Term'],$data['Class_ID']));
      $data['inclass'] = $query->result_array();
      return($data);
   }
   public function GetUnassigned($data){
      // Students not yet in a group
      $data['Unassigned_Order'] = (isset($_POST['Unassigned_Order'])?$_POST['Unassigned_Order']:'Last_Name, First_Name');
      $sql = "SELECT * FROM ins_classes "
         ."WHERE Class_ID = ? ";
      $query = $this->db->query($sql,array($data['Class_ID']));
      $row = $query->row_array();
      if(count($row)>0){
         $data['Class_Type'] = $row['Class_Type'];
/*         
         $sql = "SELECT S.* FROM ins_students S WHERE S.Student_ID NOT IN ("
            ."SELECT SC.Student_ID "
            ."FROM ins_student_classes SC, current_values CV "
            ."WHERE SC.Status IN ('Notified','Selected') "
            ."AND SC.Academic_Year = CV.Academic_Year "
            ."AND SC.Academic_Term = CV.Academic_Term "
            ."AND SC.Class_Type LIKE ? ) " 
            ."AND S.".$data['Class_Type']." = 1 "
            ."ORDER BY ".$data['Unassigned_Order']." ";
  
           $sql = "SELECT S.* FROM ins_students S "
            ."WHERE NOT EXISTS ("
            ."   SELECT 1 FROM ins_student_classes SC, ins_classes C, current_values CV "
            ."   WHERE SC.Student_ID = S.Student_ID "
            ."   AND C.Class_ID = SC.Class_ID "
            ."   AND SC.Status IN ('Notified','Confirmed','Selected') "
            ."   AND SC.Academic_Year = CV.Academic_Year "
            ."   AND SC.Academic_Term = CV.Academic_Term "
            ."   AND (SC.Class_Type LIKE ? "
            ."      OR (C.Class_Day LIKE ? "
            ."        AND (( ? BETWEEN C.Class_Start AND C.Class_Finish ) "
            ."          OR ( ? BETWEEN C.Class_Start AND C.Class_Finish )) "
            ."      )"
            ."   )"
            .") " 
            ."AND S.".$data['Class_Type']." = 1 "
            ."ORDER BY ".$data['Unassigned_Order']." ";
 * 
 */
          // Old code prior to ins_class_times
          $sql = "SELECT S.* FROM ins_students S "
            ."WHERE NOT EXISTS ("
            ."   SELECT 1 FROM ins_student_classes SC, ins_classes C, current_values CV "
            ."   WHERE SC.Student_ID = S.Student_ID "
            ."   AND C.Class_ID = SC.Class_ID "
            ."   AND SC.Status IN ('Notified','Confirmed','Selected') "
            ."   AND SC.Academic_Year = CV.Academic_Year "
            ."   AND SC.Academic_Term = CV.Academic_Term "
            ."   AND (SC.Class_Type LIKE ? "
            ."      OR (C.Class_Day LIKE ? "
            ."        AND (( ? BETWEEN DATE_ADD(C.Class_Start, INTERVAL 1 MINUTE) "
            ."             AND DATE_ADD(C.Class_Finish, INTERVAL 1 MINUTE) ) "
            ."          OR ( ? BETWEEN DATE_ADD(C.Class_Start, INTERVAL 1 MINUTE) "
            ."             AND DATE_ADD(C.Class_Finish, INTERVAL 1 MINUTE) )) "
            ."      )"
            ."   )"
            .") " 
            ."AND S.".$data['Class_Type']." = 1 "
            ."ORDER BY ".$data['Unassigned_Order']." ";
 

         // New code for table ins_class_times 
         $sql = "SELECT S.* FROM ins_students S "
            ."WHERE NOT EXISTS ("
            ."   SELECT 1 FROM ins_student_classes SC, ins_classes C, "
            ."    ins_class_times CT, current_values CV "
            ."   WHERE SC.Student_ID = S.Student_ID "
            ."   AND C.Class_ID = SC.Class_ID "
            ."   AND CT.Class_ID = C.Class_ID "
            ."   AND SC.Status IN ('Notified','Confirmed','Selected') "
            ."   AND SC.Academic_Year = CV.Academic_Year "
            ."   AND SC.Academic_Term = CV.Academic_Term "
            ."   AND (SC.Class_Type LIKE ? "
            ."      OR (CT.Class_Day LIKE ? "
            ."        AND (( ? BETWEEN DATE_ADD(CT.Class_Start, INTERVAL 1 MINUTE) "
            ."             AND DATE_ADD(CT.Class_Finish, INTERVAL 1 MINUTE) ) "
            ."          OR ( ? BETWEEN DATE_ADD(CT.Class_Start, INTERVAL 1 MINUTE) "
            ."             AND DATE_ADD(CT.Class_Finish, INTERVAL 1 MINUTE) )) "
            ."      )"
            ."   )"
            .") " 
            ."AND S.Academic_Year = ? "
//            ."AND S.Academic_Term = ? "                 
            ."AND S.".$data['Class_Type']." = 1 "
            ."ORDER BY ".$data['Unassigned_Order']." ";
         
         // New code for table ins_class_times and to avoid problems of BETWEEN
         $sql = "SELECT S.* FROM ins_students S "
            ."WHERE NOT EXISTS ("
            ."   SELECT 1 FROM ins_student_classes SC, ins_classes C, "
            ."    ins_class_times CT, current_values CV "
            ."   WHERE SC.Student_ID = S.Student_ID "
            ."   AND C.Class_ID = SC.Class_ID "
            ."   AND CT.Class_ID = C.Class_ID "
//            ."   AND SC.Status IN ('Notified','Confirmed','Selected') "  
            ."   AND SC.Academic_Year = CV.Academic_Year "
            ."   AND SC.Academic_Term = CV.Academic_Term "
            ."   AND (SC.Class_Type LIKE ? "
            ."      OR (CT.Class_Day LIKE ? "
            ."        AND (( ? >= CT.Class_Start AND ? < CT.Class_Finish) "
            ."          OR ( ? > CT.Class_Start AND ? <= CT.Class_Finish)) "
            ."      )"
            ."   )"
            .") " 
            ."AND S.Academic_Year = ? "
//            ."AND S.Academic_Term = ? "                 
            ."AND S.".$data['Class_Type']." = 1 "
            ."ORDER BY ".$data['Unassigned_Order']." ";
         
         //echo var_dump($sql);
    //     $query = $this->db->query($sql,array($row['Class_Type'],$row['Class_Day'],$row['Class_Start'],$row['Class_Finish'],$data['Academic_Year']/*,$data['Academic_Term']*/));
         $query = $this->db->query($sql,array($row['Class_Type'],$row['Class_Day'],
             $row['Class_Start'],$row['Class_Start'],
             $row['Class_Finish'],$row['Class_Finish'],
             $data['Academic_Year']/*,$data['Academic_Term']*/));
         $data['noclass'] = $query->result_array();
      }else{
         $data['noclass'] = array();
      }
      return($data);
   }

      public function GetWithdrawn($data){
      // Students not yet in a group
      $data['Withdrawn_Order'] = ((isset($_POST['Withdrawn_Order']) && !$_POST['Withdrawn_Order'] == '')?$_POST['Withdrawn_Order']:'Last_Name, First_Name');
      $sql = "SELECT * FROM ins_classes "
         ."WHERE Class_ID = ? ";
      $query = $this->db->query($sql,array($data['Class_ID']));
      $row = $query->row_array();
      if(count($row)>0){
         $data['Class_Type'] = $row['Class_Type'];
         // New code for table ins_class_times and to avoid problems of BETWEEN
         $sql = "SELECT S.* FROM ins_students S "
            ."WHERE EXISTS ("
            ."   SELECT 1 FROM ins_student_classes SC, current_values CV " 
// ins_classes C, ins_class_times CT, "
            ."   WHERE SC.Student_ID = S.Student_ID "
//            ."   AND C.Class_ID = SC.Class_ID "
     //       ."   AND CT.Class_ID = C.Class_ID "
            ."   AND SC.Status IN ('Removed','Unselected','Withdrawn') "
            ."   AND SC.Class_Type LIKE '".$row['Class_Type']."' "
            ."   AND SC.Academic_Year = CV.Academic_Year "
//            ."   AND SC.Academic_Term = CV.Academic_Term "
//            ."   AND (SC.Class_Type LIKE ? "
//            ."      OR (CT.Class_Day LIKE ? "
//            ."        AND (( ? >= CT.Class_Start AND ? < CT.Class_Finish) "
//            ."          OR ( ? > CT.Class_Start AND ? <= CT.Class_Finish)) "
//            ."      )"
//            ."   )"
            .") " 
            ."AND NOT EXISTS ("
            ."   SELECT 1 FROM ins_student_classes SC, ins_classes C, "
            ."    ins_class_times CT, current_values CV "
            ."   WHERE SC.Student_ID = S.Student_ID "
            ."   AND C.Class_ID = SC.Class_ID "
            ."   AND CT.Class_ID = C.Class_ID "
            ."   AND SC.Status IN ('Notified','Confirmed','Selected') "
            ."   AND SC.Academic_Year = CV.Academic_Year "
            ."   AND SC.Academic_Term = CV.Academic_Term "
            ."   AND (SC.Class_Type LIKE ? "
            ."      OR (CT.Class_Day LIKE ? "
            ."        AND (( ? >= CT.Class_Start AND ? < CT.Class_Finish) "
            ."          OR ( ? > CT.Class_Start AND ? <= CT.Class_Finish)) "
            ."      )"
            ."   )"
            .") " 
          ."AND S.Academic_Year = '".$data['Academic_Year']."' "
            ."AND S.".$data['Class_Type']." = 1 "
            ."ORDER BY ".$data['Withdrawn_Order']." ";
         
     //    echo var_dump($sql);
    //     $query = $this->db->query($sql,array($row['Class_Type'],$row['Class_Day'],$row['Class_Start'],$row['Class_Finish'],$data['Academic_Year']/*,$data['Academic_Term']*/));
         $query = $this->db->query($sql
             ,array($row['Class_Type'],$row['Class_Day'],
             $row['Class_Start'],$row['Class_Start'],
             $row['Class_Finish'],$row['Class_Finish'])
             );
         $data['withdrawn'] = $query->result_array();
      }else{
         $data['withdrawn'] = array();
      }
      return($data);
   }

   
   public function DropStudent($data){
      $data['Drop_ID'] = (isset($_POST['Drop_ID'])?$_POST['Drop_ID']:'0');
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:'0');
      $sql = "UPDATE ins_student_classes SC, current_values CV SET "
         ."SC.Status = 'Unselected' "
         ."WHERE SC.Academic_Year = CV.Academic_Year AND SC.Academic_Term = CV.Academic_Term "
         ."AND SC.Student_ID = ? AND Class_ID = ?  ";
      $this->db->query($sql,array($data['Drop_ID'],$data['Class_ID']));
      return($data);
   }
   public function AddStudent($data){
      $data['Add_ID'] = (isset($_POST['Add_ID'])?$_POST['Add_ID']:0);
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:0);
      $sql = "SELECT * FROM ins_student_classes "
         ."WHERE Class_ID = ? AND Student_ID = ? "
         ."AND (Status = 'Unselected' OR Status = 'Removed') ";
      $query = $this->db->query($sql,array($data['Class_ID'],$data['Add_ID']));
      if (Count($query->result_array())==0){
         $sql = "INSERT INTO ins_student_classes "
            ."(Academic_Year, Academic_Term, Student_ID, Class_ID, Class_Type, Status) "
            ."SELECT CV.Academic_Year, CV.Academic_Term, ".$data['Add_ID'].", "
            ."C.Class_ID, C.Class_Type, 'Selected' "
            ."FROM current_values CV, ins_classes C "
            ."WHERE C.Class_ID = ".$data['Class_ID']." ";
         $this->db->query($sql);
      }else{
         $sql = "UPDATE ins_student_classes SC, current_values CV SET "
            ."SC.Status = 'Selected' "
            ."WHERE SC.Academic_Year = CV.Academic_Year AND SC.Academic_Term = CV.Academic_Term "
            ."AND SC.Student_ID = ? AND SC.Class_ID = ? "
            ."AND (SC.Status = 'Unselected' OR SC.Status = 'Removed') ";
         $this->db->query($sql,array($data['Add_ID'],$data['Class_ID']));
      }
      return($data);
   }
   
   public function NotifyChanges($data){
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:0);
      $StudentList = array(); // Array of new students in the class
      $OldList = array(); // Array of students dropped from class
      //
      //
      // Set-up Email
/*
      require("class.phpmailer.php");
      $mail = new PHPMailer(); 
      $mail->IsSMTP();  // telling the class to use SMTP
      $mail->Host     = "localhost"; // SMTP server
      $mail->From     = "aps@bario.co.uk";
      $mail->AddAddress("aps@bario.co.uk");
      $mail->Subject  = "First PHPMailer Message";
      $mail->Body     = "Hi! \n\n This is my first e-mail sent through PHPMailer.";
      $mail->WordWrap = 50;
      if(!$mail->Send()) {
         echo 'Message was not sent.';
         echo 'Mailer error: ' . $mail->ErrorInfo;
      } else {
         echo 'Message has been sent.';
      }
      // 
      // 
      // 
      // 
      // 
      // 
      // 
      // 
//      $config['protocol'] = 'sendmail';
//      $config['mailpath'] = '/usr/sbin/sendmail';
//      $config['smtp_port'] = 25;
      
//      $config['protocol'] = 'smtp';
//      $config['smtp_user'] = '';  //	No Default	None	SMTP Username.
//      $config['smtp_pass'] = '';  //	No Default	None	SMTP Password.
//      $config['smtp_host'] = 'mail-relay-1.csv.warwick.ac.uk';//	No Default	None	SMTP Server Address.
  //    $config['smtp_host'] = 'mail-relay.csv.warwick.ac.uk';//	No Default	None	SMTP Server Address.
//      $config['smtp_timeout'] = 30;
//      $config['smtp_port'] = 25;
/*       
      if(0){
         $config['protocol'] = 'sendmail';
         $config['mailpath'] = '/usr/sbin/sendmail -t -i';
         $config['smtp_port'] = 25;
      }else{
         $config['protocol'] = 'smtp';
         $config['smtp_host'] = 'mail-relay-1.csv.warwick.ac.uk';//	No Default	None	SMTP Server Address.
         $config['smtp_host'] = 'mail-relay.csv.warwick.ac.uk';//	No Default	None	SMTP Server Address.
         $config['smtp_timeout'] = 30;
      }
     
      // Check Code for fSocket
//      $port = 25;
//      $address = $config['smtp_host'];
//      $checkport = fsockopen($address, $port, $errnum, $errstr, 20); //The 2 is the time of ping in secs 
//      //Here down you can put what to do when the port is closed 
//      if(!$checkport){ 
//       echo "The port ".$port." from ".$address." seems to be closed.";  //Only will echo that msg 
        }else{ 

//And here, what you want to do when the port is open 
       echo "The port ".$port." from ".$address." seems to be open."; //The msg echoed if port is open 
} 
     
  */      
 //     $config['mailtype'] = 'html';
 //     $config['headers'] = "From: In-sessional Admin <insessional@warwick.ac.uk>";
 //     $config['newline'] = "\r\n";
 //     $config['crlf'] = "\r\n";
 //     $config['charset'] = 'utf-8'; 
    
 //     $this->email->initialize($config);
      // Email all students selected to the class
      //
      // Old Code before ins_class_times table introduced
      $sql = "SELECT S.First_Name, S.Last_Name, S.University_ID, S.Email AS Student_Email, "
         ."T.First_Name As Tutor_First_Name, T.Last_Name As Tutor_Last_Name, "
         ."T.Email AS Tutor_Email, CV.Ins_Start_Date, SC.Status, "
         ."C.Class_Subject, C.Class_Day, C.Class_Start, C.Class_Finish, C.Class_Room "
         ."FROM ins_students S, ins_student_classes SC, ins_classes C, teachers T, current_values CV "
         ."WHERE S.Student_ID = SC.Student_ID AND SC.Class_ID = C.Class_ID AND T.Tutor_Inits = C.Class_Tutor_Inits "
         ."AND (SC.Status = 'Selected' OR SC.Status = 'Notified') AND C.Class_ID = ?"
         ."ORDER BY S.Last_Name, S.First_Name, S.University_ID ";

      // New code after introduction of ins_class_times
      $sql = "SELECT S.First_Name, S.Last_Name, S.University_ID, S.Email AS Student_Email, "
         ."T.First_Name As Tutor_First_Name, T.Last_Name As Tutor_Last_Name, "
         ."T.Email AS Tutor_Email, CV.Ins_Start_Date, SC.Status, C.Class_No, "
         ."C.Class_Subject, CT.Class_Day, CT.Class_Start, CT.Class_Finish, CT.Class_Room "
         ."FROM ins_students S, ins_student_classes SC, ins_classes C, "
         ."   ins_class_times CT, teachers T, current_values CV "
         ."WHERE S.Student_ID = SC.Student_ID AND SC.Class_ID = C.Class_ID "
         ."AND CT.Class_ID = C.Class_ID AND T.Tutor_Inits = CT.Class_Tutor_Inits "
         ."AND (SC.Status = 'Selected' OR SC.Status = 'Notified') AND C.Class_ID = ? "
         ."ORDER BY S.Last_Name, S.First_Name, S.University_ID ";

      $query = $this->db->query($sql,array($data['Class_ID']));
      if(count($query->result_array()) > 0){
         $this->email->clear();
//         foreach($query->result_array() As $Student){
         $students = $query->result_array(); // Copy Array 
         reset($students); // Force beginning of array
         while(($Student = current($students))!== false){
            if($Student['Status']=='Selected'){
               $Tutor_First_Name = $Student['Tutor_First_Name'];
               $Tutor_Last_Name = $Student['Tutor_Last_Name'];
               $Tutor_Email = $Student['Tutor_Email'];
               $Class_Subject = $Student['Class_Subject'];
               $Class_Day = $Student['Class_Day'];
               $Class_Start = $Student['Class_Start'];
               $Class_Finish = $Student['Class_Finish'];
               $Class_Room = $Student['Class_Room'];
               $LastStudentID = $Student['University_ID'];
               // Prepare New Email
               $this->email->clear();
 //$this->email->to('andrew.p.smith@warwick.ac.uk');
 //$this->email->to('alanktest@warwick.ac.uk');
 //echo $Student['Student_Email'].'<br/>';
               $this->email->to($Student['Student_Email']);
               $this->email->cc('insessional@warwick.ac.uk');
 //             $this->email->bcc('andrew.p.smith@warwick.ac.uk');
               $this->email->from('insessional@warwick.ac.uk','In-sessional Admin');
               $this->email->reply_to('insessional@warwick.ac.uk');
               $this->email->subject('In-sessional class confirmation'/*.' {'.$Student['Class_No'].'}'*/); 
               $emailtextA = "Dear ".$Student['First_Name'].",<br/><br/>\n\n" 
                  //."In-sessional classes will all start the week beginning "
                  //.$Student['Ins_Start_Date'].".<br/><br/>\n\n"
                  ."I can now confirm that you have been enrolled in the "
                  .$Student['Class_Subject']." class, which will meet at the following time(s):<br/><br/>\n\n ";
               $emailtextB = "<br/>\n<b color='RED'>Please contact me if you are unable to attend at this time, as other students are "
                  ."on the waiting list to attend classes; for 2-hour and 3-hour classes we also expect you to "
                  ."attend the complete class through the term.</b><br/><br/>\n\n"
                  ."<br/>\n<br/>\nRegards, <br/><br/>\n\n"
                  ."Sheila Verrier<br/><br/>\n\n"
                  ."In-sessional English Programme<br/>\n"
                  ."The Centre for Applied Linguistics<br/>\n"
                  ."University of Warwick<br/>\n"
                  ."COVENTRY<br/>\n"
                  ."CV4 7AL<br/><br/>\n\n"
                  ."t: 02476 150173<br/>\n"
                  ."f: 02476 524318<br/>\n"
                  ."e: insessional@warwick.ac.uk<br/>\n"
                  ."w: http://www2.warwick.ac.uk/fac/soc/al/intranet/learn_english/in-sessional/<br/>\n";
//              $StudentList[]=$Student['Last_Name'].", ".$Student['First_Name']." [".$Student['University_ID'].")";
//              $LastStudentID = "0"; // Used to detect if next class day is for the same student
                 
               // Cycle through records until all class days for that student are listed
               while(($student = current($students))!== false && $student['University_ID'] == $LastStudentID) {
                  $emailtextA .= $Student['Class_Day']."s from ".$Student['Class_Start']." to ".$Student['Class_Finish']
                     ." in room ".$Student['Class_Room']." with ".$Student['Tutor_First_Name']." ".$Student['Tutor_Last_Name']
                     ." <br/>\n";
                  $LastStudentID = $Student['University_ID'];
                  next($students); // Move to next array entry
               }
               $emailtextA .= $emailtextB; 
               $this->email->message($emailtextA);
               if(!$this->email->send()){
                  $data['EmailError'] = $this->email->print_debugger();
                  echo $this->email->print_debugger();
               }
            } else {
               next($students);
            }
         }
         $this->email->clear();
      }
      
      // Notify all teachers of those added or dropped from a class
      
      // New code after introduction of ins_class_times
      $sql = "SELECT S.First_Name, S.Last_Name, S.University_ID, S.Email AS Student_Email, "
         ."T.First_Name As Tutor_First_Name, T.Last_Name As Tutor_Last_Name, "
         ."T.Email AS Tutor_Email, CV.Ins_Start_Date, SC.Status, C.Class_No, "
         ."C.Class_Subject, CT.Class_Day, CT.Class_Start, CT.Class_Finish, CT.Class_Room "
         ."FROM ins_students S, ins_student_classes SC, ins_classes C, "
         ."   ins_class_times CT, teachers T, current_values CV "
         ."WHERE S.Student_ID = SC.Student_ID AND SC.Class_ID = C.Class_ID "
         ."AND CT.Class_ID = C.Class_ID AND T.Tutor_Inits = CT.Class_Tutor_Inits "
         ."AND (SC.Status = 'Selected' OR SC.Status = 'Notified') AND C.Class_ID = ? "
         ."ORDER BY T.Last_Name, T.First_Name, T.Email, S.Last_Name, S.First_Name ";

      $query = $this->db->query($sql,array($data['Class_ID']));
      if(count($query->result_array()) > 0){
         $this->email->clear();
//         foreach($query->result_array() As $Student){
         $students = $query->result_array(); // Copy Array 
         reset($students); // Force beginning of array
         while(($Student = current($students))!== false){
            if($Student['Status']=='Selected' || $Student['Status']=='Notified'){
               $Tutor_First_Name = $Student['Tutor_First_Name'];
               $Tutor_Last_Name = $Student['Tutor_Last_Name'];
               $Tutor_Email = $Student['Tutor_Email'];
               $Class_Subject = $Student['Class_Subject'];
               $Class_Day = $Student['Class_Day'];
               $Class_Start = $Student['Class_Start'];
               $Class_Finish = $Student['Class_Finish'];
               $Class_Room = $Student['Class_Room'];
               // Prepare Email
//$this->email->to('andrew.p.smith@warwick.ac.uk');
//$this->email->to('alanktest@warwick.ac.uk');
//echo $Student['Tutor_Email'].'<br/>';
               $this->email->to($Student['Tutor_Email']);
               $this->email->cc('insessional@warwick.ac.uk');
//               $this->email->bcc('andrew.p.smith@warwick.ac.uk');
               $this->email->from('insessional@warwick.ac.uk','In-sessional Admin');
               $this->email->reply_to('insessional@warwick.ac.uk');
               $this->email->subject('In-sessional class confirmation'/*.' {'.$Student['Class_No'].'}'*/); 
               $emailtext = "Dear ".$Student['Tutor_First_Name'].",<br/><br/>\n\n" 
                  ."The list of students in the following In-sessional class has been updated; "
                  .$Student['Class_Subject']."' which you will be teaching on ".$Student['Class_Day']."s "
                  ."from ".$Student['Class_Start']." to ".$Student['Class_Finish']." in room ".$Student['Class_Room'].":<br/><br/>\n\n";
               // Cycle through records until all class days for that student are listed
               while(($Student = current($students))!== false && $Tutor_Email = $Student['Tutor_Email']) {
                  $emailtext .= $Student['Last_Name'].", ".$Student['First_Name']." [".$Student['University_ID']."]<br/>\n";
                  $Tutor_Email = $Student['Tutor_Email'];
                  next($students); // Move to next array entry
               }
               $emailtext.="<br/><br/>\n\n"           
                  ."Regards,<br/><br/>\n\n"
                  ."Sheila Verrier<br/><br/>\n\n"
                  ."In-sessional English Programme<br/>\n"
                  ."The Centre for Applied Linguistics<br/>\n"
                  ."University of Warwick<br/>\n"
                  ."COVENTRY<br/>\n"
                  ."CV4 7AL<br/><br/>\n\n"
                  ."t: 02476 150173<br/>\n"
                  ."f: 02476 524318<br/>\n"
                  ."e: insessional@warwick.ac.uk<br/>\n"
                  ."w: http://www2.warwick.ac.uk/fac/soc/al/intranet/learn_english/in-sessional/<br/>\n";
               $this->email->message($emailtext);
               if(!$this->email->send()){
                  $data['EmailError'] = $this->email->print_debugger();
                  echo $this->email->print_debugger();
               }        
            } else {
               next($students); // Move to next array entry
            }
         }
         $this->email->clear();
      }
/*      
      // Notify all students dropped from a class
      $sql = "SELECT S.First_Name, S.Last_Name, S.University_ID, S.Email AS Student_Email, "
         ."T.First_Name As Tutor_First_Name, T.Last_Name As Tutor_Last_Name, "
         ."T.Email AS Tutor_Email, CV.Ins_Start_Date, SC.Status, "
         ."C.Class_Subject, C.Class_Day, C.Class_Start, C.Class_Finish, C.Class_Room "
         ."FROM ins_students S, ins_student_classes SC, ins_classes C, teachers T, current_values CV "
         ."WHERE S.Student_ID = SC.Student_ID AND SC.Class_ID = C.Class_ID AND T.Tutor_Inits = C.Class_Tutor_Inits "
         ."AND SC.Status = 'Unselected' AND C.Class_ID = ?"
         ."ORDER BY S.Last_Name, S.First_Name, S.University_ID ";
      $query = $this->db->query($sql,array($data['Class_ID']));
      if(count($query->result_array()) > 0){
         $this->email->clear();
         foreach($query->result_array() As $Student){
            if($Student['Status']=='Selected'){
               $Tutor_First_Name = $Student['Tutor_First_Name'];
               $Tutor_Last_Name = $Student['Tutor_Last_Name'];
               $Tutor_Email = $Student['Tutor_Email'];
               $Class_Subject = $Student['Class_Subject'];
               $Class_Day = $Student['Class_Day'];
               $Class_Start = $Student['Class_Start'];
               $Class_Finish = $Student['Class_Finish'];
               $Class_Room = $Student['Class_Room'];

               $this->email->clear();
               $this->email->to($Student['Student_Email']);
               $this->email->cc($Student['Tutor_Email']);
               $this->email->bcc('insessional@warwick.ac.uk');
               $this->email->from('insessional@warwick.ac.uk','In-sessional Admin');
               $this->email->reply_to('insessional@warwick.ac.uk');
               $this->email->subject("In-sessional class confirmation"); 
               $emailtext = "Dear ".$Student['First_Name'].",".crlf
                  ."In-sessional class lists have been updated and you are no longer on the register"
                  ."for the following class:<br/><br/>\n\n"
                  .$Student['Class_Day']."s ".$Student['Class_Subject']." class at ".$Student['Class_Start'].".<br/><br/>\n\n"
                  ."Your tutor ".$Student['Tutor_First_Name']." ".$Student['Tutor_Last_Name']." has also been notified. <br/><br/>\n\n"
                  ."Regards, <br/><br/>\n\n"
                  ."Sheila Verrier<br/><br/>\n\n"
                  ."In-sessional English Programme<br/>\n"
                  ."The Centre for Applied Linguistics<br/>\n"
                  ."University of Warwick<br/>\n"
                  ."COVENTRY<br/>\n"
                  ."CV4 7AL<br/><br/>\n\n"
                  ."t: 02476 150173<br/>\n"
                  ."f: 02476 524318<br/>\n"
                  ."e: insessional@warwick.ac.uk<br/>\n"
                  ."w: http://www2.warwick.ac.uk/fac/soc/al/intranet/learn_english/in-sessional/<br/>\n";
               $this->email->message($emailtext);
               if(!$this->email->send()){;
                  $data['EmailError'] = $this->email->print_debugger();
                  echo $this->email->print_debugger();
               }
            }
         }
         $this->email->clear();
      }
*/      
      // Update status in ins_student_classes - Change Selected->Notified & Deleted Unselected

      $sql = "UPDATE ins_student_classes SET Status = 'Notified' "
         ."WHERE Class_ID = ? AND Status = 'Selected' ";
      $this->db->query($sql,array($data['Class_ID']));
      $sql = "UPDATE ins_student_classes SET Status = 'Removed' "
         ."WHERE Class_ID = ? AND Status = 'Unselected' ";
      $this->db->query($sql,array($data['Class_ID']));
  
      return($data);
 
   }
   
   public function MailingList($data){
      // Get Current Values
      $data['Class_ID'] = (isset($_POST['Class_ID'])?$_POST['Class_ID']:0);
      $sql = "SELECT CV.Academic_Year, CV.Academic_Term "
         ."FROM current_values CV ";
      $query = $this->db->query($sql);
      $row = $query->row_array();
      $data['Academic_Year'] = $row['Academic_Year'];
      $data['Academic_Term'] = $row['Academic_Term'];
      // Get Class details
      $sql = "SELECT C.Class_Subject, C.Class_Instance, "
         ."CT.Class_Day, CT.Class_Start, CT.Class_Finish, CT.Class_Room "
         ."FROM ins_classes C, ins_class_times CT "
         ."WHERE C.Class_ID = CT.Class_ID "
         ."AND C.Academic_Year = ? AND C.Academic_Term = ? "
         ."AND C.Class_ID = ? ";
      $query = $this->db->query($sql,array($data['Academic_Year'],$data['Academic_Term'],$data['Class_ID']));
      $data['class'] = $query->row_array();
      // Get Teacher Email details
      $sql = "SELECT T.Last_Name, T.First_Name, T.Email "
         ."FROM teachers T, ins_classes C, ins_class_times CT "
         ."WHERE C.Academic_Year = ? AND C.Academic_Term = ? "
         ."AND C.Class_ID = CT.Class_ID "
         ."AND T.Tutor_Inits = CT.Class_Tutor_Inits "
         ."AND C.Class_ID = ? ";
      $query = $this->db->query($sql,array($data['Academic_Year'],$data['Academic_Term'],$data['Class_ID']));
      $data['teacher'] = $query->row_array();
      // Get Student Email details
      $sql = "SELECT S.Last_Name, S.First_Name, S.Email "
         ."FROM ins_students S, ins_student_classes SC "
         ."WHERE SC.Academic_Year = ? AND SC.Academic_Term = ? "
         ."AND S.Student_ID = SC.Student_ID "
         ."AND SC.Status IN ('Selected','Notified','Confirmed') "
         ."AND SC.Class_ID = ? "
         ."ORDER BY S.Last_Name, S.First_Name, S.University_ID ";
      $query = $this->db->query($sql,array($data['Academic_Year'],$data['Academic_Term'],$data['Class_ID']));
      $data['students'] = $query->result_array();
     // echo var_dump($data);
      return($data);
   }
   
   
  
   public function Reports ($data){
      // Report - Note there is a VIEW ins_reports, but not possible in insert a WHERE clause as here. 
      $sql = "SELECT R.Academic_Year, R.Academic_Term, "
         ."  R.Registered, R.Subject, IFNULL(C.Academic_Term,'--') as Placed_Term, "
         ."IF(C.Status='Notified','Placed',"
         ."IF(C.Status='Selected','Placed',"
         ."IF(C.Status='Unselected','Removed',"
         ."IFNULL(C.Status,'Waiting')))) AS Status,  "
         ."  Count(1) as Students "
         ."FROM ins_registrations R "
         ."LEFT JOIN ins_student_classes C ON ("
         ."R.Academic_Year = C.Academic_Year AND R.Student_ID = C.Student_ID ) "
         ."WHERE TRUE ";
     if(isset($data['Academic_Year']) and $data['Academic_Year'] !=''){
        $sql.="AND R.Academic_Year = '".$data['Academic_Year']."' ";
     }
     if(isset($data['Academic_Term']) and $data['Academic_Term'] !=''){
        $sql.="AND R.Academic_Term = '".$data['Academic_Term']."' ";
     }
     if(isset($data['Registered']) and $data['Registered'] !=''){
        $sql.="AND R.Registered = '".$data['Registered']."' ";
     }
     if(isset($data['Subject']) and $data['Subject'] !=''){
        $sql.="AND R.Subject = '".$data['Subject']."' ";
     }
     if(isset($data['Placed_Term']) and $data['Placed_Term'] !=''){
        $sql.="AND C.Academic_Term = '".$data['Placed_Term']."' ";
     }
     if(isset($data['Status']) and $data['Status'] !=''){
        $sql.="AND IF(C.Status='Notified','Placed',"
         ."IF(C.Status='Selected','Placed',"
         ."IF(C.Status='Unselected','Removed',"
         ."IFNULL(C.Status,'Waiting')))) = '".$data['Status']."' ";
     }
     $sql.="GROUP BY R.Academic_Year, R.Academic_Term , "
         ."  R.Registered, R.Subject, C.Academic_Term , "
         ."IF(C.Status='Notified','Placed',"
         ."IF(C.Status='Selected','Placed',"
         ."IF(C.Status='Unselected','Removed',"
         ."IFNULL(C.Status,'Waiting'))))  ";
      $query = $this->db->query($sql);
      $data['report'] = $query->result_array();
      //echo var_dump($data);
      return($data);
   }
   
public function GetAttendance($data){
    // Ensure that the register table is populated
    $data['Student_ID'] = (isset($_POST['Student_ID'])?$_POST['Student_ID']:0);
    // Select correct 
    $sql = "SELECT CS.Course_ID, CM.Course_Year, "
            ."S.Student_ID, S.Family_Name, S.First_Names, S.Country, S.Gender, "
            ."SM.Academic_Year, SM.Academic_Term, SM.Module_ID, "
            ."C.Class_ID, C.Class_Day, C.Class_Start, C.Class_Finish, C.Class_Type, "
            ."R.Wk1, R.Wk2, R.Wk3, R.Wk4, R.Wk5, R.Wk6, R.Wk7, R.Wk8, R.Wk9, R.Wk10, "
            ."AM.Attendance_Max-AC.Attendance_Cnt AS Missed, "
            ."ROUND(IF(AM.Attendance_Max=0,0,AC.Attendance_Cnt*100/AM.Attendance_Max)) as Attendance, "
            ."R.Comments "
        ."FROM ba_course_students CS, ba_course_modules CM, ba_students S, "
            . "ba_student_modules SM, ba_classes C, ba_registers R, "
            . "ba_attendance_cnt AC, ba_attendance_max AM "
        ."WHERE CS.Student_ID = S.Student_ID "
            ."AND SM.Student_ID = S.Student_ID "
            ."AND R.Student_ID = S.Student_ID "
            ."AND AC.Student_ID = S.Student_ID "
            ."AND C.Academic_Year = SM.Academic_Year "
            ."AND R.Academic_Year = SM.Academic_Year "
            ."AND AC.Academic_Year = SM.Academic_Year "
            ."AND AM.Academic_Year = SM.Academic_Year "
            ."AND C.Academic_Term = SM.Academic_Term "
            ."AND R.Academic_Term = SM.Academic_Term "
            ."AND AC.Academic_Term = SM.Academic_Term "
            ."AND AM.Academic_Term = SM.Academic_Term "
            ."AND C.Module_ID = SM.Module_ID "
            ."AND CM.Module_ID = SM.Module_ID "
            ."AND R.Class_ID = C.Class_ID "
            ."AND AC.Class_ID = C.Class_ID "
            ."AND AM.Class_ID = C.Class_ID "
        ."AND CS.Course_ID = ? "
        ."AND CM.Course_Year = ? "
        ."AND SM.Academic_Year = ? "
        ."AND SM.Academic_Term = ? "
        ."AND S.Student_ID = ? "
        ."ORDER BY CS.Course_ID, S.Student_ID, SM.Academic_Year, SM.Academic_Term, SM.Module_ID, C.Class_Type ";
      $query = $this->db->query($sql,array($data['Course_ID'],$data['Course_Year'],$data['Academic_Year'],$data['Academic_Term'],$data['Student_ID']));
      $data['attendance'] = $query->result_array();
      return($data);
   }
   
public function GetMonitoring($data){
    $sql = "SELECT Course_ID, Course_Year, Academic_Year, Academic_term, " 
        ."Student_ID, Family_Name, First_Names, Week_No, Module_ID, Class_Type, Present "
        ."FROM ba_student_monitoring "
        ."WHERE Course_ID = ? AND Course_Year = ? AND Academic_Year = ? AND Academic_Term = ?  "
        ."ORDER BY Course_ID, Academic_Year, Academic_Term, Student_ID, Week_No, Module_ID, Class_Type ";
      $query = $this->db->query($sql,array($data['Course_ID'],$data['Course_Year'],$data['Academic_Year'],$data['Academic_Term']));
      $data['monitoring'] = $query->result_array();
      return($data);
   }
   
   
   
/*   
   SQL FOR STUDENT CLASS CLASSES - 
   
   SELECT S.LAST_NAME, S.First_Name, S.University_ID,
CA.Class_No, CA.Class_Day, CA.Class_Start, CA.Class_Finish, 
CB.Class_No, CB.Class_Day, CB.Class_Start, CB.Class_Finish 
FROM ins_students S,
  ins_student_classes SCA, ins_classes CA,  
  ins_student_classes SCB, ins_classes CB,  
  current_values CV,
WHERE SCA.Student_ID = S.Student_ID AND SCB.Student_ID = S.Student_ID
AND CA.Class_ID = SCA.Class_ID AND CB.Class_ID = SCB.Class_ID 
AND SCA.Status IN ('Notified','Confirmed','Selected') 
AND SCB.Status IN ('Notified','Confirmed','Selected') 
AND SCA.Academic_Year = CV.Academic_Year 
AND SCA.Academic_Term = CV.Academic_Term 
AND SCB.Academic_Year = CV.Academic_Year 
AND SCB.Academic_Term = CV.Academic_Term 
AND NOT SCA.Class_ID = SCB.Class_ID
AND CA.Class_Day = CB.Class_Day
AND (CA.Class_Start BETWEEN CB.Class_Start AND CB.Class_Finish  
  OR CA.Class_Finish BETWEEN CB.Class_Start AND CB.Class_Finish ) 
ORDER BY Last_Name, First_Name, CA.Class_Day, CA.Class_Start, CA.Class_No
   
*/   
   
 /*     
    public function XML2Record(xmlString, Form_ID){
    
    
    rst.Open "SELECT * FROM ins_Submissions", cnn, adOpenKeyset, adLockOptimistic
    
    'Loads Xml string into a DOMDocument so we can iterate through records
    Dim doc As DOMDocument60
    Set doc = New DOMDocument60
    doc.SetProperty "ProhibitDTD", False
    doc.SetProperty "ResolveExternals", False
    doc.SetProperty "ValidateOnParse", False
    doc.async = False
    
    doc.loadXML (xmlString)
    
    If (doc.parseError.errorCode <> 0) Then
      Dim myErr
      Set myErr = doc.parseError
      MsgBox ("You have error: " & myErr.reason)
    End If

  
    Dim nod As Object
    'Isolates submissions and loads node list into nolPrinc
    Set nolPrinc = doc.selectNodes(xmlSelectString)
    Processed = False
    For Each nod In nolPrinc
        rst.AddNew
        'For each submission, sets field list as list of child nodes
        Set nolChild = nod.childNodes
        ' Check XML for each node
'       For n = 0 To nolChild.length - 1
'            MsgBox nolChild.Item(n).XML
'        Next
        'Iterates through child nodes and adds field data to table
        nIndex = 1
        For Each nodP In nolChild
            Processed = True
            ' Microsoft XML does not give access to the XML property name
            ' So it is necessary to strip the FieldName out of the raw XML
            nameStart = InStr(nodP.XML, "name=""") + 6
            nameStop = InStr(nameStart, nodP.XML, """>")
            FieldName = Mid(nodP.XML, nameStart, nameStop - nameStart)
            FieldName = Replace(Trim(FieldName), " ", "_")
'            MsgBox ("Form:" & Str(Form_ID) & "  Index:" & Str(nIndex) & "  Field:" & FieldName)
            If Len(nodP.Text) > 250 Then
                nodP.Text = Left(nodP.Text, 250)
            End If
            rst.Fields(FieldName) = nodP.Text
NextField:
            nIndex = nIndex + 1
        Next
        ' Saves fields to table. If duplicate record, error thrown and moves to next record.
        ' There is probably a better way of doing this to prevent trying to add submissions
        ' we've already saved but this will do for now.
        rst.Update 
  
   
NextRecord:
    Next
'    If Not Processed Then
'        MsgBox ("This XML file did not process; " & xmlString)
'    End If
    ' Close objects
    rst.Close
    Set rst = Nothing
    'cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
    Set doc = Nothing
    Set nodP = Nothing
    Set nod = Nothing
    Set nolChild = Nothing
    Set nolPrinc = Nothing
Exit Sub
    
dbErrorHandler:
    'Checks if key violation error. Cancels update if it is.
    If Err = -2147217887 Then
        rst.CancelUpdate
        Resume NextRecord
    ElseIf Err = -2147352571 Then ' Type Mismatch (probably a date format)
        Resume Next
    ElseIf Err = 3265 Then 'Checks if xml field not matching ins_Submissions Table
        MsgBox "Enrolment Form (" & Form_ID & ") field """ & FieldName & """ is not in ins_Submissions table"
        Resume NextField
    ElseIf Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
Abort:
    cnn.Close
    Set cnn = Nothing
    MsgBox "Process Aborted"
   }
  * 
  * 
    
      
   //   ShowProgress (1 / 20) ' To show it has started
   // On Error GoTo dbErrorHandler
    Dim sFieldList, sForms, FormID, cSQL, xmlDoc As String
    Dim aForms(10), pageURL As String
    Dim FormTotal, FormCount As Integer
    Dim cnn As ADODB.Connection
    Dim rsForms As ADODB.Recordset
    
    sFieldList = ""
    '
    ' Online forms containing Submissions are listed in the table "Online_Forms"
    '
     Set cnn = New ADODB.Connection
    Set rsForms = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    cSQL = "SELECT Form_ID, Form_URL " _
        & "FROM Online_Forms " _
        & "WHERE Programme = 'In-sessional' AND Form_Enabled " _
        & "ORDER BY Form_Name"
    rsForms.Open cSQL, cnn, adOpenKeyset, adLockOptimistic
    FormTotal = rsForms.RecordCount
    If FormTotal > 0 Then
        rsForms.MoveFirst
    End If
    FormCount = 1
    Do While Not rsForms.EOF
        pageURL = "https://sitebuilder.warwick.ac.uk/sitebuilder2/forms/submissions/download.xml?"
        pageURL = pageURL & "page=" & Trim(rsForms("Form_URL"))
    '    pageURL = pageURL & "&startDate=" & Format(Now() - 30, "dd/mm/yyyy") & "&endDate=01/12/2012&filter=&forceBasic=true"
        xmlDoc = GetXML(pageURL)
        xmlDoc = Replace(xmlDoc, "<filter/>", "<filter></filter>")
        XML2Record xmlDoc, rsForms("Form_ID")
        ShowProgress (FormCount / FormTotal)
        DoEvents
        FormCount = FormCount + 1
        rsForms.MoveNext
    Loop
    rsForms.Close
    cSQL = "UPDATE ins_Submissions S, current_values CV " _
        & "SET S.Academic_Year = CV.Academic_Year, S.Academic_Term = CV.Academic_Term " _
        & "WHERE S.Academic_Year IS NULL "
    DoCmd.SetWarnings (False)
    DoCmd.RunSQL (cSQL)
    DoCmd.SetWarnings (True)
    cnn.Close
    Set cnn = Nothing
    ShowProgress (1)
    DoEvents
    MsgBox ("Process Complete")
    ShowProgress (0)

Exit Function

dbErrorHandler:
    'Checks if key violation error. Cancels update if it is.
    If Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    ElseIf Err = -2147352571 Then ' Type Mismatch (probably a date format)
        Resume Next
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
Abort:
    MsgBox "Process Aborted"
    Set rsForms = Nothing
    'cnn.Rollback
    cnn.Close
    Set cnn = Nothing
End Function
   } 


   
      
      
      
'   //Dim xmlDoc As Object
'   Set xmlDoc = New DOMDocument
    Dim xmlHttpRequest As Object
    Dim Username, Password As String
    Username = "el-apiuser"
    Password = "Roberts1951"
    Set xmlHttpRequest = New XMLhttp
    With xmlHttpRequest
        .Open "POST", URL & "&forcebasic=true", False, Username, Password
        .setRequestHeader "User-Agent", "Andrew P Smith, Language Centre, 07746412190, andrew.p.smith@warwick.ac.uk"
        .setRequestHeader "Content-Type", "application/x-www-form-urlencoded"
'        .setRequestHeader "If-Modified-Since:", "Tue, 11 Jul 2000 18:23:51 GMT"
        .Send
    End With
    'Waits for page to be received
    Do While xmlHttpRequest.readyState <> 4: DoEvents: Loop
    ' Return XML document
    GetXML = FixXML(xmlHttpRequest.responseText)
    ' Close objects
    Set xmlHttpRequest = Nothing
}
   
  * /
  
/*
   public function FixXML(xmlString) {
    // Fixes the XML returned from formbuilder to be valid XML
    Dim reg As RegExp
    Dim lReplaceString As String
    $reg = new Regnew  RegExp
    reg.Multiline = False
    'Matches on xml and "<filter>" header in xml
    reg.Pattern = "<\?xml[\s\S]*</filter>"
    lReplaceString = "<formsbuider-submissions>"
    FixXML = reg.Replace(xmlString, lReplaceString)
   } 
*/

/*
   

      
*/      
      
      
      
      
      
      
      
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*
   
   public function Logout($data){
      $this->session->set_userdata('UserStatus','');
      $data['UserStatus'] = '';
      $data['NextPage'] = 'public/login.php';
      return($data);
   }
   
   public function Login($data){
      $data['PageMode'] = 'Login';      
      $data['LoginMessage'] = 'Please login';
      if(!isset($data['UserEmail']) or $data['UserEmail'] ==''){
         $data['LoginMessage'] = 'Please enter your email address';
         return($data);
      }
      if(!isset($data['Password']) or $data['Password'] ==''){
         $data['LoginMessage'] = 'Please enter a password';
         return($data);
      }   
      $sql = "SELECT UserID, FirstName, Status, Password, Reminder, Account, "
        ."MD5(?) AS Entered FROM Users WHERE Email = ? ";
      $query = $this->db->query($sql, array($data['Password'], strtolower($data['UserEmail'])));
      $row = $query->row_array();
      if($row){
         if($row['Entered'] == $row['Password']){
            $this->session->set_userdata('UserID',$row['UserID']);
            $this->session->set_userdata('FirstName',$row['FirstName']);
            $this->session->set_userdata('UserStatus',$row['Status']);
            $this->session->set_userdata('Account',$row['Account']);
            $data['UserID'] = $row['UserID'];
            $data['FirstName'] = $row['FirstName'];
            $data['UserStatus'] = $row['Status'];
            $data['Account'] = $row['Account'];
            if(isset($data['UserID'])){ 
               if($data['UserStatus'] == "Guest"){
                  $data['NextPage'] = "guest/guesthome.php";
               } elseif($data['UserStatus'] == "Pending"){
                  $data['NextPage'] = "host/hosthome.php";
               } elseif($data['UserStatus'] == "Host"){
                  $data['NextPage'] = "host/hosthome.php";
               } elseif($data['UserStatus'] == "Admin"){
                  $data['NextPage'] = "admin/adminhome.php";
               }else {
                  $data['NextPage'] = "public/home.php";
               }
               $sql = "UPDATE Users SET LastVisited = '".date('Y-m-d H:i:s')."' " 
                  ."WHERE Email = '".strtolower($data['UserEmail'])."'";
               $this->db->query($sql);
            }
         }else{
            $data['LoginMessage'] = 'Password Incorrect';
            $data['Reminder'] = $row["Reminder"];
         }
      }else{
         $data['UserEmail'] = '';
         $data['LoginMessage'] = 'User not registered';
      }
      return($data);
   }
   
   public function Newuser($data){
//      $data['UserID'] = '';
//      $data['UserStatus'] = '';
//      $data['FirstName'] = '';
      $data['PageMode'] = 'NewUser';
      return($data);
   }
   
   public function Register($data){
      $data['NextPage'] = 'public/newuser';
      if($data['FirstName']=='' or $data['LastName']=='' 
         or $data['UserEmail']=='' or $data['Account']=='' 
         or $data['Password']=='' or $data['Confirm']==''
         or $data['Reminder']==''){
      $data['LoginMessage'] = 'Please complete all fields to register.';  
      }elseif(strpos($data["UserEmail"],"@") == 0 
         or strpos($data["UserEmail"],".") == 0 
         or strlen(trim($data["UserEmail"])) < 10){
         $data['LoginMessage'] = "Your email address does not appear to be valid";    
      }elseif($data["Password"] != $data["Confirm"]){ 
         $data['LoginMessage'] = "The passwords that you enter differ, please try again.";
      }else{
         $sql = "SELECT UserID, FirstName, Password, Status, Reminder, Account "
            ."FROM Users WHERE Email = ? ";
         $query = $this->db->query($sql, array(strtolower($data['UserEmail'])));
         $row = $query->row_array();
         if($row){
            $data['PageMode'] = "Login";
            $data['LoginMessage'] = "User already registered - Please Login";
            if(strtoupper($row["Password"]) == strtoupper($data['Password'])){ 
               $data['UserID'] = $row["UserID"];
               $data['GiveName'] = $row["FirstName"];
               $data['UserStatus'] = $row["Status"];
            }else{
               $data['Reminder'] = $row["Reminder"];
               $data['LoginMessage'] = "User already registered - Please Login";
            }
         }else{
            $sql = "INSERT INTO Users "  
               ."(FirstName,LastName,Email,Phone,Password,Reminder,Status,Account) "
               ."VALUES "
               ."   ('".$data['FirstName']."', "
               ."'".$data['LastName']."', "
               ."'".strtolower($data['UserEmail'])."', "
               ."'".$data['UserPhone']."', "
               ."MD5('".$data['Password']."'), "
               ."'".$data['Reminder']."', "
               ."'Register','".$data['Account']."') ";       
            $this->db->query($sql);
            $sql = "SELECT UserID FROM Users WHERE Email = ? "; 
            $query = $this->db->query($sql, array(strtolower($data['UserEmail'])));
            $row = $query->row_array();
            if($row){
               $data['ActivationCode'] = "0".((string)($row["UserID"]+132));
            }
            // Send Email
            $config['protocol'] = 'sendmail';
//            $config['protocol'] = 'smtp';
//            $config['smtp_host'] = 'auth.smtp.1and1.co.uk';
//            $config['smtp_user'] = 'smtp';
//            $config['smtp_pass'] = 'smtp';
            
            $config['mailtype'] = 'html';
            $this->email->initialize($config);
            $this->email->clear();
            $this->email->to($data['UserEmail']);
            $this->email->from('admin@cross-culturalcoaching.co.uk','Admin');
            $this->email->reply_to('admin@cross-culturalcoaching.co.uk');
            $this->email->subject("Your registration at Cross-Cultural Coaching"); 
            $emailtext = "Dear ".$data['FirstName'].",<br/><br/>\n\n" 
               ."Thank you for registering on-line.<br/><br/>\n\n"
               ."The details you supplied where;<br/><br/>\n\n"
               ."Name:     ".$data['FirstName']." ".$data['LastName']."<br/>\n"
               ."Email:    ".$data['UserEmail']."<br/>\n"
               ."Phone:    ".$data['UserPhone']."<br/>\n"
               ."Password: ".$data['Password']."<br/>\n"
               ."Reminder: ".$data['Reminder']."<br/>\n"
               ."Account:  ".$data['Account']."<br/><br/>\n\n"
               ."Please keep this email safe for your future record.<br/><br/>\n\n"
               ."In order to activate your registration please click on the link below and login.<br/><br/>\n\n"
               ."http://www.cross-culturalcoaching.co.uk/index.php/public/activate?AC="
               .$data['ActivationCode']."&UserEmail=".$data['UserEmail']."<br/><br/>\n\n" 
               ."If you have any difficulty with the login process please email "
               ."admin@cross-culturalcoaching.co.uk <br/><br/>\n\n"
               ."New resources are being added to the site all the time and you can now " 
               ."booking a coaching sessions on-line.<br/><br/>\n\n"
               ."Best regards,<br/><br/>\n\n" 
               ."Andrew<br/><br/>\n\nCross-Cultural Coaching";
            $this->email->message($emailtext);
            if($this->email->send()){;
//            echo $this->email->print_debugger();
               $data['NextPage'] = 'public/register.php';
            }else{
               $data['EmailError'] = $this->email->print_debugger();
            }
         }
         
      }  
      return($data);
   }
   
   public function Verify($data){
       return($data);
   }

   public function Activate($data){
      $data['PageMode'] = 'login';
      $data['UserID'] = $data['ActivationCode'] - 132;
      $data['UserEmail'] = strtolower($data['UserEmail']);
      $data['LoginMessage'] = "Sorry - Registration has encountered a problem";
      if($data['UserID']>0){
         $sql = "SELECT Account FROM Users "
            ."WHERE UserID = ? AND Email = ? ";
         $query = $this->db->query($sql, array($data['UserID'],strtolower($data['UserEmail'])));
         $row = $query->row_array();
         if($row){         
            $data['UserStatus'] = $row['Account'];
            $sql = "UPDATE Users SET Status = Account "  
               ."WHERE UserID = ? AND Email = ? ";         
            $this->db->query($sql,array($data['UserID'],$data['UserEmail']));  
            $data['PageMode'] = 'Login';
            $data['LoginMessage'] = "Your login has been activated";
            $data['NextPage'] = 'public/login.php';
            
         }
      }
      return($data);
   }
   
   
   public function VerifyEmail($data){
      $this->email->initialize();
      $this->email->clear();
      $this->email->$to($data['UserEmail']);
      $this->email->$from('admin@cross-culturalcoaching.co.uk','Admin');
      $this->email->$reply_to('admin@cross-culturalcoaching.co.uk');
      $this->email->$subject("Your registration at Cross-Cultural Coaching"); 
      $emailtext = "Dear ".$data['FirstName'].",<br/><br/>\n\n" 
         ."Thank you for registering on-line.<br/><br/>\n\n"
         ."The details you supplied where;<br/><br/>\n\n"
         ."Name:     ".$data['FirstName']." ".$data['LastName']."<br/>\n"
         ."Email:    ".$data['UserEmail']."<br/>\n"
         ."Phone:    ".$data['UserPhone']."<br/>\n"
         ."Password: ".$data['Password']."<br/>\n"
         ."Reminder: ".$data['Reminder']."<br/>\n"
         ."Account:  ".$data['Account']."<br/><br/>\n\n"
        ."Please keep this email safe for your future record.<br/><br/>\n\n"
         ."In order to activate your registration please click on the link below and login.<br/><br/>\n\n"
         ."http://www.cross-culturalcoaching.co.uk/index.php/public/activate?AC="
         .$data['ActivationCode']."&UserEmail=".$data['UserEmail']."<br/><br/>\n\n" 
         ."If you have any difficulty with the login process please email "
         ."admin@cross-culturalcoaching.co.uk <br/><br/>\n\n"
         ."New resources are being added to the site all the time and you can now " 
         ."booking a coaching sessions on-line.<br/><br/>\n\n"
         ."Best regards,<br/><br/>\n\n" 
         ."Andrew<br/><br/>\n\nCross-Cultural Coaching";
      $this->email->message($emailtext);
      $this->email->send();
      echo $this->email->print_debugger();
      /*
      $headers   = array();
      $headers[] = "MIME-Version: 1.0";
      $headers[] = "Content-type: text/HTML; charset=iso-8859-1";
      $headers[] = "From: CCC Admin <admin@cross-culturalcoaching.co.uk>";
      $headers[] = "Cc: Hosting Admin <aps@lifespeak.co.uk>";
      $headers[] = "Reply-To: CCC Admin <admin@cross-culturalcoaching.co.uk>";
      $headers[] = "Subject: {$subject}";
      $headers[] = "X-Mailer: PHP/".phpversion();
      $return = FALSE;
       
       
      try {
         mail($to, $subject, $emailtext, implode("\r\n", $headers));
         $return = TRUE;
      } catch (PDOException $e) {
         echo 'Failed to send email: '.$e->getMessage();
      }
      return($return);
   }
 */  
   
}
  