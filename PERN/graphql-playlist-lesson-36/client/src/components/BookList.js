import React, { useState } from 'react';
import {
  getBooksQuery,
  bookAddedSubscription,
  bookUpdatedSubscription,
  bookDeletedSubscription,
  createUserMutation,
} from '../queries/queries';
import { useQuery, useSubscription, useMutation } from '@apollo/client';
import { Dialog, DialogActions, DialogTitle, DialogContent, InputLabel } from '@mui/material';
import { signInStyle, labelStyle, formStyle } from '../Style';
import ButtonComponent from '../Story/Button';

// components
import BookDetails from './BookDetails';
import InputField from '../Story/TextField';
import AddBook from './AddBook';

const BookList = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [selected, setSelected] = useState(null);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [createUser] = useMutation(createUserMutation);

  const handleClose = (value) => {
    if (value) {
      createUser({
        variables: { email: user.email, password: user.password },
      });
      setLogin(true);
    }
    setOpen(false);
  };

  const changeHandler = (event) => {
    const newUser = { ...user };
    newUser[event.target.type] = event.target.value;
    setUser(newUser);
  };

  const bookData = useQuery(getBooksQuery, {
    fetchPolicy: 'network-only',
  });

  const addSubscription = useSubscription(bookAddedSubscription, {
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      console.log('BookAddedSubscription', data);
      bookData.refetch();
    },
  });

  const updateSubscription = useSubscription(bookUpdatedSubscription, {
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      console.log('bookUpdatedSubscription', data);
      bookData.refetch();
    },
  });

  const deleteSubscription = useSubscription(bookDeletedSubscription, {
    onSubscriptionData: ({ subscriptionData: { data } }) => {
      console.log('bookDeletedSubscription', data);
      bookData.refetch();
    },
  });

  if (bookData.loading) return <div>Loading books...</div>;
  if(login) return 
  return (
    <div>
      <ButtonComponent
        sx={signInStyle}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        SignUp
      </ButtonComponent>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign-Up</DialogTitle>
        <DialogContent>
          <InputLabel sx={labelStyle}>Email</InputLabel>
          <InputField
            type="email"
            sx={formStyle}
            variant="outlined"
            color="secondary"
            size="small"
            onChange={changeHandler}
          />
          <InputLabel sx={labelStyle}>Password</InputLabel>
          <InputField
            type="password"
            sx={formStyle}
            variant="outlined"
            color="secondary"
            size="small"
            onChange={changeHandler}
          />
        </DialogContent>
        <DialogActions>
          <ButtonComponent sx={labelStyle} onClick={() => handleClose(false)}>
            Cancel
          </ButtonComponent>
          <ButtonComponent sx={labelStyle} onClick={() => handleClose(true)}>
            SignUp
          </ButtonComponent>
        </DialogActions>
      </Dialog>
      <h1>Reading List</h1>

      <ul id="book-list">
        {bookData.data.books.map((book) => {
          return (
            <li key={book.id} onClick={() => setSelected(book.id)}>
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails bookId={selected} />
      <AddBook />
    </div>
  );
};

export default BookList;
