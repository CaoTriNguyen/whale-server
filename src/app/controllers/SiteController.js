const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res) {
        Course.getAll((err, data) => {
            if (err)
                res.status(500).json({
                    message: err.message || 'Some error occurred while retrieving courses.',
                });
            else res.json({ data });
        });
    }

    // [GET] /about
    about(req, res) {
        res.json({ message: 'about' });
    }
}

module.exports = new SiteController();
