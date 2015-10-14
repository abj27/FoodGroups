Restaurants = new Mongo.Collection('restaurants');

MenuItemSchema = new SimpleSchema({
	Name:{
		type:String,
		label: "Name",
		max:200
	},	
	Description:{
		type:String,
		label: "Description",
		max:500
	},
	Price:{
		type: Number,
		label: "Price",
	},	

});

MenuSchema = new SimpleSchema({
	'MenuItems.$':{
		type:[MenuItemSchema],
		blackbox:true
	}
});

RestaurantSchema = new SimpleSchema({
	Name:{
		type:String,
		label: "Name",
		max:200
	},
	Address	:{
		type:String,
		label: "Address",
		max:500
	},
	Phone:{
		type:String,
		label:"Phone number"
	},
	UserId:{
		type: String,
		label:"UserId",
		autoValue:function(){
			if(this.isInsert){
				return this.userId;
			}
		}
	},
	Menu:{
		type:MenuSchema,
		label: "Menu",
		autoValue:function(){
			if(this.isInsert){
				return {MenuItems:[]};
			}
		}

	}
});

if (Meteor.isServer) {
  Restaurants.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}


