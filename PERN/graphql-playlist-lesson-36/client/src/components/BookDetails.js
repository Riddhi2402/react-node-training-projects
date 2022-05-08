import React, { useState } from 'react';
import {
  getBookQuery,
  getBooksQuery,
  getAuthorsQuery,
  deleteBookMutation,
  updateBookMutation,
} from '../queries/queries';
import { useQuery, useMutation } from '@apollo/client';
import { Stack, Dialog, DialogActions, DialogTitle, DialogContent, MenuItem, InputLabel } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { buttonStyle, stackStyle, textStyle, formStyle, labelStyle } from '../Style';
import ButtonComponent from '../Story/Button';
import TextComponent from '../Story/Typography';
import InputField from '../Story/TextField';
import SelectField from '../Story/Select';

//Component
const BookDetails = (props) => {
  const { bookId } = props;

  //useQuery
  const book = useQuery(getBookQuery, { variables: { id: bookId } });
  const authorData = useQuery(getAuthorsQuery);

  //set bookObject
  const [bookObject, setBookObject] = useState({ name: '', genre: '', authorId: '' });

  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  //use Mutation
  const [deleteBook, {}] = useMutation(deleteBookMutation, {
    update(cache, { data: { deleteBook } }) {
      console.log('deleteBook===>', deleteBook);
      const identity = cache.identify(deleteBook);
      console.log('identity=====>', identity);
      cache.evict({ id: identity });
    },
  });

  const [updateBook, {}] = useMutation(updateBookMutation);

  //handle Form Dialog onOpen
  const handleFormOpen = () => {
    setOpenForm(true);
    if (book && book.data && book.data.book) {
      setBookObject({ name: book.data.book.name, genre: book.data.book.genre, authorId: book.data.book.author.id });
    }
  };

  //handle Form Dialog onClose
  const handleFormClose = (value, id) => {
    setOpenForm(false);
    if (value) {
      updateBook({
        variables: { id: id, name: bookObject.name, genre: bookObject.genre, authorId: bookObject.authorId },
        refetchQueries: [{ query: getBooksQuery }],
      });
      book.refetch();
    }
  };

  //handle Delete Dialog onOpen
  const handleClickOpen = () => {
    setOpen(true);
  };

  //handle Delete Dialog onClose
  const handleClose = (value, id) => {
    setOpen(false);
    if (value) {
      deleteBook({ variables: { id: id }, refetchQueries: [{ query: getBooksQuery }] });
      book.refetch();
    }
  };

  //onChange handler
  const changeHandler = (event) => {
    const newBook = { ...bookObject };
    newBook[event.target.name] = event.target.value;
    setBookObject(newBook);
  };

  //displayBookDetails Function
  const displayBookDetails = () => {
    if (book && book.data && book.data.book) {
      return (
        <div>
          {/* Show book details */}
          <TextComponent variant="h4" sx={textStyle}>
            {book.data.book.name}
          </TextComponent>
          <Stack spacing={1} direction="row">
            <TextComponent variant="subtitle1" sx={textStyle}>
              Genre
            </TextComponent>
            <TextComponent variant="subtitle1">-</TextComponent>
            <TextComponent variant="subtitle1" sx={textStyle}>
              {book.data.book.genre}
            </TextComponent>
          </Stack>
          <Stack spacing={1} direction="row">
            <TextComponent variant="subtitle1" sx={textStyle}>
              Author
            </TextComponent>
            <TextComponent variant="subtitle1">-</TextComponent>
            <TextComponent variant="subtitle1" sx={textStyle}>
              {book.data.book.author.name}
            </TextComponent>
          </Stack>
          <TextComponent variant="h6" sx={textStyle}>
            All books by this author:
          </TextComponent>
          {book.data.book.author.books.map((item) => {
            return (
              <Stack key={item.id} spacing={1} direction="row">
                <ArrowRightIcon />
                <TextComponent key={item.id} sx={textStyle}>
                  {item.name}
                </TextComponent>
              </Stack>
            );
          })}

          {/* Update & Delete Button */}
          <Stack spacing={2} direction="row" sx={stackStyle}>
            <ButtonComponent sx={buttonStyle} variant="outlined" onClick={handleFormOpen}>
              Update
            </ButtonComponent>
            <ButtonComponent sx={buttonStyle} variant="outlined" onClick={handleClickOpen}>
              Delete
            </ButtonComponent>
          </Stack>
          {/* Delete Dialog */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{'Are You Sure?'}</DialogTitle>
            <DialogActions>
              <ButtonComponent sx={labelStyle} value={false} onClick={(event) => handleClose(false)}>
                No
              </ButtonComponent>
              <ButtonComponent sx={labelStyle} onClick={(event) => handleClose(true, book.data.book.id)}>
                Yes
              </ButtonComponent>
            </DialogActions>
          </Dialog>

          {/* Update Form Dialog */}
          <Dialog open={openForm}>
            <DialogTitle sx={textStyle}>Update Details</DialogTitle>
            <DialogContent>
              <InputLabel sx={labelStyle}>BookName</InputLabel>
              <InputField
                defaultValue={book.data.book.name}
                name="name"
                type="text"
                sx={formStyle}
                variant="outlined"
                color="secondary"
                size="small"
                onChange={changeHandler}
              />
              <InputLabel sx={labelStyle}>Genre</InputLabel>
              <InputField
                defaultValue={book.data.book.genre}
                name="genre"
                type="text"
                sx={formStyle}
                variant="outlined"
                color="secondary"
                size="small"
                onChange={changeHandler}
              />
              <InputLabel sx={labelStyle}>Author</InputLabel>
              <SelectField
                defaultValue={book.data.book.author.id}
                name="authorId"
                type="text"
                sx={formStyle}
                variant="outlined"
                color="secondary"
                size="small"
                onChange={changeHandler}
              >
                <MenuItem>Select author</MenuItem>
                {authorData.data.authors.map((author) => {
                  return (
                    <MenuItem key={author.id} value={author.id}>
                      {author.name}
                    </MenuItem>
                  );
                })}
              </SelectField>
            </DialogContent>
            <DialogActions>
              <ButtonComponent sx={labelStyle} onClick={(event) => handleFormClose(false)}>
                Cancel
              </ButtonComponent>
              <ButtonComponent sx={labelStyle} onClick={(event) => handleFormClose(true, book.data.book.id)}>
                Update
              </ButtonComponent>
            </DialogActions>
          </Dialog>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };
  return <div id="book-details">{displayBookDetails()}</div>;
};

export default BookDetails;
