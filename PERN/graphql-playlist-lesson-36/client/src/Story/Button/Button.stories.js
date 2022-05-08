import ButtonComponent from '.';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'Clicked' },
    variant: { options: ['contained', 'outlined', 'text'], control: { type: 'radio' } },
    color: { options: ['primary', 'secondary', 'error', 'success', 'info', 'warning'], control: { type: 'radio' } },
    disabled: { options: ['true'], control: { type: 'radio' } },
    fullWidth: { options: ['true'], control: { type: 'radio' } },
    size: { options: ['small', 'medium', 'large'], control: { type: 'radio' } },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const CustomButton = Template.bind({});
CustomButton.args = {
  children: 'Button',
  sx: {
    borderColor: '#000000',
    borderRadius: 1,
    color: '#000000',
    padding: '10px',
    fontFamily: 'Nunito SemiBold',
  },
};
