/*****************************************************************************/
/* RestaurantAdmin: Event Handlers */
/*****************************************************************************/
Template.RestaurantAdmin.events({
	"submit form":function(event){
		event.preventDefault();
		var email = event.target.email.value;
		var password = event.target.password.value;
		var restaurant ={
			Name : event.target.restaurantName.value,
			Address: event.target.restaurantAddress.value,
			Phone: event.target.restaurantPhone.value
		};
		Accounts.createUser({
			email:email,
			password: password,
			profile:{
				role:"restaurantAdmin",
			}
		},function(err){
				if (err){
					toastr.error("We couldn't save the user");
				}
				else{
					var id = Meteor.userId();	
					restaurant.UserId = id;
					Restaurants.insert(restaurant);
					toastr.success("User saved successfully");
					Router.go("dashboard");
				}
		});
	}
});

/*****************************************************************************/
/* RestaurantAdmin: Helpers */
/*****************************************************************************/
Template.RestaurantAdmin.helpers({
});

/*****************************************************************************/
/* RestaurantAdmin: Lifecycle Hooks */
/*****************************************************************************/
Template.RestaurantAdmin.onCreated(function () {
});

Template.RestaurantAdmin.onRendered(function () {
});

Template.RestaurantAdmin.onDestroyed(function () {
});
