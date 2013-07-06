App.CommentController = Em.ObjectController.extend({
  createNew: function() {
    var body = this.get('content');
    var comment = App.Comment.createRecord({
      body: body
    });
    this.set('content', 'Comment saved!');
    comment.save();
  }
});
