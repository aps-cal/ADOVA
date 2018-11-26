<?php
class OAuth_model extends CI_Model {
   private $oAuthObject; 
   private $data;
   private $output;
   private $signatures;
   
	public function __construct()	{
		$this->load->database();
		//$data = array();
     // $this->load->model('oauthsimple_model');
		require 'oauthsimple.php';
      
      $data['oAuthObject'] = new OAuthSimple();
		$data['output'] = 'Authorizing...';
      $data['consumer_key'] = 'troja.csv.warwick.ac.uk';
      $data['shared_secret'] = '115bbb94ca0d2883a3233f53ec5b75d58e506dd6';
		$data['signatures'] = array( 
          'consumer_key' => $data['consumer_key'],
          'shared_secret' => $data['shared_secret']);
		
	}

	public function Login($data){
		// In step 3, a verifier will be submitted but ....
		// if it's not there, we must be just starting out. Let's do step 1 then.
      
      //TESTING 
      //setcookie("oauth_token_secret",'', time()-1);
		
      
      
      if (!isset($_GET['oauth_verifier'])) {
			$data = $this->GetRequestToken($data);
 			$data = $this->AuthorizeToken($data);
		} else {
			$data = $this->ExchangeToken($data);
		}
		return($data);
	}
	
	public function GetRequestToken($data){
      $data['oAuthObject'] = new OAuthSimple();
//		$data['output'] = 'Authorizing...';
		$data['signatures'] = array( 'consumer_key'     => 'troja.csv.warwick.ac.uk',
                     'shared_secret'    => '115bbb94ca0d2883a3233f53ec5b75d58e506dd6');
//      $data['signatures'] = array( 'consumer_key'     => 'naba.mycalonline.org.uk',
//                     'shared_secret'    => '115bbb94ca0d2883a3233f53ec5b75d58e506dd6');
      
		// Step 1: Get a Request Token
	
		// Get a temporary request token to facilitate the user authorization 
		// in step 2. We make a request to the OAuthGetRequestToken endpoint,
		// submitting the scope of the access we need (in this case, all the 
		// user's calendars) and also tell Google where to go once the token
		// authorization on their side is finished.
	//'scope' => 'urn:blogs.warwick.ac.uk:service+urn:start.warwick.ac.uk:',
   //   'scope' => 'urn:www2.warwick.ac.uk:sitebuilder2:read:service',
		$result = $data['oAuthObject']->sign(array(
       			'path'      =>'https://websignon.warwick.ac.uk/oauth/requestToken',
        		'parameters'=> array(
        		'scope' => 'urn:websignon.warwick.ac.uk:sso:service',
			'oauth_callback'=> 'http://naba.mycalonline.org.uk/login/oauthlogin'),
			'signatures'=> $data['signatures'])
      );
/*
		$result = $oauthObject->sign(array(
       			'path'      =>'https://www.google.com/accounts/OAuthGetRequestToken',
        		'parameters'=> array(
           		'scope'         => 'http://www.google.com/calendar/feeds/',
			'oauth_callback'=> 'http://bitbutton.com/oauthsimple/example.php'),
			'signatures'=> $signatures)
		);
*/
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
    		$data['request_token'] = $returned_items['oauth_token'];
    		$data['request_token_secret'] = $returned_items['oauth_token_secret'];

    		// We will need the request token and secret after the authorization.
    		// Websignon will forward the request token, but not the secret.
    		// Set a cookie, so the secret will be available once we return to this page.
    		setcookie("oauth_token_secret", $data['request_token_secret'], time()+3600);
		return($data);
	}

	public function AuthorizeToken($data){
    		// Step 2: Authorize the Request Token
    		//
    		// Generate a URL for an authorization request, then redirect to that URL
    		// so the user can authorize our access request.  The user could also deny
    		// the request, so don't forget to add something to handle that case.
      /*
      $result = $data['oAuthObject']->sign(array(
			'path'      =>'https://www.google.com/accounts/OAuthAuthorizeToken',
			'parameters'=> array(
			'oauth_token' => $request_token), 
			'signatures'=> $signatures)
		);
      */
       $result = $data['oAuthObject']->sign(array(
			'path'      =>'https://websignon.warwick.ac.uk/oauth/authorise',
			'parameters'=> array(
			'oauth_token' => $data['request_token']), 
			'signatures'=> $data['signatures'])
       );
       $data['signed_url'] = $result[signed_url];
    	// See you in a sec in step 3.
    	 header("Location:".$data['signed_url']);
    		exit;
		return($data);
	}

	public function ExchangeToken($data){
      // Step 3: Exchange the Authorized Request Token for a Long-Term Access Token.
		
    	// We just returned from the user authorization process on Google's site.
    	// The token returned is the same request token we got in step 1.  To 
    	// sign this exchange request, we also need the request token secret that
    	// we baked into a cookie earlier. 
  		// Fetch the cookie and amend our signature array with the request
  		// token and secret.
  		$signatures['oauth_token'] = $_GET['oauth_token'];
      $signatures['oauth_secret'] = $_COOKIE['oauth_token_secret'];
      $signatures['consumer_key'] = $data['consumer_key'];
      $signatures['shared_secret'] = $data['shared_secret'];
  	//	$data['oAuthObject'] = new OAuthSimple();
   //   $data['signatures']['oauth_secret'] =  $_COOKIE['oauth_token_secret'];
   //   $data['signatures']['oauth_token'] = $_GET['oauth_token'];
         
   //      $data['signatures']['consumer_key'] = 'troja.csv.warwick.ac.uk';
   //      $data['signatures']['shared_secret'] = '115bbb94ca0d2883a3233f53ec5b75d58e506dd6';
         
   //      $data['oauth_verifier'] = $_GET['oauth_verifier'];
   //      $data['oauth_token'] = $_GET['oauth_token'];
    		// Build the request-URL...
    	$result = $data['oAuthObject']->sign(array(
     		'path'      => 'https://websignon.warwick.ac.uk/oauth/accessToken',
     		'parameters'=> array(
        		'oauth_verifier' => $_GET['oauth_verifier'],
        		'oauth_token'    => $_GET['oauth_token']),
     		'signatures'=> $data['signatures']));
  		// ... and grab the resulting string again. 
  		$ch = curl_init();
  		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  		curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
  		$r = curl_exec($ch);
  		// Voila, we've got a long-term access token.
      $returned_items = array();
      parse_str($r, $returned_items);        
      $signatures['oauth_token'] = $returned_items['oauth_token'];
      $signatures['oauth_secret'] = $returned_items['oauth_token_secret'];
      // Get the user attributes from Warwick SSO
      $result = $data['oAuthObject']->sign(array(
         'path'      =>'https://websignon.warwick.ac.uk/oauth/authenticate/attributes',
         'parameters'=> array(),
         'signatures'=> $signatures));
      // Retrieve user data from results
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_URL, $result['signed_url']);
      $r = curl_exec($ch);
      $returned_items = array();
      parse_str($r, $returned_items);        
      echo var_dump($returned_items);
      $data['oAuthObject']->reset(); 
      curl_close($ch);
    
    
/*    $output = "<p>Access Token:".$data['access_token']."<BR>Token Secret: "
            .$data['access_token_secret']."</p>"
            ."<p><a href='".$result['signed_url']
            ."'>".$result['signed_url']."</a></p>";
*/
   //setcookie("oauth_userlogin", $data['request_token_secret'], time()+3600);
   //setcookie("oauth_username", $data['request_token_secret'], time()+3600);
   // echo $output;

     
	}
}