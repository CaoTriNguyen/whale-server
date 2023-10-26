const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/api/news', newsRouter);
    app.use('/api/', siteRouter);
}

module.exports = route;
