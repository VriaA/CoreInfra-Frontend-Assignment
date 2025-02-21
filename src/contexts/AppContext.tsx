import { useState, createContext } from "react";
export interface AppContextValues {
  isNavBarOpen: boolean;
  setIsNavBarOpen: (isNavBarOpen: boolean) => void;
}

export const AppContext = createContext<AppContextValues | null>(null);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isNavBarOpen, setIsNavBarOpen }}>
      {children}
    </AppContext.Provider>
  );
}
