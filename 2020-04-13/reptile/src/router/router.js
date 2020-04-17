const ejs = require("ejs");
const path = require("path");

module.exports = (router) => {
  //首页路由
  router.get("/", async (ctx, next) => {
    ejs.renderFile(
      path.resolve(__dirname, "../pages/index.ejs"),
      (err, str) => {
        if (err) {
          throw new Error(err);
        }
        ctx.body = str;
      }
    );
  });

  //首页路由
  router.get("/test", async (ctx, next) => {
    ejs.renderFile(
      path.resolve(__dirname, "../pages/test.ejs"),
      (err, str) => {
        if (err) {
          throw new Error(err);
        }
        ctx.body = str;
      }
    );
  });
};
