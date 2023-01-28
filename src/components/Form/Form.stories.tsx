import Form from './Form';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

export const Default: ComponentStory<typeof Form> = (args) => <Form />;
