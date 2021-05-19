import { createContext } from "react";

export type GlobalContent = {
  context?: string;
  setContext: (c: string) => void;
};
const Context = createContext<GlobalContent>({
  context: "",
  setContext: () => {},
});
export default Context;
