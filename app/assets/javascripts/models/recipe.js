App.Recipe = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  comments: DS.hasMany("App.Comment")
  // ingredients
  // instructions
  // photos
  // video
});

App.Recipe.FIXTURES = [
  {
    id: 1,
    title: "Fried patatoes",
    description: "A favorite dish for many people around the world!",
    comments: [ 10 ]
  },
  {id: 2, title: "Ugali and Nyama Choma"   , description: "....."},
  {id: 3, title: "Feijoada a Transmontana" , description: "....."}
];
