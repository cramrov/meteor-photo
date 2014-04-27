Template.contacts.helpers({
  contact: function() {
    return Contacts.find();     
  }
});

Template.contacts.events({
    'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  //Session.set("currentPage", "view1");
      
  }
});
/*
Template.contacts.events({
  'click #button': function () {
    Router.go("contact", {"_name": $("#name").val()});   
  }
});*/