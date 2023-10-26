const db = require('../../config/db');

const Course = function (course) {
    this.name = course.name;
    this.description = course.description;
    this.image = course.image;
    this.createAt = course.createAt;
    this.updateAt = course.updateAt;
};

Course.getAll = (result) => {
    let query = 'SELECT * FROM course';

    db.query(query, (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log('course: ', res);
        result(null, res);
    });
};

module.exports = Course;
