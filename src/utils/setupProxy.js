const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy("/**", { // https://github.com/chimurai/http-proxy-middleware
    target: "https://axiosapi.herokuapp.com/",
    secure: false
  }));
};