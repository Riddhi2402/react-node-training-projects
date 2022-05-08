import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import axios from 'axios';
import { auth, db } from '../Config/FirestoreLiteConfig';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [user, setUser] = useState({ firstname: '', lastname: '' });
  const history = useHistory();

  //onChangeHandler
  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  //onSubmit
  const onSubmit = async (event) => {
    event.preventDefault();
    //For Real-Time DB
    // const { name, email, password } = user;
    // const response = await axios.post(
    //   'https://reactfirebase-c53ef-default-rtdb.asia-southeast1.firebasedatabase.app/userdatabase.json',
    //   { name, email, password }
    // );

    // if (response) {
    //   alert('Data Stored in Firebase');
    // }

    //For FireStore Db
    const userCollection = await db.ref('users');
    await userCollection.add(user);
    history.push('/showlist');
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" color="primary" gutterBottom>
        Fill the Details
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="FirstName"
                  type="text"
                  name="firstname"
                  size="small"
                  variant="outlined"
                  autoComplete="off"
                  onChange={changeHandler}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="LastName"
                  type="text"
                  name="lastname"
                  size="small"
                  variant="outlined"
                  autoComplete="off"
                  onChange={changeHandler}
                  required
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
