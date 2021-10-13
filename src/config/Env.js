export const ENVIROMENT = "PROD";

export const API_URL = ENVIROMENT === "DEV" ? "http://localhost:9000" : "https://holypenniesapi.herokuapp.com";
export const APP_URL = ENVIROMENT === "DEV" ? "http://localhost:3000" : "https://holypenniesapi.herokuapp.com";
