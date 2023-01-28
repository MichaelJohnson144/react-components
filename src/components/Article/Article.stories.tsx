import Article, { ArticleData } from './Article';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => {
  return (
    <div className={'p-5 bg-transparent-blue-30 rounded'}>
      <Article {...args} />
    </div>
  );
};

const TemplateAsync: ComponentStory<typeof Article> = (args) => {
  function getDataContent() {
    return new Promise<ArticleData>((resolve) => {
      window.setTimeout(() => {
        const content: ArticleData = {
          title: args.title,
          body: args.body,
        };
        resolve(content);
      }, 1500);
    });
  }

  return (
    <div className={'p-5 bg-transparent-blue-30 rounded'}>
      <Article {...args} getDataContent={getDataContent} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Example Title ',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non elementum turpis. Proin blandit 
          sodales imperdiet. Curabitur tincidunt mi et neque porttitor, a gravida metus hendrerit. Praesent pharetra 
          viverra vulputate. Aenean eleifend efficitur metus, id rutrum libero. In pharetra tristique risus. 
          Nam sollicitudin, libero a feugiat faucibus, elit neque mattis mi, vitae euismod ligula purus at dolor. 
          Morbi lobortis sapien massa, vel dictum ex tincidunt vitae. Pellentesque cursus elementum blandit. 
          Maecenas auctor diam urna, id pharetra massa dignissim auctor. Nunc hendrerit odio sapien, eget ornare metus 
          tincidunt et. Maecenas sed massa fermentum, vulputate lorem id, pretium erat.`,
  theme: 'dark',
};

export const WithAsync = TemplateAsync.bind({});
WithAsync.args = {
  title: 'Example Title from an Async Response',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non elementum turpis. Proin blandit 
          sodales imperdiet. Curabitur tincidunt mi et neque porttitor, a gravida metus hendrerit. Praesent pharetra 
          viverra vulputate. Aenean eleifend efficitur metus, id rutrum libero. In pharetra tristique risus. 
          Nam sollicitudin, libero a feugiat faucibus, elit neque mattis mi, vitae euismod ligula purus at dolor. 
          Morbi lobortis sapien massa, vel dictum ex tincidunt vitae. Pellentesque cursus elementum blandit. 
          Maecenas auctor diam urna, id pharetra massa dignissim auctor. Nunc hendrerit odio sapien, eget ornare metus 
          tincidunt et. Maecenas sed massa fermentum, vulputate lorem id, pretium erat.`,
  theme: 'dark',
};
