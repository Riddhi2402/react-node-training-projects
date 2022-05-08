import TextComponent from '.';

export default {
  title: 'Typography',
  component: TextComponent,
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'button',
        'caption',
        'overline',
        'string',
      ],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <TextComponent {...args} />;
export const Text = Template.bind({});
Text.args = {
  children: 'Typography',
  sx: { fontFamily: 'Nunito SemiBold', color: '#ad1457' },
};
