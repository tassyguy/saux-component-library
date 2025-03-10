import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Alert, { AlertProps } from './Alert';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: StoryFn<AlertProps> = (args) => {
  const [visible, setVisible] = useState(true);
  const isDarkMode = useDarkMode();

  if (!visible) {
    return <div>No alert visible</div>;
  }

  const handleClose = () => {
    setVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };

  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Alert {...args} onClose={handleClose} />
      </div>
    </ThemeProvider>
  );
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  message: 'This is an informational alert.',
  type: 'info',
  dismissible: true,
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  message: 'Operation completed successfully!',
  type: 'success',
  dismissible: true,
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  message: 'There was an error processing your request.',
  type: 'error',
  dismissible: true,
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  message: 'Warning: Please check your input.',
  type: 'warning',
  dismissible: false,
};
