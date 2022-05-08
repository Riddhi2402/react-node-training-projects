import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import { Text } from '../../Assets/constant';


const NewUserForm = () => {

    const classes = useStyles();
    
    return(
        <>
        <Container className={classes.container} maxWidth="xs">
    <Typography variant="h4" color="primary" gutterBottom>{Text.createAccount}</Typography>
    <form>
      <Grid container spacing={3}>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
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
            {Text.signUpButton}
          </Button>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <a href="/">     
            <Typography variant="body2" color="primary">{Text.alreadyRegistered}</Typography>
            </a>
          </Grid>
        </Grid> 
    </form>
  </Container>

        </>
    );
}

export default NewUserForm;