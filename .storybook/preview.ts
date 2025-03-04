import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'light',
      stylePreview: true,
      dark: { ...themes.dark},
      light: { ...themes.normal},
    },
  },
};

export default preview;