//
// Auth Factory
//
// 1. Inject $firebaseAuth and FirebaseUrl into our Auth factory. 
// 2. Create a Firebase reference to our Firebase with var ref = new Firebase(FirebaseUrl);
// 3. Pass the Firebase reference to the $firebaseAuth service, and have our factory return it.

angular.module('angluarFireSlakerApp')
	.factory('Auth', function($firebaseAuth, FirebaseUrl) {
		var ref = new Firebase(FirebaseUrl);
		var auth = $firebaseAuth(ref);

		return auth;
	})
