import { PrismicProvider } from "@prismicio/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ThemeProviderWithDynamicTheme from "./components/ToggleThemeProvider";
import DarkModeProvider from "./context/DarkModeContext";
import { client } from "./prismicio";
import { router } from "./routes/root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <DarkModeProvider>
        <ThemeProviderWithDynamicTheme>
          <RouterProvider router={router} />
        </ThemeProviderWithDynamicTheme>
      </DarkModeProvider>
    </PrismicProvider>
  </React.StrictMode>
);
