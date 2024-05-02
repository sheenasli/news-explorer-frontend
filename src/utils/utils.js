export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res
      .json()
      .catch((jsonParseError) => {
        // Parsing json failed
        return Promise.reject("Unknown server error");
      })
      .then((body) => {
        // Parsing json succeeded
        return Promise.reject(body.message);
      });
  }
};
