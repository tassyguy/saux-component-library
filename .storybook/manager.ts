import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
    theme: themes.light, // You can set this to themes.dark if you prefer the dark theme by default
  });