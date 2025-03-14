import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Alert, { AlertProps } from './Alert';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'error', 'warning', 'info'],
      },
    },
    dismissible: { control: 'boolean' },
    onClose: { action: 'closed' },
    icon: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
    title: { control: 'text' },
    duration: { control: 'number' },
    ariaLabel: { control: 'text' },
  },
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

export const InfoAlert: StoryFn<AlertProps> = Template.bind({});
InfoAlert.args = {
  message: 'This is an informational alert.',
  type: 'info',
  dismissible: true,
};

export const SuccessAlert: StoryFn<AlertProps> = Template.bind({});
SuccessAlert.args = {
  message: 'Operation completed successfully!',
  type: 'success',
  dismissible: true,
};

export const ErrorAlert: StoryFn<AlertProps> = Template.bind({});
ErrorAlert.args = {
  message: 'There was an error processing your request.',
  type: 'error',
  dismissible: true,
};

export const WarningAlert: StoryFn<AlertProps> = Template.bind({});
WarningAlert.args = {
  message: 'Warning: Please check your input.',
  type: 'warning',
  dismissible: false,
};

export const AlertWithIcon: StoryFn<AlertProps> = Template.bind({});
AlertWithIcon.args = {
  message: 'This is an alert with an icon.',
  type: 'info',
  icon: <i className="icon-info" />,
  dismissible: true,
};

export const AlertWithTitle: StoryFn<AlertProps> = Template.bind({});
AlertWithTitle.args = {
  message: 'This is an alert with a title.',
  type: 'info',
  title: 'Alert Title',
  dismissible: true,
};

export const AutoDismissAlert: StoryFn<AlertProps> = Template.bind({});
AutoDismissAlert.args = {
  message: 'This alert will auto-dismiss after 3 seconds.',
  type: 'info',
  duration: 3000,
  dismissible: true,
};
