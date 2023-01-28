import Navigation from './Navigation';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

export const Default: ComponentStory<typeof Navigation> = (args) => <Navigation />;
