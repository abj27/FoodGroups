/*****************************************************************************/
/* EditMenu: Event Handlers */
/*****************************************************************************/
Template.EditMenu.events({
});

/*****************************************************************************/
/* EditMenu: Helpers */
/*****************************************************************************/
Template.EditMenu.helpers({
	"MenuItems":function(){
		userId = Meteor.userId();
		return Restaurants.findOne({UserId:userId}).MenuItems;
		
	}
});

/*****************************************************************************/
/* EditMenu: Lifecycle Hooks */
/*****************************************************************************/
Template.EditMenu.onCreated(function () {
});

Template.EditMenu.onRendered(function () {
});

Template.EditMenu.onDestroyed(function () {
});
