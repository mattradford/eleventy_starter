// https://www.raymondcamden.com/2019/10/12/why-im-digging-eleventy

const fetch = require("node-fetch");

async function getStarWars() {
  let resp = await fetch("https://swapi.co/api/films/");
  let films = await resp.json();
  return films.results;
}

module.exports = getStarWars();
