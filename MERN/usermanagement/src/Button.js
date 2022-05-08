import React from 'react'
import Button from '@material-ui/core/Button';
import AccessAlarmOutlinedIcon from '@material-ui/icons/AccessAlarmOutlined';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const MyButton = () => {
    return(
        <Container fixed>
            <Grid container>
                <Grid direction="row" justifyContent="flex-start" alignItems="center">
                <AccessAlarmOutlinedIcon />
                <AccessAlarmOutlinedIcon color="primary" fontSize="small"/>
                <AccessAlarmOutlinedIcon color="secondary" fontSize="large"/>
                <AccessAlarmOutlinedIcon color="action" fontSize="small"/>
                <AccessAlarmOutlinedIcon color="error" fontSize="small"/>
                </Grid>    
            </Grid>

            <Typography variant="h3" color="primary">Typography</Typography>
        
            <Box component="span" m={1}>
                <Button variant="contained" color="primary">HelloWorld</Button>        
            </Box>
            <br /><br /><br />
            <div className="spinner-border" role="status" />Loading...
            <div className="spinner-grow" role="status" /> Growing 

        </Container>

        
    );
}

export default MyButton;