class NewsController {
    // [GET] /news
    index(req, res) {
        res.json({ message: 'news' });
    }

    // [GET] /news/:slug
    show(req, res) {
        res.json({ message: 'slug news' });
    }
}

module.exports = new NewsController();
