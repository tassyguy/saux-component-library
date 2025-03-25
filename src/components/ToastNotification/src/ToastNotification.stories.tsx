import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ToastNotification, { ToastNotificationProps } from './ToastNotification';

export default {
  title: 'Components/Toast Notification',
  component: ToastNotification,
} as Meta;

const Template: StoryFn<ToastNotificationProps> = (args) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && <ToastNotification {...args} onClose={handleClose} />}
      <button onClick={() => setVisible(true)}>Show Notification</button>
    </>
  );
};

export const SuccessNotification: StoryFn<ToastNotificationProps> =
  Template.bind({});
SuccessNotification.args = {
  message: 'This is a success notification!',
  type: 'success',
  duration: 3000,
};

export const ErrorNotification: StoryFn<ToastNotificationProps> = Template.bind(
  {}
);
ErrorNotification.args = {
  message: 'This is an error notification!',
  type: 'error',
  duration: 3000,
};

export const WarningNotification: StoryFn<ToastNotificationProps> =
  Template.bind({});
WarningNotification.args = {
  message: 'This is a warning notification!',
  type: 'warning',
  duration: 3000,
};

export const InfoNotification: StoryFn<ToastNotificationProps> = Template.bind(
  {}
);
InfoNotification.args = {
  message: 'This is an info notification!',
  type: 'info',
  duration: 3000,
};
