import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 20,
    color: 'primary'
  },
});

function LoadingPage(props) {
  const { classes } = props;
  return (
    <div>
        <CircularProgress 
        className={classes.progress} 
        thickness={0.5}
        size={200}
        />
    </div>
  );
}

LoadingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPage);