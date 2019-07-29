const searchHot = require('./searchHot.json')

module.exports = {
  port: 8080,
  before (app) {
    app.get("/api/search/hot", (req, res) => {
      res.json(searchHot);
    },
  );
  }
}