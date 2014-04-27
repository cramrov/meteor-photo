Template.contact.helpers({
  name: function() {
    if (Contacts.findOne())
      return Contacts.findOne().name;
    else
      return "not found";
  },
});

Template.contact.events({
  'click #gohome': function () {
    Router.go("home");
  }
});
