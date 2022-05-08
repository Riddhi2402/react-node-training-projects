import { DialogContent } from '@mui/material';
import DialogBox from '.';

export default {
  title: 'Dialog',
  component: DialogBox,
  argTypes: {
    open: { options: ['true'], control: { type: 'radio' } },
  },
};

const Template = (args) => <DialogBox {...args} />;

export const CustomDialog = Template.bind({});
CustomDialog.args = {
  children: <DialogContent sx={{ alignContent: 'center', height: '5cm', width: '5cm' }}>Dialog Open</DialogContent>,
  sx: { color: '#000000', height: '15cm', width: '9cm', backgroundColor: '#000000' },
};
