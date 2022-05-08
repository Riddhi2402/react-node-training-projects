import TableComponent from '.';

export default {
  title: 'Table/TableView',
  component: TableComponent,
};

const Template = (args) => <TableComponent {...args} />;
export const Table = Template.bind({});
Table.args = {
  headerData: [{ column1: 'Id', column2: 'BookName', column3: 'Genre', column4: 'Author' }],
  bodyData: [
    {
      id: 1,
      name: 'book1',
      genre: 'category1',
      author: { name: 'author1' },
    },
    {
      id: 2,
      name: 'book2',
      genre: 'category2',
      author: { name: 'author2' },
    },
  ],
  style: { width: 600, margin: 20, align: 'center' },
};
