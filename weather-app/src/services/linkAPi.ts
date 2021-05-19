import { apiKey } from "../consts/API_KEY";

export const linkApi = (latitude: number, longitude: number) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
