const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const api = require("./api");
const staticRouter = require("./router");

module.exports = (app)=>{
  //配置静态路由
  staticRouter(router);
  //配置接口
  api(router);

  //配置路由
  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods())
}