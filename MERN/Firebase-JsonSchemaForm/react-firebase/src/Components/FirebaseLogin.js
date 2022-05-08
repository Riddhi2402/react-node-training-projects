import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { auth, signInWithGoogle } from '../Config/firebase';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  photo: {
    margin: theme.spacing(3),
  },
}));

const FirebaseLogin = () => {
  const classes = useStyles();

  const [currentUser, setCurrentUser] = useState(null);
  var unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div>
      {currentUser ? (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Welcome
              </Typography>
              <Button color="inherit" onClick={() => auth.signOut()}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          <Grid className={classes.photo}>
            <img src={currentUser.photoURL} />
          </Grid>
          <Typography variant="h6">Name: {currentUser.displayName}</Typography>
          <Typography variant="h6">Email: {currentUser.email}</Typography>
        </div>
      ) : (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={signInWithGoogle}>
                SIGN IN WITH GOOGLE
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </div>
  );
};

export default FirebaseLogin;
