import { createContext } from "react";

type AppContextType = {
  weight: string;
  time: string;
  name: string;
  dropdown: string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
