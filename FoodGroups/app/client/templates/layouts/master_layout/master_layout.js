Template.MasterLayout.events({
	"submit form.logout":function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go("home");
		window.location.reload();
	},
	"submit form.login":function(event){
		event.preventDefault();
		var email = event.target.email.value;
		var password = event.target.password.value;
		Meteor.loginWithPassword(email, password, function(err){
			if(err){
				toastr.error("We couldn't log you in");
			}
			else{
				toastr.success("You are now logged in");
				Router.go("dashboard");
			}
		});
	}
});

Template.MasterLayout.helpers({

});

Template.registerHelper("isRestaurantAdmin", function () {
	return Meteor.user().profile.role === "restaurantAdmin";
});
Template.registerHelper("isCompanyAdmin", function () {
	return Meteor.user().profile.role === "companyAdmin";
});

