import { MenuItem } from '@mui/material';
import SelectField from '.';

export default {
  title: 'SelectField',
  component: SelectField,
  argTypes: {
    onChange: { action: 'Changed' },
    variant: { options: ['filled', 'outlined', 'standard'], control: { type: 'radio' } },
    color: { options: ['primary', 'secondary', 'error', 'success', 'info', 'warning'], control: { type: 'radio' } },
    size: { options: ['small', 'medium'], control: { type: 'radio' } },
  },
};

const Template = (args) => <SelectField {...args} />;

export const CustomSelect = Template.bind({});
CustomSelect.args = {
  children: <MenuItem value="Item1">Item1</MenuItem>,
  sx: { width: '7cm' },
};
