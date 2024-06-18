import { createContext } from "react";

const AppContext = createContext({} as any);

export const AppContextProvider = ({ children }: Props) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

interface Props {
  children: React.ReactNode;
}
