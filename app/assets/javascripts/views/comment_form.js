App.CommentFormView = Ember.View.extend({
  tagName: "form"
, templateName: "comments/form"
, controller: App.CommentController.create({ content: App.Comment.createRecord()})
, submit: function(e) {
    e.preventDefault();
    // how to instantiate controller
  }
});
