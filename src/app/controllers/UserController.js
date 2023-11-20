const User = require('../models/User');

class SiteController {
    // [GET] /
    index(req, res) {
        User.getAll((err, data) => {
            if (err)
                res.status(500).json({
                    message: err.message || 'Some error occurred while retrieving courses.',
                });
            else res.json({ data });
        });
    }

    login(req, res) {
        res.send({
            token: 'test123',
        });
    }
}

module.exports = new SiteController();
