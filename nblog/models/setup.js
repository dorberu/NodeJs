var users = require('../models/users');

// ブログ管理に使うユーザ名とパスワードを指定する
var name = 'ymatsuda';
var password = 'yuuji1276';

users.createUser(name, password, function (err, sid) {
        if (err) {
            console.log('user creation failed.');
        }
        console.log('user ' + name + ' created. sid: ' + sid);
    }
); 

