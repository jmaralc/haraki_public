import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import ImageAvatars from './avatar'
import MenuListComposition from './mainmenu'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  AppBar:{
    margin: 0
  },
};

function HkAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
            <MenuListComposition />
          <Typography variant="title" color="inherit" className={classes.flex}>
            Haraki     
          </Typography>
          <Button color="inherit">Login</Button>
          <ImageAvatars />
        </Toolbar>
      </AppBar>
    </div>
  );
}

HkAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HkAppBar);