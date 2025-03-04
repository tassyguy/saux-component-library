import React, { ReactNode, createContext, useContext, useState, useEffect } from "react";
import "../../global.css"; // Ensure the global styles are applied

// Define the theme types
interface Theme {
  primaryColor: string;
  primaryColorHover: string;
  secondaryColor: string;
  secondaryColorHover: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  borderColor: string;
  successBackgroundColor: string;
  successTextColor: string;
  successBorderColor: string;
  errorBackgroundColor: string;
  errorTextColor: string;
  errorBorderColor: string;
  warningBackgroundColor: string;
  warningTextColor: string;
  warningBorderColor: string;
  infoBackgroundColor: string;
  infoTextColor: string;
  infoBorderColor: string;
}

// Default light theme values
const lightTheme: Theme = {
  primaryColor: "#007bff",
  primaryColorHover: "#0056b3",
  secondaryColor: "#ff9800", // Updated to orange
  secondaryColorHover: "#e68900", // Updated to a darker orange
  backgroundColor: "#f8f9fa",
  textColor: "#212529",
  fontFamily: "Arial, sans-serif",
  borderColor: "#dee2e6",
  successBackgroundColor: "#d4edda",
  successTextColor: "#155724",
  successBorderColor: "#c3e6cb",
  errorBackgroundColor: "#f8d7da",
  errorTextColor: "#721c24",
  errorBorderColor: "#f5c6cb",
  warningBackgroundColor: "#fff3cd",
  warningTextColor: "#856404",
  warningBorderColor: "#ffeeba",
  infoBackgroundColor: "#d1ecf1",
  infoTextColor: "#0c5460",
  infoBorderColor: "#bee5eb",
};

// Default dark theme values
const darkTheme: Theme = {
  primaryColor: "#1a73e8",
  primaryColorHover: "#185abc",
  secondaryColor: "#e68900", // Updated to orange
  secondaryColorHover: "#ff9800", // Updated to a darker orange
  backgroundColor: "#202124",
  textColor: "#e8eaed",
  fontFamily: "Arial, sans-serif",
  borderColor: "#5f6368",
  successBackgroundColor: "#155724",
  successTextColor: "#d4edda",
  successBorderColor: "#c3e6cb",
  errorBackgroundColor: "#721c24",
  errorTextColor: "#f8d7da",
  errorBorderColor: "#f5c6cb",
  warningBackgroundColor: "#856404",
  warningTextColor: "#fff3cd",
  warningBorderColor: "#ffeeba",
  infoBackgroundColor: "#0c5460",
  infoTextColor: "#d1ecf1",
  infoBorderColor: "#bee5eb",
};

// Create a Context for the theme
const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--primary-color-hover", theme.primaryColorHover);
    root.style.setProperty("--secondary-color", theme.secondaryColor);
    root.style.setProperty("--secondary-color-hover", theme.secondaryColorHover);
    root.style.setProperty("--background-color", theme.backgroundColor);
    root.style.setProperty("--text-color", theme.textColor);
    root.style.setProperty("--font-family", theme.fontFamily);
    root.style.setProperty("--border-color", theme.borderColor);
    root.style.setProperty("--success-background-color", theme.successBackgroundColor);
    root.style.setProperty("--success-text-color", theme.successTextColor);
    root.style.setProperty("--success-border-color", theme.successBorderColor);
    root.style.setProperty("--error-background-color", theme.errorBackgroundColor);
    root.style.setProperty("--error-text-color", theme.errorTextColor);
    root.style.setProperty("--error-border-color", theme.errorBorderColor);
    root.style.setProperty("--warning-background-color", theme.warningBackgroundColor);
    root.style.setProperty("--warning-text-color", theme.warningTextColor);
    root.style.setProperty("--warning-border-color", theme.warningBorderColor);
    root.style.setProperty("--info-background-color", theme.infoBackgroundColor);
    root.style.setProperty("--info-text-color", theme.infoTextColor);
    root.style.setProperty("--info-border-color", theme.infoBorderColor);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={isDarkTheme ? "dark-theme" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Hook to use the theme in components
export const useTheme = () => useContext(ThemeContext);