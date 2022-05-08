import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createUser } from '../../Services/user.service';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';

const UserForm = () => {
  const [file, setFile] = useState(null);

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    description: '',
  });
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const changeHandler = (event) => {
    const newUser = { ...user };
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('firstname', user.firstname);
    formData.append('lastname', user.lastname);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('description', user.description);

    createUser(formData).then(() => {
      enqueueSnackbar('User Created Successfully', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        variant: 'success',
        TransitionComponent: Slide,
      });
      history.push('/');
    });
  };
  return (
    <>
      <Container>
        <Typography variant="h4" color="primary" gutterBottom>
          Create User
        </Typography>
        <form onSubmit={submitHandler}>
          <Grid container>
            <Grid item>
              <Grid container spacing={2} direction="column" justifyContent="space-between">
                <Grid item>
                  <TextField
                    onChange={onFileChange}
                    name="file"
                    size="small"
                    label="File"
                    variant="standard"
                    type="file"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={changeHandler}
                    name="firstname"
                    size="small"
                    label="FirstName"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={changeHandler}
                    name="lastname"
                    size="small"
                    label="LastName"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={changeHandler}
                    name="email"
                    type="email"
                    size="small"
                    label="Email"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={changeHandler}
                    name="password"
                    type="password"
                    size="small"
                    label="Password"
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={changeHandler}
                    name="description"
                    label="Description"
                    size="small"
                    multiline
                    rows={4}
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" size="medium" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default UserForm;
