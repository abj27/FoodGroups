/*****************************************************************************/
/* MakeOrder: Event Handlers */
/*****************************************************************************/
Template.MakeOrder.events({
	"click .addToOrder":function(event,instance){
		var restaurantId = instance.data._id;
		var curentMenuItem = this;
		curentMenuItem.restaurantId = restaurantId;
		var userId = Meteor.userId();
		var currentOrder = instance.currentOrder;
		if(currentOrder){
			currentOrder = Orders.update({_id:currentOrder._id},
					{$push:{orderItems: curentMenuItem}, 
						$set:{RestaurantId: restaurantId}
		});} 
		else{
			var orderItems = [];
			orderItems.push(curentMenuItem);
			currentOrder = Orders.insert({
				UserId: userId,
				approvedByUser:false, 
				 approvedByRestaurant:false,
				 cancelled:false,
				  delivered:false,
				orderItems: orderItems,
				RestaurantId:restaurantId ,
			});
		}
	},
	"click #approveOrder": function(){
		var userId = Meteor.userId();
		var currentOrder = Orders.findOne({UserId: userId, approvedByUser:false});
		var time = parseInt($(".time").val(),10);
		Orders.update({_id:currentOrder._id}, 
				{$set:{approvedByUser:true,
				 approvedByRestaurant:false,
				 cancelled:false,
				  delivered:false,
				  expectedTime: time
				 }});
		toastr.success("Your order has been sent to the restaurant");
		Router.go("dashboard");

	}});

/*****************************************************************************/
/* MakeOrder: Helpers */
/*****************************************************************************/
Template.MakeOrder.helpers({
	OrderItems:function(){
		var userId = Meteor.userId();
		var currentOrder = Orders.findOne({UserId: userId, approvedByUser:false});
		if(currentOrder){
			Template.instance().currentOrder = currentOrder;
			return currentOrder.orderItems;
		}
		return [];
	},
	totalPrice:function(){
		var userId = Meteor.userId();
		var currentOrder = Orders.findOne({UserId: userId, approvedByUser:false});
		if(currentOrder && currentOrder.orderItems && currentOrder.orderItems.length>0){
			var items = currentOrder.orderItems;
			sum = 0;
			for(var i = 0; i< items.length; i++){
				sum+= parseFloat(items[i].price, 10);
			}
			return sum;
		}
		return 0;
	},
	futureHours:function(){
		var currentDate= new Date();
		var hours = currentDate.getHours();
		var minutes = currentDate.getMinutes();
		var arr = [];
		
		hours++;
		if(minutes >= 30){
			hours++;
		}
		for(var i =hours; i < 24; i++  ){
			arr.push({time:i});
		}
		return arr;
	}

});


/*****************************************************************************/
/* MakeOrder: Lifecycle Hooks */
/*****************************************************************************/
Template.MakeOrder.onCreated(function () {
});

Template.MakeOrder.onRendered(function () {
});

Template.MakeOrder.onDestroyed(function () {
});
