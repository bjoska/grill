App.CommentFormView = Ember.View.extend({
  tagName: "form"
  , templateName: "comments/form"
  , controller: App.CommentController.create()
});
