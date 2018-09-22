module.exports = function (app) {
  app.dataSources.db.automigrate('Post', function (err) {
    if (err) throw err;

    app.models.Post.create([{
      title: 'Bel Cafe',
      content: 'Vancouver'
    }, {
      title: 'Three Bees Coffee House',
      content: 'San Mateo'
    }], function (err, posts) {
      if (err) throw err;

      console.log('Models created: \n', posts);
    });
  });
};
