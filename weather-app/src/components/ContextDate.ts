import { createContext } from "react";

export interface GlobalContent {
  contextT?: number;
  setContextT: (c: number) => void;
}

const ContextDate = createContext<GlobalContent>({
  contextT: 0,
  setContextT: () => {},
});
export default ContextDate;
