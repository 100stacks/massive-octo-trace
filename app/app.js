'use strict';

/**
 * @ngdoc overview
 * @description
 * # angluarFireSlakerApp
 *
 * Main module of the application.
 */

 angular
 	.module('angluarFireSlakerApp', [
 		'firebase',
 		'angular-md5',
 		'ui.router'
 		])
 	.config(function ($stateProvider, $urlRouterProvider) {
 		$stateProvider
 			.state('home', {
 				url: '/',
 				templateUrl: 'home/home.html' 
 			})
 		.state('login', {
 			url: '/login',
 			templateUrl: 'auth/login.html'
 		})
 		.state('register', {
 			url: '/register',
 			templateUrl: 'auth/register.html'
 		});

 		$urlRouterProvider.otherwise('/');

 	})
 	.constant('FirebaseUrl', 'https://sweltering-torch-6119.firebaseio.com/');