import React, { ReactNode, createContext, useContext } from "react";
import "../../global.css"; // Ensure the global styles are applied

// Define the theme types
interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
}

// Default theme values
const defaultTheme: Theme = {
  primaryColor: "#007bff",
  secondaryColor: "#6c757d",
  backgroundColor: "#f8f9fa",
  textColor: "#212529",
  fontFamily: "Arial, sans-serif",
};

// Create a Context for the theme
const ThemeContext = createContext<Theme>(defaultTheme);

interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children: ReactNode;
}

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  return (
    <ThemeContext.Provider value={mergedTheme}>
      <div
        style={{
          color: mergedTheme.textColor,
          backgroundColor: mergedTheme.backgroundColor,
          fontFamily: mergedTheme.fontFamily,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Hook to use the theme in components
export const useTheme = () => useContext(ThemeContext);
