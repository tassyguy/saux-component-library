import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import '../../../global.css'; // Ensure the global styles are applied

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
  paginationButtonBackground: string;
  paginationButtonBorder: string;
  paginationButtonHoverBackground: string;
  paginationButtonActiveBackground: string;
  paginationButtonActiveBorder: string;
  paginationButtonActiveColor: string;
  toggleSwitchBackground: string;
  toggleSwitchOnBackground: string;
  toggleSwitchHandleBackground: string;
  highContrastBackgroundColor?: string;
  highContrastTextColor?: string;
  highContrastBorderColor?: string;
}

// Extend default light and dark themes with high contrast
const lightTheme: Theme = {
  primaryColor: '#007bff',
  primaryColorHover: '#0056b3',
  secondaryColor: '#ff9800',
  secondaryColorHover: '#e68900',
  backgroundColor: '#f8f9fa',
  textColor: '#212529',
  fontFamily: 'Arial, sans-serif',
  borderColor: '#dee2e6',
  successBackgroundColor: '#d4edda',
  successTextColor: '#155724',
  successBorderColor: '#c3e6cb',
  errorBackgroundColor: '#f8d7da',
  errorTextColor: '#721c24',
  errorBorderColor: '#f5c6cb',
  warningBackgroundColor: '#fff3cd',
  warningTextColor: '#856404',
  warningBorderColor: '#ffeeba',
  infoBackgroundColor: '#d1ecf1',
  infoTextColor: '#0c5460',
  infoBorderColor: '#bee5eb',
  paginationButtonBackground: '#fff',
  paginationButtonBorder: '#ccc',
  paginationButtonHoverBackground: '#f0f0f0',
  paginationButtonActiveBackground: '#06d6a0',
  paginationButtonActiveBorder: '#06d6a0',
  paginationButtonActiveColor: '#fff',
  toggleSwitchBackground: '#ccc',
  toggleSwitchOnBackground: '#06D6A0',
  toggleSwitchHandleBackground: '#fff',
  highContrastBackgroundColor: '#ffffff',
  highContrastTextColor: '#000000',
  highContrastBorderColor: '#000000',
};

const darkTheme: Theme = {
  ...lightTheme,
  primaryColor: '#1a73e8',
  primaryColorHover: '#185abc',
  backgroundColor: '#202124',
  textColor: '#e8eaed',
  borderColor: '#5f6368',
  paginationButtonBackground: '#333',
  paginationButtonBorder: '#555',
  paginationButtonHoverBackground: '#444',
  highContrastBackgroundColor: '#000000',
  highContrastTextColor: '#ffffff',
  highContrastBorderColor: '#ffffff',
};

// Create a Context for the theme
const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
  toggleHighContrast: () => {},
  isHighContrast: false,
});

export interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  let theme = isDarkTheme ? darkTheme : lightTheme;
  if (isHighContrast) {
    theme = {
      ...theme,
      backgroundColor: theme.highContrastBackgroundColor || '#ffffff',
      textColor: theme.highContrastTextColor || '#000000',
      borderColor: theme.highContrastBorderColor || '#000000',
    };
  }

  useEffect(() => {
    const root = document.documentElement;
    Object.keys(theme).forEach((key) => {
      const value = theme[key as keyof Theme];
      if (typeof value === 'string') {
        root.style.setProperty(
          `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`,
          value
        );
      }
    });
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, toggleHighContrast, isHighContrast }}
    >
      <div
        className={`${isDarkTheme ? 'dark-theme' : ''} ${isHighContrast ? 'high-contrast' : ''}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Hook to use the theme in components
export const useTheme = () => useContext(ThemeContext);
