import React from 'react';
import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useStyles from './style';
import Typography from '@material-ui/core/Typography';
import { Text } from '../../Assets/constant';


function LoginForm() {

  const[user,setUser] = useState({email: "",password: ""});

  const[records,setRecords] = useState([]);

  const classes = useStyles();
  
  //onSubmit
  const onSubmit = (event) => {
    event.preventDefault();
    const UserRecord = {...user};
    console.log(records);
    setRecords([...records,UserRecord]);
  }
  
  //onChangeHandler
  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({...user,[name]: value});
  }
  

  return (
<>
    <Container className={classes.container} maxWidth="xs">
    <Typography variant="h4" color="primary" gutterBottom>Login Page</Typography>
    <form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={changeHandler}
                fullWidth
                label="Email"
                name="email"
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={changeHandler}
                fullWidth
                label="Password"
                name="password"
                size="small"
                type="password"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" fullWidth type="submit" variant="contained">
            {Text.loginButton}
          </Button>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <a href="/newuserform">     
            <Typography variant="body2" color="primary">{Text.createAccount}</Typography>
            </a>
          </Grid>
        </Grid> 
    </form>
  </Container>
  </>
  );
}

export default LoginForm;
