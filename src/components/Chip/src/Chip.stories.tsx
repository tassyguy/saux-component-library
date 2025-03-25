import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Chip, { ChipProps } from './Chip';
import { Info, CheckCircle } from 'react-feather';

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta;

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const DefaultChip: StoryFn<ChipProps> = Template.bind({});
DefaultChip.args = {
  label: 'Default Chip',
};

export const RemovableChip: StoryFn<ChipProps> = Template.bind({});
RemovableChip.args = {
  label: 'Removable Chip',
  onRemove: () => alert('Chip removed!'),
};

export const ChipWithIcon: StoryFn<ChipProps> = Template.bind({});
ChipWithIcon.args = {
  label: 'Chip with Icon',
  icon: <Info size={16} />,
};

export const SuccessChip: StoryFn<ChipProps> = Template.bind({});
SuccessChip.args = {
  label: 'Success Chip',
  variant: 'success',
};

export const InteractiveChips: StoryFn = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);

  const handleRemove = (chip: string) => {
    setChips((prev) => prev.filter((c) => c !== chip));
  };

  return (
    <div>
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onRemove={() => handleRemove(chip)}
          variant="primary"
        />
      ))}
    </div>
  );
};
