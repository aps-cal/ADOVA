<?php
class OAuth_model extends CI_Model {
   private $oAuthObject; 
   private $signatures;
   private $request_token;
   
	public function __construct()	{
		$this->load->database();
		require 'oauthsimple.php';
      $this->oAuthObject = new OAuthSimple();
      //$this->signatures = array(
      //   'consumer_key' => 'troja.csv.warwick.ac.uk',
      //   'shared_secret' => '115bbb94ca0d2883a3233f53ec5b75d58e506dd6'
      //);
      
      $this->signatures = array(
         'consumer_key' => 'adova.lnx.warwick.ac.uk',
         'shared_secret' => '5d31a722766a752d62c6ad6c0482e5981f2fec37'
      );
    }

   public function Logout($data){
      $data = null;
      $data['UserName'] = '';
      $data['UserStatus'] = '';
      $this->session->set_userdata('UserName',null);
      $this->session->set_userdata('UserStatus',null);
      $oauthObject = new OAuthSimple();
      $signatures = array();
      $url = 'https://websignon.warwick.ac.uk/origin/logout?'
              .'target=http://aldb.warwick.ac.uk';
       header("Location:".$url);
       exit;
   }
   
   public function Login($data){
      // Effectively logout the user until validated
      

      $oauthObject = new OAuthSimple();
      // As this is an example, I am not doing any error checking to keep 
      // things simple.  Initialize the output in case we get stuck in
      // the first step.
      $output = 'Authorizing...';
      // Fill in your API key/consumer key you received when you registered your 
      // application with Google.
      $signatures = array( 'consumer_key'     => 'troja.csv.warwick.ac.uk',
         'shared_secret'    => '115bbb94ca0d2883a3233f53ec5b75d58e506dd6');
      // In step 3, a verifier will be submitted.  If it's not there, we must be
      // just starting out. Let's do step 1 then.
      $oauth_verifier = filter_input(INPUT_GET, 'oauth_verifier' ,FILTER_SANITIZE_SPECIAL_CHARS);
      if (!isset($_GET['oauth_verifier'])) {
      //if(!isset($oauth_verifier) or isnull($oauth_verifier)){
      //  if(TRUE){
         ///////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         // Step 1: Get a Request Token
         //
         // Get a temporary request token to facilitate the user authorization 
         // in step 2. We make a request to the OAuthGetRequestToken endpoint,
         // submitting the scope of the access we need (in this case, all the 
         // user's calendars) and also tell Google where to go once the token
         // authorization on their side is finished.
         //
         $result = $oauthObject->sign(array(
            'path'      =>'https://websignon.warwick.ac.uk/oauth/requestToken',
            'parameters'=> array(
               'scope'         => 'urn:websignon.warwick.ac.uk:sso:service',
               'oauth_callback'=> 'http://naba.mycalonline.org.uk/login/oauthlogin'),
            'signatures'=> $signatures));

         // The above object generates a simple URL that includes a signature, the 
         // needed parameters, and the web page that will handle our request.  I now
         // "load" that web page into a string variable.
         $ch = curl_init();
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
         curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
         $r = curl_exec($ch);
         curl_close($ch);

         // We parse the string for the request token and the matching token
         // secret. Again, I'm not handling any errors and just plough ahead 
         // assuming everything is hunky dory.
         $returned_items = array();
         parse_str($r, $returned_items);
         // echo var_dump($returned_items);
         $request_token = $returned_items['oauth_token'];
         // $request_token = $returned_items['Token'];
         $request_token_secret = $returned_items['oauth_token_secret'];

         // We will need the request token and secret after the authorization.
         // Google will forward the request token, but not the secret.
         // Set a cookie, so the secret will be available once we return to this page.
         setcookie("oauth_token_secret", $request_token_secret, time()+3600);
         setcookie("oauth_token", $request_token, time()+3600);
         //
         //////////////////////////////////////////////////////////////////////
    
         ///////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         // Step 2: Authorize the Request Token
         //
         // Generate a URL for an authorization request, then redirect to that URL
         // so the user can authorize our access request.  The user could also deny
         // the request, so don't forget to add something to handle that case.
         $result = $oauthObject->sign(array(
            'path'      =>'https://websignon.warwick.ac.uk/oauth/authorise',
            'parameters'=> array(
               'oauth_token' => $request_token),
            'signatures'=> $signatures));
         //echo var_dump($result);
         // See you in a sec in step 3.
         //    echo var_dump($result['signed_url']);
         //exit;
         header("Location:".$result['signed_url']);
         exit;
         //////////////////////////////////////////////////////////////////////
      } else {
         $oauth_verifier = $_GET['oauth_verifier'];
         // $oauth_verifier = filter_input(INPUT_GET, 'oauth_verifier' ,FILTER_SANITIZE_SPECIAL_CHARS);
         //   echo '$oauth_verifier'.'<br/>'; 
         //  echo $oauth_verifier.'<br/><br/>';
         
         ///////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         // Step 3: Exchange the Authorized Request Token for a Long-Term
         //         Access Token.
         //
         // We just returned from the user authorization process on Google's site.
         // The token returned is the same request token we got in step 1.  To 
         // sign this exchange request, we also need the request token secret that
         // we baked into a cookie earlier. 
         //

         // Fetch the cookie and amend our signature array with the request
         // token and secret.
         //  $signatures['oauth_secret'] = $_COOKIE['oauth_token_secret'];
         //  $signatures['oauth_token'] = $_GET['oauth_token'];
         $signatures['oauth_secret'] = filter_input(INPUT_COOKIE, 'oauth_token_secret' ,FILTER_SANITIZE_SPECIAL_CHARS);
         //    $signatures['oauth_token'] = filter_input(INPUT_GET, 'oauth_token' ,FILTER_SANITIZE_SPECIAL_CHARS);
         $signatures['oauth_token'] = filter_input(INPUT_COOKIE, 'oauth_token' ,FILTER_SANITIZE_SPECIAL_CHARS);
         //    echo '$signatures["$signatures"]'.'<br/>'; 
         //    echo var_dump($signatures['oauth_token']).'<br/><br/>';
         //$oauth_verifier = filter_input(INPUT_GET, 'oauth_verifier' ,FILTER_SANITIZE_SPECIAL_CHARS);
         //   $oauth_token = filter_input(INPUT_GET, 'oauth_token' ,FILTER_SANITIZE_SPECIAL_CHARS);
         //   echo '$oauth_token'.'<br/>'; 
         //   echo var_dump($oauth_token).'<br/><br/>';
         //    echo var_dump($signatures); 
         // Build the request-URL...
         $result = $oauthObject->sign(array(
            'path'      => 'https://websignon.warwick.ac.uk/oauth/accessToken',
            'parameters'=> array(
               'oauth_verifier' => $oauth_verifier,
               'oauth_token'    => $signatures['oauth_token']),
            'signatures'=> $signatures));
         //    echo '$result = '.var_dump($result).'<br/><br/>';
         // ... and grab the resulting string again. 
         $ch = curl_init();
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
         curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
         $r = curl_exec($ch);
         $returned_items = array();
         parse_str($r, $returned_items);    
   
         if(isset($returned_items['oauth_token']) AND isset($returned_items['oauth_token_secret']) ){
            // We can use this long-term access token
            // but we can now bypass the authorization process and use the long-term
            // access token you hopefully stored somewhere permanently.
            $access_token = $returned_items['oauth_token'];
            $access_token_secret = $returned_items['oauth_token_secret'];
            $signatures['oauth_token'] = $access_token;
            $signatures['oauth_secret'] = $access_token_secret;
            $this->session->set_userdata('access_token',$access_token);
            $this->session->set_userdata('access_secret',$access_token_secret);
//            $output = "<p>Access Token: $access_token<BR>
//               Token Secret: $access_token_secret</p>";
//            echo $output;
         } else {
 //           echo 'No values returned</br>';
 //           echo var_dump($returned_items);
            return($data);
         }
         //////////////////////////////////////////////////////////////////////
    
         //$this->signatures['oauth_token'] = $this->session->userdata('access_token');
         //echo 'oAuth Access'.$this->session->userdata('access_token');
         //$this->signatures['oauth_secret'] = $this->session->userdata('access_secret');
         //      echo var_dump($this->signatures);
         // Reset object before making last call
         $oauthObject->reset(); 
         $oauthObject->setAction('POST'); 
         // Get the user attributes from Warwick SSO
         $result = $oauthObject->sign(array(
            'path'      =>'https://websignon.warwick.ac.uk/oauth/authenticate/attributes',
            'parameters'=> array(
               'oauth_token' => $signatures['oauth_token']),
            'signatures'=> $signatures));
//         echo '<p>SIGNED URL = '.$result['signed_url'].'<br/></p>';
         $ch = curl_init();
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
         curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
         //curl_setopt($ch, CURLOPT_URL,'https://websignon.warwick.ac.uk/oauth/authenticate/attributes');
         curl_setopt($ch, CURLOPT_POST, count($result['parameters']));
         curl_setopt($ch, CURLOPT_POSTFIELDS, $result['parameters']);
         $r = curl_exec($ch);
         $returned_items = array();
         parse_str(str_replace("\n", "&", $r), $returned_items);      
         // Modified function to correct error in source
//         $str = str_replace(" ", "&", $str);
//      $str = parse_str($str, $array);
//         $this->str_parse($r, $returned_items);
         //parse_str($r, $returned_items);      
         curl_close($ch);
//         echo var_dump($r).'<br/>'.'<br/>';
//         echo var_dump($returned_items).'<br/>'.'<br/>';
         $data['UserStatus'] = 'Student';
            
         if(isset($returned_items['warwickitsclass'])){
            $data['UserName'] = $returned_items['user'];
            $data['UserStatus'] = $returned_items['warwickitsclass'];
            $this->session->set_userdata('UserName',$returned_items['user']);
            $this->session->set_userdata('UserStatus',$returned_items['warwickitsclass']);
            // Attributes available from websignon - added to temporary $data array - 
            $data['id'] = $returned_items['id']; // 0874367
            $data['Username'] = $returned_items['user']; // elsiai
            $data['name'] = $returned_items['name']; // Andrew Smith
            $data['FirstName'] = $returned_items['firstname'];  // Andrew
            $data['LastName'] = $returned_items['lastname']; //Smith
            $data['UserEmail'] = $returned_items['email'];  // Andrew.P.Smith@warwick.ac.uk
            $data['deptcode'] = $returned_items['deptcode']; // ET
            $data['deptshort'] = $returned_items['deptshort'];  // CAL
            $data['dept'] = $returned_items['dept']; // Centre for Applied Lingustics 
            $data['staff'] = $returned_items['staff'];  // true
            $data['student'] = $returned_items['student']; // false
            $data['warwickathens'] = $returned_items['warwickathens'];   // Y
            $data['passwordexpired'] = $returned_items['passwordexpired']; // FALSE
            $data['warwickitsclass'] = $returned_items['warwickitsclass']; // Staff
            //$data['warwickyearofstudy'] = $returned_items['warwickyearofstudy']; // 0
            $data['warwickteachingstaff'] = $returned_items['warwickteachingstaff']; // Y 
            if($data['deptcode']=='ET' and $data['warwickitsclass'] == 'Staff'){
               $data['UserStatus'] = 'Tutor';
            } else if($data['warwickitsclass'] == 'Staff'){
               $data['UserStatus'] = 'Staff';
            } else {
               $data['UserStatus'] = 'Student';
            }
            //  Enter Staff into local users database 
            $sql = "SELECT UserID, UserName, FirstName, LastName, Status "
               ."FROM users WHERE UserName = ? ";
            $query = $this->db->query($sql, array($data['UserName']));
            $row = $query->row_array();
            if($row){
               $sql = "UPDATE users SET LastVisited = '".date('Y-m-d H:i:s')."' " 
                  ."WHERE Email = '".strtolower($data['UserEmail'])."'";
            } else {
               $sql = "INSERT INTO users (UserName, Email, FirstName, LastName, Status, LastVisited) "
                  ." values ('".$data['Username']."','".$data['UserEmail']."','"
                  .$data['FirstName']."','".$data['LastName']."','"
                  .$data['UserStatus']."','".date('Y-m-d H:i:s')."')";
            } 
            $this->db->query($sql);
            $sql = "SELECT UserID, UserName, FirstName, LastName, Status, Account "
               ."FROM users WHERE UserName = ? ";
            $query = $this->db->query($sql, array($data['UserName']));
            $row = $query->row_array();
            if($row){
//               $this->db->query($sql);
               $this->session->set_userdata('UserID',$row['UserID']);
               $this->session->set_userdata('UserName',$row['UserName']);
               $this->session->set_userdata('FirstName',$row['FirstName']);
               $this->session->set_userdata('LastName',$row['LastName']);
               $this->session->set_userdata('UserStatus',$row['Status']);
               $this->session->set_userdata('Account',$row['Account']);
               $data['UserID'] = $row['UserID'];
               $data['UserName'] = $row['UserName'];
               $data['FirstName'] = $row['FirstName'];
               $data['LastName'] = $row['LastName'];
               $data['UserStatus'] = $row['Status'];
               $data['Account'] = $row['Account'];
               if(isset($data['UserID'])){ 
                  if($data['UserStatus'] == "Tutor"){
                     $data['NextPage'] = "/ins/registers";
                  } elseif($data['UserStatus'] == "Manager"){
                     $data['NextPage'] = "/ins/classes";
                  } elseif($data['UserStatus'] == "Admin"){
                     $data['NextPage'] = "/ins/students";
                  }else {
                     $data['NextPage'] = "/ins/home.php";
                  }
               }
            }
//          echo var_dump($data);
//          exit;
         } 
         $this->session->set_userdata('UserStatus',$data['UserStatus']);
      }
      return($data);
   }
   
