module.exports = function (app) {
  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  User.create([{
        email: 'olivercera@domain.com',
        password: 'mypass123',

      },
      {
        email: 'regularuser@domain.com',
        password: 'mypass123'
      }
    ],
    function (err, users) {
      if (err) throw err;

      console.log('Created users:', users);
      Role.create({
        name: 'admin'
      }, function (err, role) {
        if (err) throw err;

        //make first user an admin
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: users[0].id
        }, function (err, principal) {
          if (err) throw err;
        });
      });
    });

};
