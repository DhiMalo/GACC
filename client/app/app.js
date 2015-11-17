//app module goes here!!!
angular.module("myApp", [
	"firebase",
	"ui.router",
	"myApp.services",
	"myApp.jqueryMessenger",
	"myApp.angularMessenger",
	"myApp.gruntMessenger",
	"myApp.mongoMessenger",
	"myApp.nodeMessenger",
	"myApp.pythonMessenger",
	"myApp.rubyMessenger",
	"myApp.auth"
])

.config(function($stateProvider, $urlRouterProvider){


	$stateProvider
		.state("login", {
			controller: "AuthController",
			url: "/login",
			templateUrl: "app/auth/loginAuth.html"
		})
		//messages
		// .state("messages", {
		// 	controller: "MessagesController",
		// 	url: "/messages",
		// 	templateUrl: "app/messages/messages.html"
		// })
		//need this for later, in order to have multiple views in one window
		// https://scotch.io/tutorials/angular-routing-using-ui-router
		.state("home", {
			url:"/home",
			views: {
				"": { templateUrl: "app/home/home.html" },
				//html and controller required for onlineUsers view
				"onlineUsers@home": { template: "online users column!!"},
				//html and controller required for chatrooms view
				"roomList@home": { templateUrl: "app/home/roomlist.html" },
				//html and controller required for userSearch view
				"userSearch@home": { template: "user search section lives here" }
			}
		})

		.state("jqueryChatroom", {
			url:"/jqueryChatroom",
			views: {
				"": { templateUrl: "app/chatrooms/jquery/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@jqueryChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@jqueryChatroom": { 
					templateUrl: "app/chatrooms/jquery/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@jqueryChatroom": { 
					templateUrl: "app/chatrooms/jquery/messenger/messenger.html",
					controller: "JqueryMsgController"
				}
			}
		})

		.state("nodeChatroom", {
			url:"/nodeChatroom",
			views: {
				"": { templateUrl: "app/chatrooms/nodejs/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@nodeChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@nodeChatroom": { 
					templateUrl: "app/chatrooms/nodejs/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@nodeChatroom": { 
					templateUrl: "app/chatrooms/nodejs/messenger/messenger.html",
					controller: "NodeMsgController"  
				}
			}
		})

		.state("angularChatroom", {
			url:"/angularChatroom",
			views: {
				"": { templateUrl: "app/chatrooms/angularjs/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@angularChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@angularChatroom": { 
					templateUrl: "app/chatrooms/angularjs/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@angularChatroom": { 
					templateUrl: "app/chatrooms/angularjs/messenger/messenger.html",
					controller: "AngularMsgController" 
				}
			}
		})

		.state("pythonChatroom", {
			url:"/pythonChatroom",
			views: {
				"": { templateUrl: "app/chatrooms/python/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@pythonChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@pythonChatroom": { 
					templateUrl: "app/chatrooms/python/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@pythonChatroom": { 
					templateUrl: "app/chatrooms/python/messenger/messenger.html",
					controller: "PythonMsgController"  
				}
			}
		})

		.state("mongodbChatroom", {
			url:"/mongodbChatroom",
			views: {
				"": { templateUrl: "app/chatrooms/mongodb/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@mongodbChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@mongodbChatroom": { 
					templateUrl: "app/chatrooms/mongodb/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@mongodbChatroom": { 
					templateUrl: "app/chatrooms/mongodb/messenger/messenger.html",
					controller: "MongoMsgController" 
				}
			}
		})

		.state("rubyOnRailsChatroom", {
			url:"/rubyOnRailsChatroom",
			views: {
				"": { templateUrl: "app/chatrooms/rubyOnRails/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@rubyOnRailsChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@rubyOnRailsChatroom": { 
					templateUrl: "app/chatrooms/rubyOnRails/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@rubyOnRailsChatroom": { 
					templateUrl: "app/chatrooms/rubyOnRails/messenger/messenger.html",
					controller: "RubyMsgController" 
				}
			}
		})

		.state("GruntChatroom", {
			url:"/GruntChatroom",
			views: {
				"": { templateUrl: "app/chatrooms/grunt/chatroom.html" },
				// html and controller required for onlineUsers view
				"onlineUsers@GruntChatroom": { template: "online users column!!"},
		// 		//html and controller required for chatrooms view
				"codeShare@GruntChatroom": { 
					templateUrl: "app/chatrooms/grunt/codeshare.html"
				},
		// 		//html and controller required for userSearch view
				"messages@GruntChatroom": { 
					templateUrl: "app/chatrooms/grunt/messenger/messenger.html",
					controller: "GruntMsgController"  
				}
			}
		});

	$urlRouterProvider.otherwise("/login");
});

//route manager (.config) also goes here


//.run also goes here (research that...has to do with authentication)