	public function old_Login($data){
		// In step 3, a verifier will be submitted but ....
		// if it's not there, we must be just starting out. Let's do step 1 then.
//      echo '<p>oauth_verifier = ' .$_GET['oauth_verifier'].'</p>';
      $oauth_token = filter_input(INPUT_GET, 'oauth_token' ,FILTER_SANITIZE_SPECIAL_CHARS);
      $oauth_token_secret = filter_input(INPUT_COOKIE, 'oauth_token_secret', FILTER_SANITIZE_SPECIAL_CHARS);
//    echo '$oauth_token'.$oauth_token;
//      echo '$oauth_verifier'.$oauth_verifier;
//      echo '$oauth_token_secret'.$oauth_token_secret;
    	$oauth_verifier = filter_input(INPUT_GET, 'oauth_verifier',FILTER_SANITIZE_SPECIAL_CHARS);
      if (isset($oauth_verifier) and $oauth_verifier<>''
          /*isset($oauth_token) and $oauth_token<>''and 
          and isset($oauth_token_secret) and $oauth_token_secret<>'' */) {
			$data = $this->ExchangeToken($data);
      } else {
		   $data = $this->GetRequestToken($data);
 			$data = $this->AuthorizeToken($data);
		}
/*      
      if (!isset($_GET['oauth_verifier'])) {
			$data = $this->GetRequestToken($data);
 			$data = $this->AuthorizeToken($data);
		} else {
			$data = $this->ExchangeToken($data);
		}

 */
		return($data);
	}
	
