const https = require("https");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

module.exports = {
  getDetail: async (ctx, next) => {
    const { url } = ctx.request.body;
    return new Promise((resolve,reject) => {
      https.get(url, async (res) => {
        let chunks = [];
        res.on("data", (chunk) => {
          chunks.push(chunk);
        });
        res.on("end", () => {
          try {
            const data = iconv.decode(Buffer.concat(chunks), "utf-8");
            console.log(chunks);
            const $ = cheerio.load(data);

            let args = [];
            $(".dw_table")
              .find(".el")
              .each(function () {
                let work = $(this).find(".t1 a").attr("title");
                let company = $(this).find(".t2 a").attr("title");
                //不对页面进行实体编码
                let position = $(this).find(".t3").text();
                let salary = $(this).find(".t4").text();
                let date = $(this).find(".t5").text();
                if (work) {
                  args.push({
                    work,
                    company,
                    position,
                    salary,
                    date,
                  });
                }
              });

            resolve(args)
          } catch (error) {
            reject(error);
          }
        });
      });
    });
  },
};
