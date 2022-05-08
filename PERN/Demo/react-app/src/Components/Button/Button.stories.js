import ButtonComponent from '.';

export default {
  title: 'Buttons/Button',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'Clicked' },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

//Primary Button
export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  children: 'Primary',
  color: 'primary',
};

//Secondary Button
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  children: 'Secondary',
  color: 'secondary',
};
