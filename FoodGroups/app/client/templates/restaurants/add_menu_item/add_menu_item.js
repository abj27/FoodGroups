/*****************************************************************************/
/* AddMenuItem: Event Handlers */
/*****************************************************************************/
Template.AddMenuItem.events({
	"submit .addMenuItem":function(event){
		var menuItem ={
			name : event.target.name.value,
			description : event.target.description.value,
			price : event.target.price.value
		} ;
		event.preventDefault();	
		var user = Meteor.user();
		var restaurant = Restaurants.findOne({UserId:user._id});
			Restaurants.update({ _id: restaurant._id  }	,{ $push: { MenuItems: menuItem  } }, {validate:false});
		Router.go("editMenu");
		

	}

});

/*****************************************************************************/
/* AddMenuItem: Helpers */
/*****************************************************************************/
Template.AddMenuItem.helpers({
});

/*****************************************************************************/
/* AddMenuItem: Lifecycle Hooks */
/*****************************************************************************/
Template.AddMenuItem.onCreated(function () {
});

Template.AddMenuItem.onRendered(function () {
});

Template.AddMenuItem.onDestroyed(function () {
});
