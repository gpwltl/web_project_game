import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Bar = () => {
    return (
        <>
            <AppBar position="relative" >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <img src={require('../images/logo.png')} />
                    </Typography>
                    <Button variant="contained" color="secondary" float="right">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Bar;