import { apiKey } from "../consts/API_KEY";

export const linkApi = () =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=45.035470&lon=38.975313&units=metric&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
