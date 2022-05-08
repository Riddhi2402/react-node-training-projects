import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { editUser } from '../../Services/user.service';
import { useParams, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';

const EditForm = () => {
  const params = useParams();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState({});

  const changeHandler = (event) => {
    const newUser = { ...user };
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    editUser(params.id, user).then(() => {
      enqueueSnackbar('User Updated Successfully', {
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
          Update User
        </Typography>
        <form onSubmit={submitHandler}>
          <Grid container>
            <Grid item>
              <Grid container spacing={2} direction="column" justifyContent="space-between">
                <Grid item>
                  <TextField
                    onChange={changeHandler}
                    name="firstname"
                    size="small"
                    label="FirstName"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={changeHandler}
                    name="lastname"
                    size="small"
                    label="LastName"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={changeHandler}
                    name="email"
                    type="email"
                    size="small"
                    label="Email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={changeHandler}
                    name="password"
                    type="password"
                    size="small"
                    label="Password"
                    variant="outlined"
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
                <Button fullWidth type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default EditForm;
