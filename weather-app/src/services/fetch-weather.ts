import { linkApi } from "./linkAPi";

export const fetchWeather = async () => {
  try {
    const response = await fetch(linkApi());
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
    return null;
  }
};
