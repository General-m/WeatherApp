import { linkApi } from "./linkAPi-historical";

export const fetchWeatherHistorical = async (
  latitude: number,
  longitude: number,
  time: number
) => {
  try {
    const response = await fetch(linkApi(latitude, longitude, time));
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
    return null;
  }
};
