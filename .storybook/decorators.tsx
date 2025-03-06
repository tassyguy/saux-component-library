import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from '../src/components/Theme/ThemeProvider';
import type { Decorator } from '@storybook/react';

export const withThemeProvider: Decorator = (Story, context) => {
  const isDarkMode = useDarkMode();
  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Story {...context} />
      </div>
    </ThemeProvider>
  );
};

export const withDynamicBackground: Decorator = (Story, context) => {
  const isDarkMode = useDarkMode();

  useEffect(() => {
    const backgrounds = isDarkMode ? 'dark' : 'light';
    context.parameters.backgrounds.default = backgrounds;
  }, [isDarkMode, context.parameters.backgrounds]);

  return <Story {...context} />;
};
