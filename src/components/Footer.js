import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PinDropIcon from '@material-ui/icons/PinDrop';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:'30px'}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" style={{fontSize:'20px'}}>
           &copy;Qilin Xie 2024
          </Typography>
          <div style={{margin:'auto'}}>
            <PhoneIcon style={{padding:'10px 0 0 10px'}}/> hot-line-customer-service
            <ContactMailIcon style={{padding:'10px 0 0 10px'}}/> storefront-service@gmail.com
            <PinDropIcon style={{padding:'10px 0 0 10px'}} /> Salem,OR & online
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}