	public function GetRequestToken($data){
   //   echo '<h2>GetRequestToken</h2>';
      //$data['consumer_key'] = 'troja.csv.warwick.ac.uk';
      //$data['shared_secret'] = '115bbb94ca0d2883a3233f53ec5b75d58e506dd6';
    //  $oAuthObject = new OAuthSimple();
	//	$signatures = array(
    //     'consumer_key' => 'troja.csv.warwick.ac.uk',
     //    'shared_secret' => '115bbb94ca0d2883a3233f53ec5b75d58e506dd6'
     // );
		// Step 1: Get a Request Token
		// Get a temporary request token to facilitate the user authorization 
		// in step 2. We make a request to the OAuthGetRequestToken endpoint,
		// submitting the scope of the access we need (in this case, all the 
		// user's calendars) and also tell Google where to go once the token
		// authorization on their side is finished.
		$result = $this->oAuthObject->sign(array(
         'path' =>'https://websignon.warwick.ac.uk/oauth/requestToken',
        	'parameters' => array(
        	'scope' => 'urn:websignon.warwick.ac.uk:sso:service',
			'oauth_callback'=> 'http://naba.mycalonline.org.uk/login/oauthlogin'),
			'signatures'=> $this->signatures)
      );
		// The above object generates a simple URL that includes a signature, the 
		 // needed parameters, and the web page that will handle our request.  I now
		// "load" that web page into a string variable.
	//	echo '<p>SIGNED URL = '.$result['signed_url'].'<br/><p>';
      $ch = curl_init(); 
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
		$r = curl_exec($ch);
		curl_close($ch);
 		// We parse the string for the request token and the matching token
		// secret. Again, I'm not handling any errors and just plough ahead 
		// assuming everything is hunky dory.
      $returned_items = array();
  		parse_str($r, $returned_items);
  //    echo var_dump($returned_items);
  		$this->request_token = $returned_items['oauth_token'];
    	$request_token_secret = $returned_items['oauth_token_secret'];

    	// We will need the request token and secret after the authorization.
    	// Websignon will forward the request token, but not the secret.
    	// Set a cookie, so the secret will be available once we return to this page.
    	setcookie("oauth_token_secret", $request_token_secret, time()+3600);
		return($data);
	}

