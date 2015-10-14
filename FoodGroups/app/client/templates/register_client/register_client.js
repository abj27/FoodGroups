/*****************************************************************************/
/* RegisterClient: Event Handlers */
/*****************************************************************************/
Template.RegisterClient.events({
	"submit form.clientform":function(event){
		debugger 
		event.preventDefault();

		var email = event.target.email.value;
		var password= event.target.password.value;
		var companyId = event.target.company.value;
		var phoneNumber = event.target.phone.value;
		Accounts.createUser({
			email:email,
			password: password,
			profile:{
				role:"client",
				companyId: companyId
			}
		},
		function(err){
			if(err)	{
				toastr.error("We couldn't save the user.");
			}
			else{
				toastr.success("User Saved");
				Router.go("dashboard");
			}
		}
		);

	}
});

/*****************************************************************************/
/* RegisterClient: Helpers */
/*****************************************************************************/
Template.RegisterClient.helpers({
	"companies":function(){
		return Companies.find().fetch();
	}
});

/*****************************************************************************/
/* RegisterClient: Lifecycle Hooks */
/*****************************************************************************/
Template.RegisterClient.onCreated(function () {
});

Template.RegisterClient.onRendered(function () {
});

Template.RegisterClient.onDestroyed(function () {
});
