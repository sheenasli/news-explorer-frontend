import { baseUrl } from "./Api";
import { processServerResponse } from "./utils";

//signup for registration
export const registration = ({ email, password, name }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then(processServerResponse);
};

// signin for user authorization
export const authorization = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(processServerResponse);
};

// check token-get content
export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer: ${token}`,
    },
  }).then(processServerResponse);
};

//Mock Server Coding//
// export const checkToken = (token) => {
//   return new Promise((resolve, reject) => {
//     resolve({
//       data: { name: "fake user", email: "fake@example.com", id: "fake-id" },
//     });
//   });
// };

// export const authorization = (email, password) => {
//   return new Promise((resolve, reject) => {
//     resolve({ token: "a fake token" });
//   });
// };
