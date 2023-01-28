import React, { ChangeEvent, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [10, 20, 40],
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // Is the event "cancelable?" If so, then "''prevent' the ''default' action' that
    // 'belongs to the 'event'' from occurring:'"
    // event.preventDefault();
    setValue(event.target.value);
  }

  return <Input onChange={handleChange} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  disabled: false,
  label: 'Label',
  name: 'Name',
  placeholder: 'Placeholder',
  required: false,
  state: 'default',
  size: 20,
  theme: 'dark',
  type: 'text',
};
