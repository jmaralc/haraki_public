import React from 'react';
import {withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';



import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import StarsIcon from '@material-ui/icons/Stars';
import EventIcon from '@material-ui/icons/Event'
import SchoolIcon from '@material-ui/icons/School'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import CloseIcon from '@material-ui/icons/Close'
import MultimediaIcon from '@material-ui/icons/CameraAlt'


const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    background: 'secondary',
    marginRight: theme.spacing.unit * 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 30,
  },
});

class MenuListComposition extends React.Component {
  state = {
    open: false,

  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  handleMenu = event => {
    console.log(event.target)
    console.log(`/${event.target.value}`)
    let section = event.currentTarget.attributes.getNamedItem("value").value
    
    this.props.history.push(`/${section}`)
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      
      <div className={classes.root}>
        <div style={{zIndex: 1}}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <MenuIcon />
          </IconButton>

          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', zIndex: 1  }}
              >
                <Paper color="inherit">
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleMenu} value='account'>
                        <ListItemIcon className={classes.icon}>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Mi cuenta" />
                      </MenuItem>
                      <MenuItem onClick={this.handleMenu} value='dojos'>
                        <ListItemIcon className={classes.icon}>
                          <StarsIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Mis dojos" />
                      </MenuItem>
                      <MenuItem onClick={this.handleMenu} value='events'>
                        <ListItemIcon className={classes.icon}>
                          <EventIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Calendario" />
                      </MenuItem>
                      <MenuItem onClick={this.handleMenu} value='statistics'>
                        <ListItemIcon className={classes.icon}>
                          <EqualizerIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Estadisticas" />
                      </MenuItem>
                      <MenuItem onClick={this.handleMenu} value='wikiharaki'>
                        <ListItemIcon className={classes.icon}>
                          <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Conceptos" />
                      </MenuItem>
                      <MenuItem onClick={this.handleMenu} value='multimedia'>
                        <ListItemIcon className={classes.icon}>
                          <MultimediaIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Multimedia" />
                      </MenuItem>
                      <MenuItem onClick={this.handleMenu} value='exit'>
                        <ListItemIcon className={classes.icon}>
                          <CloseIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Salir" />
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withRouter(withStyles(styles)(MenuListComposition))