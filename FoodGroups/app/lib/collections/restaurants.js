Restaurants = new Mongo.Collection('restaurants');
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
	}
});
Restaurants.attachSchema(RestaurantSchema);
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


