import React, { createContext, useContext, useEffect, useState } from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

const DarkModeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  // Obtém o estado inicial do tema do localStorage
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState<boolean>(storedDarkMode);

  // Atualiza o localStorage sempre que o tema muda
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
