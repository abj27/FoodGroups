Meteor.startup(function () {
	var users = [
	{name:"radmin1",email:"restaurant@example.com",roles:["restaurantAdmin"]},
	{name:"camdin1",email:"company@example.com",roles:['companyAdmin']}
	];

	_.each(users, function (user) {
		var id;
		id = Accounts.createUser({
			email: user.email,
			password: "apple1",
			profile: { name: user.name  }
		});
		if (user.roles.length > 0) {
			Roles.addUsersToRoles(id, user.roles);
		}
	});
});
