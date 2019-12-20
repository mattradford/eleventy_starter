// https://www.raymondcamden.com/2019/10/12/why-im-digging-eleventy

const axios = require("axios");
const config = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"
  }
};
let contentService = {};

async function getContentServiceFooterHtml() {
  return axios
    .get("https://www.totaljobs.com/content/footer?site=totaljobs", config)
    .then(function(response) {
      contentServiceFooterHtml = response.data;
      return contentServiceFooterHtml;
    })
    .catch(function(error) {
      console.log(error);
    });
}
module.exports = getContentServiceFooterHtml();
