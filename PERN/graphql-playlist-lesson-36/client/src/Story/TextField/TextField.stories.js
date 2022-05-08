import InputField from '.';

export default {
  title: 'Input',
  component: InputField,
  argTypes: {
    onChange: { action: 'Changed' },
    variant: { options: ['filled', 'outlined', 'standard'], control: { type: 'radio' } },
    color: { options: ['primary', 'secondary', 'error', 'success', 'info', 'warning'], control: { type: 'radio' } },
    disabled: { options: ['true'], control: { type: 'radio' } },
    fullWidth: { options: ['true'], control: { type: 'radio' } },
    size: { options: ['small', 'medium'], control: { type: 'radio' } },
    margin: { options: ['dense', 'none', 'normal'], control: { type: 'radio' } },
    multiline: { options: ['true'], control: { type: 'radio' } },
  },
};

const Template = (args) => <InputField {...args} />;

export const CustomInput = Template.bind({});
CustomInput.args = {
  helperText: 'helper text',
};
