import Box from '.';
import Center from '../Center';

export default {
  title: 'Box',
  component: Box,
  // decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    onClick: { action: 'Clicked' },
    variant: { options: ['blue', 'green', 'orange'], control: { type: 'radio' } },
  },
};

const Template = (args) => <Box {...args} />;

export const CustomBox = Template.bind({});
CustomBox.args = {
  children: 'Book',
};
