const axios = require("axios");
const config = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"
  }
};
let contentService = "";
const url = "https://www.totaljobs.com";

async function getContentServiceJs() {
  return axios
    .get(
      url +
        "/content/javascript?site=totaljobs&includebootstrapjs=true&includejquery=true&includefastfontsjs=true",
      config
    )
    .then(function(response) {
      contentServiceJs = response.data;
      contentServiceJs = contentServiceJs.replace(/src=\"/g, 'src="' + url);
      return contentServiceJs;
    })
    .catch(function(error) {
      console.log(error);
    });
}
module.exports = getContentServiceJs();
