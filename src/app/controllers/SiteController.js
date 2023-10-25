class SiteController {
    // [GET] /
    index(req, res) {
        res.json({ message: 'home' });
    }

    // [GET] /about
    about(req, res) {
        res.json({ message: 'about' });
    }
}

module.exports = new SiteController();
