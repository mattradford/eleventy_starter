// https://www.webstoemp.com/blog/headless-cms-graphql-api-eleventy/

const fetch = require("node-fetch");

async function getWpPages() {
  const wpPages = await fetch("http://graphqlwp.local/about/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query: `{
            pages {
              nodes {
                pageId
                title
                slug
                excerpt
                content
              }
            }
          }`
    })
  });
  const response = await wpPages.json();
  const responsePages = response.data.pages.nodes;
  const pagesFormatted = responsePages.map(item => {
    return {
      id: item.pageId,
      title: item.title,
      slug: item.slug,
      summary: item.excerpt,
      body: item.content
    };
  });
  // console.log(pagesFormatted);
  return pagesFormatted;
}

module.exports = getWpPages();
