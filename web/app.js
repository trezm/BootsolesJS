require('angular/angular');
require('angular-route/angular-route');

var app = angular
    .module('BootsolesApp', [
			    'ngRoute'
			    ])
    .config(
	    [
	     '$routeProvider',
	     function($routeProvider) {
		 // Specify routes to load our partials upon the given URLs
		 $routeProvider.when('/', {
			 templateUrl: 'landing_page/landing_page.html'
		     });
		 $routeProvider.otherwise({
			 redirectTo: '/'
			     });
	     }
	     ]
	    );

require('./menu_bar/menu_bar_controller')(app);
require('./footer/footer_controller')(app);