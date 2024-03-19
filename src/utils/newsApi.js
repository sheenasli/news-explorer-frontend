const API_KEY = "2a6478aa62e14641b9d3e05b8dbc5567";

export const getNews = () => {
  const newsApi =
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2024-03-18&sortBy=popularity&apiKey=${API_KEY}
    `).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    });
  return newsApi;
};

export const parseNewsData = (data) => {
  const source = data.source;
  const newsSource = source && source.name;
  return newsSource;
};
