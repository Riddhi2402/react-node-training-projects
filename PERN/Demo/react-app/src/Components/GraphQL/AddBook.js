import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK_MUTATION, GET_BOOKS } from '../../GraphQLQueries/Query';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@material-ui/core/Grid';

const AddBook = () => {
  let history = useHistory();
  const authorData = useQuery(GET_AUTHORS);
  const [book, setBook] = useState({
    id: null,
    name: '',
    genre: '',
    authorId: 1,
  });
  const [addBook, {}] = useMutation(ADD_BOOK_MUTATION);

  const changeHandler = (event) => {
    const newBook = { ...book };
    newBook[event.target.name] = event.target.value;
    setBook(newBook);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(book);
    addBook({
      variables: { id: parseInt(book.id), name: book.name, genre: book.genre, authorId: parseInt(book.authorId) },
      refetchQueries: [{ query: GET_BOOKS }],
    });
    history.push('/');
  };

  if (authorData.loading) return 'Loading...';
  return (
    <Container fixed>
      <Typography variant="h4" gutterBottom>
        Add Book
      </Typography>
      <Grid item>
        <Box component="form" autoComplete="off" onSubmit={submitHandler}>
          <Grid item>
            <TextField onChange={changeHandler} name="id" size="small" label="Id" variant="standard" type="number" />
          </Grid>
          <Grid item>
            <TextField onChange={changeHandler} name="name" size="small" label="Name" variant="standard" type="text" />
          </Grid>
          <Grid item>
            <TextField
              onChange={changeHandler}
              name="genre"
              size="small"
              label="Genre"
              variant="standard"
              type="text"
            />
          </Grid>
          <Grid item>
            <InputLabel>Author</InputLabel>
            <Select variant="standard" name="authorId" size="small" type="number" onChange={changeHandler}>
              {authorData.data.authors.map((author) => {
                return (
                  <MenuItem key={author.id} value={author.id}>
                    {author.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              AddBook
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default AddBook;
