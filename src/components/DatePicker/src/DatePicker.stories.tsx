import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DatePicker, { DatePickerProps } from './DatePicker';

export default {
  title: 'Components/Date Picker',
  component: DatePicker,
} as Meta;

const Template: StoryFn<DatePickerProps> = (args) => {
  const [date, setDate] = useState(args.value);

  const handleChange = (newDate: string) => {
    setDate(newDate);
  };

  return <DatePicker {...args} value={date} onChange={handleChange} />;
};

export const DefaultDatePicker: StoryFn<DatePickerProps> = Template.bind({});
DefaultDatePicker.args = {
  label: 'Select a Date',
  value: '2025-03-25',
  minDate: '2025-01-01',
  maxDate: '2025-12-31',
};

export const DisabledDatePicker: StoryFn<DatePickerProps> = Template.bind({});
DisabledDatePicker.args = {
  label: 'Disabled Date Picker',
  value: '2025-03-25',
  disabled: true,
};
