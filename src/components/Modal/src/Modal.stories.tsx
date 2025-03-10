import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import Button from '../../Button/src/Button';
import { ThemeProvider } from '../../Theme/src/ThemeProvider';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: StoryFn<ModalProps> = (args) => {
  const [open, setOpen] = useState(args.open);
  const isDarkMode = useDarkMode();

  return (
    <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Button label="Open Modal" onClick={() => setOpen(true)} />
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>
            This is an example modal dialog. You can place any content here.
          </p>
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  title: 'Modal Title',
};