	public function AuthorizeToken($data){
  //    echo '<h2>AuthorizeToken</h2>';
      // Step 2: Authorize the Request Token
    	//
    	// Generate a URL for an authorization request, then redirect to that URL
    	// so the user can authorize our access request.  The user could also deny
    	// the request, so don't forget to add something to handle that case.
      $result = $this->oAuthObject->sign(array(
			'path'      =>'https://websignon.warwick.ac.uk/oauth/authorise',
			'parameters'=> array(
            'oauth_token' => $this->request_token, 
            'signatures'=> $this->signatures)
         )
      );
   //   echo var_dump($this->signatures);
      $signed_url = $result[signed_url];
    	// See you in a sec in step 3.
    	header("Location:".$signed_url);
    		exit;
		return($data);
	}

	public function ExchangeToken($data){
//      echo '<h2>ExchangeToken</h2>';
      // Step 3: Exchange the Authorized Request Token for a Long-Term Access Token.
		
    	// We just returned from the user authorization process.
    	// The token returned is the same request token we got in step 1.  To 
    	// sign this exchange request, we also need the request token secret that
    	// we baked into a cookie earlier. 
      // 
  		// Fetch the cookie and amend our signature array with the request
  		// token and secret.
      $oauth_token = filter_input(INPUT_POST, 'oauth_token' ,FILTER_SANITIZE_SPECIAL_CHARS);
    	$oauth_verifier = filter_input(INPUT_POST, 'oauth_verifier',FILTER_SANITIZE_SPECIAL_CHARS);
      $oauth_token_secret = filter_input(INPUT_COOKIE, 'oauth_token_secret', FILTER_SANITIZE_SPECIAL_CHARS);
      if(isset($oauth_token_secret) AND isset($oauth_token) ){
         $this->signatures['oauth_secret'] = $oauth_token_secret;
         $this->signatures['oauth_token'] = $oauth_token;
         //throw exception ('oAuth values not set'); 
         //$Message = 'oAuth values not set';
      }
      echo '$oauth_token'.$oauth_token;
      echo '$oauth_verifier'.$oauth_verifier;
      echo '$oauth_token_secret'.$oauth_token_secret;
      //echo var_dump($this->signatures);   
 		// Build the request-URL...     
      $result = $this->oAuthObject->sign(array(
     		'path'      => 'https://websignon.warwick.ac.uk/oauth/accessToken',
     		'parameters'=> array(
            'consumer_key' => 'troja.csv.warwick.ac.uk',
            'oauth_verifier' => $oauth_verifier),
     		'signatures' => $this->signatures)
      );
      // 'oauth_token'    => $_GET['oauth_token']),
      if(isset($oauth_verifier) AND isset($oauth_token) ){
//         echo '<p>oauth_verifier => '.$_GET['oauth_verifier'].'</p>';
//         echo '<p>oauth_token => '.$_GET['oauth_token'].'</p>';
      } else {
//         echo var_dump($this->signatures);
      }
  		// ... and grab the resulting string again. 
//      echo '<p>SIGNED URL = '.$result['signed_url'].'<br/></p>';
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      //curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
      curl_setopt($ch, CURLOPT_POST, count($result['signed_url']));
      curl_setopt($ch, CURLOPT_POSTFIELDS, $result['signed_url']);
      // curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
      $r = curl_exec($ch);

      // Voila, we've got a long-term access token.
      $returned_items = array();
      parse_str($r, $returned_items);   
      
      if(isset($returned_items['oauth_token']) AND isset($returned_items['oauth_token_secret']) ){
         $this->session->set_userdata('access_token',$returned_items['oauth_token']);
         $this->session->set_userdata('access_secret',$returned_items['oauth_token_secret']);
      } else {
//         echo 'No values returned</br>';
 //        echo var_dump($returned_items);
      }
         
//      $data['access_token'] = 
//         (isset($returned_items['oauth_token'])?$returned_items['oauth_token']:'');
//      $data['access_secret'] = 
//         (isset($returned_items['oauth_token_secret'])?$returned_items['oauth_token_secret']:'');
      // We can use this long-term access token to request Google API data,
      // for example, a list of calendars. 
      // All API data requests will have to be signed just as before,
      // but we can now bypass the authorization process and use the long-term
      // access token you hopefully stored somewhere permanently.
      $this->signatures['oauth_token'] = $this->session->userdata('access_token');
      echo 'oAuth Access'.$this->session->userdata('access_token');
      $this->signatures['oauth_secret'] = $this->session->userdata('access_secret');
//      echo var_dump($this->signatures);
      // Reset object before making last call
      $this->oAuthObject->reset(); 
      $this->oAuthObject->setAction('POST'); 
      // Get the user attributes from Warwick SSO
/*      
      $result = $this->oAuthObject->sign(array(
         'path'      =>'https://websignon.warwick.ac.uk/oauth/authenticate/attributes',
         'parameters'=> array(
             'oauth_token' => $this->signatures['oauth_token']),
         'signatures'=> $this->signatures));
      // Retrieve user data from results
      // echo var_dump($this->signatures);
      echo '<p>SIGNED URL = '.$result['signed_url'].'<br/></p>';
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
      curl_setopt($ch, CURLOPT_POST, count($result['parameters']));
      curl_setopt($ch, CURLOPT_POSTFIELDS, $result['parameters']);
*/      
      $result = $this->oAuthObject->sign(array(
         'path'      =>'https://websignon.warwick.ac.uk/oauth/authenticate/attributes',
         'parameters'=> array(
            'oauth_token' => $this->signatures['oauth_token']),
         'signatures'=> $this->signatures));
      echo '<p>SIGNED URL = '.$result['signed_url'].'<br/></p>';
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
//      curl_setopt($ch, CURLOPT_URL,'https://websignon.warwick.ac.uk/oauth/authenticate/attributes');
      curl_setopt($ch, CURLOPT_POST, count($result['parameters']));
      curl_setopt($ch, CURLOPT_POSTFIELDS, $result['parameters']);
      $r = curl_exec($ch);
      $returned_items = array();
      // Modified function to correct error in source
      $this->str_parse($r, $returned_items);
      //parse_str($r, $returned_items);      
      curl_close($ch);
      echo var_dump($returned_items);
      $data['UserStatus'] = 'Student';
      
      
      
      if(isset($returned_items['warwickitsclass']) and $returned_items['warwickitsclass'] = 'Staff'){
         $data['UserName'] = $returned_items['user'];
         $data['UserStatus'] = $returned_items['warwickitsclass'];
         $this->session->set_userdata('UserName',$returned_items['user']);
         $this->session->set_userdata('UserStatus',$returned_items['warwickitsclass']);
         // Attributes available from websignon - added to temporary $data array - 
         $data['id'] = $returned_items['id']; // 0874367
         $data['user'] = $returned_items['user']; // elsiai
         $data['name'] = $returned_items['name']; // Andrew Smith
         $data['firstname'] = $returned_items['firstname'];  // Andrew
         $data['lastname'] = $returned_items['lastname']; //Smith
         $data['email'] = $returned_items['email'];  // Andrew.P.Smith@warwick.ac.uk
         $data['deptcode'] = $returned_items['deptcode']; // ET
         $data['deptshort'] = $returned_items['deptshort'];  // CAL
         $data['dept'] = $returned_items['dept']; // Centre for Applied Lingustics 
         $data['staff'] = $returned_items['staff'];  // true
         $data['student'] = $returned_items['student']; // false
         $data['warwickathens'] = $returned_items['warwickathens'];   // Y
         $data['passwordexpired'] = $returned_items['passwordexpired']; // FALSE
         $data['warwickitsclass'] = $returned_items['warwickitsclass']; // Staff
         $data['warwickyearofstudy'] = $returned_items['warwickyearofstudy']; // 0
         $data['warwickteachingstaff'] = $returned_items['warwickteachingstaff']; // Y 
         
         if($data['staff'] and !$data['student'] and $data['deptcode'] == 'ET'){
            $data['UserStatus'] = 'Tutor';
         } else {
            $data['UserStatus'] = 'Student';
         }
      
         echo var_dump($data);
      } 
/*
      $output = "<p>Access Token:".$data['access_token']."<BR>Token Secret: "
            .$data['access_token_secret']."</p>"
            ."<p><a href='".$result['signed_url']
            ."'>".$result['signed_url']."</a></p>";
    echo $output;
*/
      return($data);
	}

