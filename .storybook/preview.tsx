import type { Preview, DecoratorFunction } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from '../src/components/Theme/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';
import React, { useEffect } from 'react';

const withThemeProvider: DecoratorFunction = (Story, context) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Story {...context} />
      </div>
    </ThemeProvider>
  );
};

const withDynamicBackground: DecoratorFunction = (Story, context) => {
  const isDarkMode = useDarkMode();

  useEffect(() => {
    const backgrounds = isDarkMode ? 'dark' : 'light';
    context.parameters.backgrounds.default = backgrounds;
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
