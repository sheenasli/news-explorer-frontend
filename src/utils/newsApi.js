import { APIkey, parseCurrentDate, parsePreviousWeek } from "./constants";
import { processServerResponse } from "./utils";

//use before publishing application GET https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=[your_key]
export const getSearchResults = (keyword) => {
  return fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=${parsePreviousWeek}&to=${parseCurrentDate}&pageSize=100&sortBy=popularity&apiKey=${APIkey}
    `).then(processServerResponse);
};
