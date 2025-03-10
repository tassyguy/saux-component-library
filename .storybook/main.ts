import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-interactions',
    '@storybook/addon-onboarding',
    '@storybook/addon-storysource',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
        },
      },
    });
  },
};

export default config;
