import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from '../src/components';
import { useDarkMode } from 'storybook-dark-mode';
import React, { useEffect, useState } from 'react';

const withThemeProvider = (Story, context) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Story {...context} />
      </div>
    </ThemeProvider>
  );
};

const withDynamicBackground = (Story, context) => {
  const isDarkMode = useDarkMode();
  const [background, setBackground] = useState(isDarkMode ? 'dark' : 'light');

  useEffect(() => {
    const newBackground = isDarkMode ? 'dark' : 'light';
    setBackground(newBackground);
    context.parameters.backgrounds.default = newBackground;
  }, [isDarkMode, context.parameters.backgrounds]);

  return <Story {...context} />;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
    darkMode: {
      current: 'light',
      stylePreview: true,
      dark: { ...themes.dark },
      light: { ...themes.normal },
    },
  },
  decorators: [withDynamicBackground, withThemeProvider],
};

export default preview;
