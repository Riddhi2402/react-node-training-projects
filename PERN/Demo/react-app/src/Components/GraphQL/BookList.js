import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../GraphQLQueries/Query';
import Container from '@material-ui/core/Container';
import ButtonComponent from '../Button';
import TableComponent from '../Table';
import { useHistory } from 'react-router-dom';
import HeaderComponent from '../Header';
import BookImageCard from '../Card';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const BookList = () => {
  let history = useHistory();

  //Fetch Get all books query
  const bookData = useQuery(GET_BOOKS);

  const headerData = [
    { column1: 'Id', column2: 'BookName', column3: 'Genre', column4: 'Author', column5: 'Update', column6: 'Delete' },
  ];

  const Style = {
    table: { width: 600, margin: 20, align: 'center'},
    appBar: { width: 640, height: 50, bgcolor: '#c5cae9', color: '#000000' },
    iconButton: { mr: 2 },
    tablePaper: { width: 640, bgcolor: '#c5cae9' },
  };

  if (bookData.loading) return 'Loading...';
  return (
    <Container fixed>
      <AppBar position="static" sx={Style.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" sx={Style.iconButton}>
            <LibraryBooksIcon />
          </IconButton>
          <HeaderComponent variant="h6">BookList</HeaderComponent>
        </Toolbar>
      </AppBar>

      <Paper sx={Style.tablePaper}>
        <TableComponent bodyData={bookData.data.books} headerData={headerData} style={Style.table}></TableComponent>
      </Paper>

      {/* <ButtonComponent
        variant="contained"
        color="primary"
        onClick={() => {
          history.push('/addbook');
        }}
      >
        AddBook
      </ButtonComponent> */}
      <BookImageCard />
    </Container>
  );
};

export default BookList;
