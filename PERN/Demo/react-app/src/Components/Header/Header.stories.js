import HeaderComponent from '.';

export default {
  title: 'Header/Typography',
  component: HeaderComponent,
};

const Template = (args) => <HeaderComponent {...args} />;
export const Header = Template.bind({});
Header.args = {
  variant: 'h4',
  children: 'Hello', 
};
