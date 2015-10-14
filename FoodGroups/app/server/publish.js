


Meteor.publish('restaurants', function () {
  return Restaurants.find();
});

Meteor.publish('companies', function () {
  return Companies.find();
});

Meteor.publish('orders', function () {
  return Orders.find();
});