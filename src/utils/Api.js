import { processServerResponse } from "./utils";

export const baseUrl = "http://localhost:3000";

export const getSavedArticles = () => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authorization: `Bearer ${token}`,
  }).then(processServerResponse);
};

export const addSavedArticle = (newsData, keyword) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: newsData.title,
      text: newsData.description,
      date: newsData.publishedAt,
      source: newsData.source.name,
      link: newsData.url,
      image: newsData.urlToImage,
      keyword: keyword,
    }),
  }).then(processServerResponse);
};

export const removeSavedArticle = (selectedArticle) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/articles/${selectedArticle._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

//mock server response
// export function getSavedArticles() {
//   return new Promise((resolve, reject) =>
//     resolve([
//       {
//         id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
//         author: "Joy the Baker",
//         title: "Lemon Poppy Seed Kolache",
//         description:
//           "As you know, I’ve entered my kolache era.  Here’s a twist on a classic kolache recipe using an enriched dough with a lemon curd and poppy seed twist. They’re a perfect springtime Texas pastry.\n\nI have this daydream that one day in the not so distant future I’…",
//         link: "https://joythebaker.com/2024/03/lemon-poppy-seed-kolache/",
//         urlToImage:
//           "https://joythebaker.com/wp-content/uploads/2024/03/LemonPoppySeedKolaches-19.jpg",
//         publishedAt: "2024-03-26T07:54:38Z",
//         content:
//           "As you know, Ive entered my kolache era.  Heres a twist on a classic kolache recipe using an enriched dough with a lemon curd and poppy seed twist. They’re a perfect springtime Texas pastry.\r\nI have … [+7373 chars]",
//         keyword: "Yellowstone",
//       },
//       {
//         id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
//         author: "Joy the Baker",
//         title: "Lemon Poppy Seed Kolache",
//         description:
//           "As you know, I’ve entered my kolache era.  Here’s a twist on a classic kolache recipe using an enriched dough with a lemon curd and poppy seed twist. They’re a perfect springtime Texas pastry.\n\nI have this daydream that one day in the not so distant future I’…",
//         link: "https://joythebaker.com/2024/03/lemon-poppy-seed-kolache/",
//         urlToImage:
//           "https://joythebaker.com/wp-content/uploads/2024/03/LemonPoppySeedKolaches-19.jpg",
//         publishedAt: "2024-03-26T07:54:38Z",
//         content:
//           "As you know, Ive entered my kolache era.  Heres a twist on a classic kolache recipe using an enriched dough with a lemon curd and poppy seed twist. They’re a perfect springtime Texas pastry.\r\nI have … [+7373 chars]",
//         keyword: "Yellowstone",
//       },
//       {
//         id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
//         author: "Joy the Baker",
//         title: "Lemon Poppy Seed Kolache",
//         description:
//           "As you know, I’ve entered my kolache era.  Here’s a twist on a classic kolache recipe using an enriched dough with a lemon curd and poppy seed twist. They’re a perfect springtime Texas pastry.\n\nI have this daydream that one day in the not so distant future I’…",
//         link: "https://joythebaker.com/2024/03/lemon-poppy-seed-kolache/",
//         urlToImage:
//           "https://joythebaker.com/wp-content/uploads/2024/03/LemonPoppySeedKolaches-19.jpg",
//         publishedAt: "2024-03-26T07:54:38Z",
//         content:
//           "As you know, Ive entered my kolache era.  Heres a twist on a classic kolache recipe using an enriched dough with a lemon curd and poppy seed twist. They’re a perfect springtime Texas pastry.\r\nI have … [+7373 chars]",
//         keyword: "Yellowstone",
//       },
//     ])
//   );
// }

// export function addSavedArticle(newsData, keyword) {
//   return new Promise((resolve, reject) => {
//     resolve({
//       id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
//       title: newsData.title,
//       text: newsData.description,
//       date: newsData.publishedAt,
//       source: newsData.source.name,
//       link: newsData.url,
//       image: newsData.urlToImage,
//       keyword: keyword,
//     });
//   });
// }
