// factories live here
angular.module("myApp.services", [])


.factory("Auth", function($firebaseAuth, $location) {
    var ref = new Firebase("https://gitlytest.firebaseio.com", "example3");
    //the following code redirects users to our homepage at login success.
 
    ref.authWithOAuthPopup('github', function () {
      console.log('User is currently being logged in.');
      $location.path('/home');
    });
    return $firebaseAuth(ref);
  });
	

	//factory for server requests
		//post and get request to database

	//factory for user authentication
