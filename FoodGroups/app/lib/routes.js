Router.configure({
	layoutTemplate:"MasterLayout"
});
var OnBeforeActions;

OnBeforeActions = {
	loginRequired: function(pause) {
		if (!Meteor.userId()) {
			this.render('Home');
		}
		this.next();
	}

};


Router.onBeforeAction(OnBeforeActions.loginRequired, {
	except: ["registerClient",'registerRestaurantAdmin', 'registerCompanyAdmin']
});

Router.route('/', {
	name: 'home',
	controller: 'HomeController',
});

Router.route('dashboard', {
	path: '/dashboard',
	render: "dashboard"
});

Router.route('makeOrder', {
	path: '/makeOrder/:_restaurantId',
	render: "makeOrder",
	data: function(){
		return Restaurants.findOne({_id:this.params._restaurantId});
	}
});

Router.route('editMenu', {
	path: '/editMenu',
});

Router.route('/restaurants', {
	name: 'restaurants',
	controller: 'RestaurantsController',
});

Router.route("registerClient",{
	name:"registerClient"
});

Router.route('/restaurants/add', {
	name: 'addRestaurant',
	controller: 'RestaurantsController',
	action:"add"
});

Router.route('/restaurants/:id', {
	name: 'editRestaurant',
	controller: 'RestaurantsController',
	action:"edit"
});

Router.route('/register/restaurantAdmin', {
	name: 'registerRestaurantAdmin',
	controller: 'RestaurantsController',
	action:"registerAdmin"
});

Router.route('/register/companyAdmin', {
	name: 'registerCompanyAdmin',
	controller: 'CompaniesController',
	action:"registerAdmin"
});

Router.route('/companies', {
	name: 'companies',
	controller: 'CompaniesController',
});

Router.route('/companies/add', {
	name: 'addCompany',
	controller: 'CompaniesController',
	action:"add"
});

Router.route('/company/dashboard/', {
	name: 'companyDashboard',
	controller: 'CompaniesController',
	action:"dashboard"
});

Router.route('/restaurant/dashboard/', {
	name: 'restaurantDashboard',
	controller: 'restaurantsController',
	action:"dashboard"
});

Router.route('companies/:id', {
	name: 'editCompany',
	controller: 'CompaniesController',
	action:"edit"
});
Router.route('addMenuItem', {
	name: 'addMenuItem',
});

Router.route('checkOrder/:_id', {
	name: 'checkOrder',
	render: "checkOrder",
	data: function(){
		return Orders.findOne({_id:this.params._id});
	}
});

