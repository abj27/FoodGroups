Router.configure({
	layoutTemplate:"MasterLayout"
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
});

Router.route('restaurants', {
  name: 'restaurants',
  controller: 'RestaurantsController',
});

Router.route('restaurants/add', {
  name: 'addRestaurant',
  controller: 'RestaurantsController',
  action:"add"
});

Router.route('restaurants/:id', {
  name: 'editRestaurant',
  controller: 'RestaurantsController',
  action:"edit"
});

Router.route('companies', {
  name: 'companies',
  controller: 'CompaniesController',
});

Router.route('companies/add', {
  name: 'addCompany',
  controller: 'CompaniesController',
  action:"add"
});

Router.route('companies/:id', {
  name: 'editCompany',
  controller: 'CompaniesController',
  action:"edit"
});

