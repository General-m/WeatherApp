import { linkApi } from "./linkAPi";

export const fetchWeather = async (latitude: number, longitude: number) => {
  try {
    const response = await fetch(linkApi(latitude, longitude));
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
    return null;
  }
};
