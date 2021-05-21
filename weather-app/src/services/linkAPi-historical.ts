import { apiKey } from "../consts/API_KEY";

export const linkApi = (latitude: number, longitude: number, time: number) =>
  `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&units=metric&dt=${time}&appid=${apiKey}`;
