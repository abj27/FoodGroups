/*****************************************************************************/
/* CheckOrder: Event Handlers */
/*****************************************************************************/
Template.CheckOrder.events({
	"click #approveOrder":function(event,instance){
		var data = instance.data;
		var order = Orders.findOne({_id:data._id});
		Orders.update({_id:data._id},
				{$set:{approvedByRestaurant: true}});
		toastr.success("The order Have been approved");
		Router.go("dashboard");

	}
});

/*****************************************************************************/
/* CheckOrder: Helpers */
/*****************************************************************************/
Template.CheckOrder.helpers({
	totalPrice:function(){
		var sum = 0;
		if(this.orderItems){
			for(var i =0; i<this.orderItems.length; i++){
				sum += parseFloat(this.orderItems[i].price,10);
			}
		}
		return sum;	
	}
});

/*****************************************************************************/
/* CheckOrder: Lifecycle Hooks */
/*****************************************************************************/
Template.CheckOrder.onCreated(function () {
});

Template.CheckOrder.onRendered(function () {
});

Template.CheckOrder.onDestroyed(function () {
});
