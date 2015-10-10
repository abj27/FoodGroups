Companies = new Mongo.Collection('companies');

CompaniesSchema = new SimpleSchema({
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
Companies.attachSchema(CompaniesSchema);

if (Meteor.isServer) {
  Companies.allow({
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
