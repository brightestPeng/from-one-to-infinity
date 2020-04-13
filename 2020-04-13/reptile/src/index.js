
const Koa = require("koa");
const middleware = require("./middleware/index");
const { port } = require("./utils/appConfig");
const initRouter = require("./router/index");

const app = new Koa();

//应用中间件
middleware(app);

//初始化路由
initRouter(app)

app.listen(port,()=>{
  console.log(`Listen on port ${port}`);
});

