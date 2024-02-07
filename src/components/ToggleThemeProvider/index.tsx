// ThemeProviderWithDynamicTheme.tsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../../context/DarkModeContext";
import { GlobalStyle } from "../../styles/global";
import Theme from "../../styles/themes";

const ThemeProviderWithDynamicTheme: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const { darkMode } = useDarkMode();

  return (
    <ThemeProvider theme={darkMode ? Theme.darkTheme : Theme.lightTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default ThemeProviderWithDynamicTheme;
