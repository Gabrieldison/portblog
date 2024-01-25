"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

interface DarkModeContextProps {
  children: ReactNode;
}

interface DarkModeContextValue {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextValue | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<DarkModeContextProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("modoEscuro", String(!isDarkMode));
  };

  const value: DarkModeContextValue = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      <div>{children}</div>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextValue => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error(
      "useDarkMode deve ser utilizado dentro de um DarkModeProvider"
    );
  }

  return context;
};
