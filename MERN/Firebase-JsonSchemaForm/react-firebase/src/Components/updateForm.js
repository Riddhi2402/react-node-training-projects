import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import { auth, db } from '../Config/FirestoreLiteConfig';
import { useParams, useHistory } from 'react-router-dom';

const UpdateForm = () => {
  const params = useParams();
  const history = useHistory();
  const [user, setUser] = useState({});

  const getUserById = async (id) => {
    const userRef = db.ref(`users/${id}`);
    const userDoc = await userRef.get();
    return { firstname: userDoc.firstname, lastname: userDoc.lastname };
  };

  //useEffect
  useEffect(async () => {
    setUser(await getUserById(params.id));
  }, []);

  //onChangeHandler
  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  //onSubmit
  const onSubmit = async (event) => {
    event.preventDefault();

    const userRef = db.ref(`users/${params.id}`);

    await userRef.set(user);
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

export default UpdateForm;
