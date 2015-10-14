/*****************************************************************************/
/* Dashboard: Event Handlers */
/*****************************************************************************/
Template.Dashboard.events({
});

/*****************************************************************************/
/* Dashboard: Helpers */
/*****************************************************************************/
Template.Dashboard.helpers({
	companyName:function(){
		var companyId= Meteor.user().profile.companyId;
		return companyId && Companies.findOne({_id:companyId}).name;
	},
	pendingOrders:function(){
		var userId = Meteor.userId();
	    return !!Orders.findOne({
			UserId: userId,
			approvedByUser: true,
			approvedByRestaurant:false,
			cancelled:false,
		});
	},
	restaurants:function(){
		return Restaurants.find({},{Name:1,_id:1});
	},
	RestaurantName:function(){
		var user = Meteor.user();
		if(user.profile.role ==="restaurantAdmin"){
			return Restaurants.findOne({UserId: user._id}).Name;
		}
	
	},
	AvailableOrders:function(){
		var userId = Meteor.userId();
	    var restaurantId = Restaurants.findOne({UserId:userId})._id;

		var availableOrders = Orders.find({
			RestaurantId: restaurantId,
			approvedByUser: true,
			approvedByRestaurant: false,
			cancelled: false,
			delivered: false
		}).fetch();
		console.log(availableOrders	);
		return availableOrders && availableOrders.length > 0;
	},
	OpenOrders:function(){
		var userId = Meteor.userId();
	    var restaurantId = Restaurants.findOne({UserId:userId})._id;
	    var orders =	Orders.find({
			RestaurantId: restaurantId,
			approvedByUser: true,
			approvedByRestaurant: false,
			cancelled: false,
			delivered: false
		},{sort:{
			expectedTime:1, 	
		}}).fetch();
		
		return orders.map(function(order){
			var userId = order.UserId;
			var user = Meteor.users.findOne({_id:userId});
			var companyId = user.profile.companyId;
			var company = Companies.findOne({_id:companyId});
			return {
				_id:order._id,
				Company: company.name,
				DeliveryHour: order.expectedTime,
			};
		});
		
	}
});


/*****************************************************************************/
/* Dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.Dashboard.onCreated(function () {
});

Template.Dashboard.onRendered(function () {
});

Template.Dashboard.onDestroyed(function () {
});
