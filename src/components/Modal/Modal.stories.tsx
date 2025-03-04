import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import Button from "../Button/Button";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn<ModalProps> = (args) => {
  const [open, setOpen] = useState(args.open);
  
  return (
    <>
      <Button label="Open Modal" onClick={() => setOpen(true)}></Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <p>This is an example modal dialog. You can place any content here.</p>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  title: "Modal Title",
};
