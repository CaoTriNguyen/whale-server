const db = require('../../config/db');

const User = function (user) {
    this.id = user.id;
    this.username = user.user;
    this.password = user.password;
    this.avatar = user.avatar;
    this.gmail = user.gmail;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.gender = user.gender;
    this.dateOfBirth = user.dateOfBirth;
    this.createAt = user.createAt;
    this.updateAt = user.updateAt;
    this.deleted = user.deleted;
};

User.getAll = (result) => {
    let query = 'SELECT * FROM user';

    db.query(query, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }

        //console.log('course: ', res);
        result(null, res);
    });
};

module.exports = User;
