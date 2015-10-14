/*****************************************************************************/
/* CompanyAdmin: Event Handlers */
/*****************************************************************************/
Template.CompanyAdmin.events({
	"submit form":function(event){
		event.preventDefault();
		var email = event.target.email.value;
		var password = event.target.password.value;
		var company = {
			name : event.target.companyName.value,
			address: event.target.companyAddress.value,
			phone: event.target.companyPhone.value,
		};
		Accounts.createUser({
			email:email,
			password: password,
			profile:{
				role:"companyAdmin",
			}
		},function(err){
			if (err){
				toastr.error("We couldn't save the user");
			}
			else{
				var id = Meteor.userId();	
				company.UserId = id;
				Companies.insert(company);
				toastr.success("User saved successfully");
				Router.go("dashboard");
			}
		});
	}});

/*****************************************************************************/
/* CompanyAdmin: Helpers */
/*****************************************************************************/
Template.CompanyAdmin.helpers({
});

/*****************************************************************************/
/* CompanyAdmin: Lifecycle Hooks */
/*****************************************************************************/
Template.CompanyAdmin.onCreated(function () {
});

Template.CompanyAdmin.onRendered(function () {
});

Template.CompanyAdmin.onDestroyed(function () {
});
