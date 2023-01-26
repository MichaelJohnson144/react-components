import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SectionMenu from './SectionMenu';

export default {
  title: 'Components/SectionMenu',
  component: SectionMenu,
} as ComponentMeta<typeof SectionMenu>;

const items = [
  {
    anchor: 'docs',
    label: 'DOCS',
  },
  {
    anchor: 'components',
    label: 'COMPONENTS',
  },
  {
    anchor: 'blog',
    label: 'BLOG',
  },
  {
    anchor: 'showcase',
    label: 'SHOWCASE',
  },
];

const Template: ComponentStory<typeof SectionMenu> = (args) => {
  return <SectionMenu {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  items,
  selectedAnchor: 'docs',
  theme: 'dark',
};