   function str_parse($str, $array){
      //$str = "logindisabled=FALSE urn:mace:dir:attribute-def:eduPersonTargetedID=5ur35xs3z9lz8v6o2jjq0oqs1 warwickitsclass=Staff urn:websignon:passwordlastchanged=2013-06-25T12:29:32.589+01:00 warwickyearofstudy=0 lastname=Smith id=0874367 warwickteachingstaff=Y staff=true urn:websignon:usertype=Staff urn:mace:dir:attribute-def:eduPersonScopedAffiliation=member@warwick.ac.uk student=false deptcode=ET name=Andrew Smith warwickukfedgroup=Faculty warwickathens=Y dept=Centre for Applied Linguistics dn=CN=elsiai,OU=Staff,OU=EL,OU=WARWICK,DC=ads,DC=warwick,DC=ac,DC=uk member=true deptshort=CAL urn:websignon:usersource=WarwickADS urn:mace:dir:attribute-def:eduPersonAffiliation=member firstname=Andrew returnType=4 urn:websignon:timestamp=2013-06-29T09:42:00.248+01:00 email=Andrew.P.Smith@warwick.ac.uk warwickattendancemode=P passwordexpired=FALSE user=elsiai warwickukfedmember=Y";
      $str = str_replace(" ", "&", $str);
      $str = parse_str($str, $array);
      return($array);
   }
   
   
}