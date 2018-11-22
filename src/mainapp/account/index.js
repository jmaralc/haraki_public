import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        palette: {
            background: {
                paper: 'black'
            },
        },
        marginTop:20,
        marginLeft: 100,
        marginRight: 100,
        padding: 30
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        margin: 'outlined'
    },
});


class UserData extends React.Component {
    state = {
        name: 'Your Name',
        surname: 'Your Surname',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      };
    
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };
    
    render() {
        const { classes } = this.props;
    
        return (
            <Paper className={classes.root}>
                <Typography variant='h1' component='h1' gutterBottom>
                Your personal data
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    />
                    <TextField
                    id="surname"
                    label="Surname"
                    className={classes.textField}
                    value={this.state.surname}
                    onChange={this.handleChange('surname')}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    />
                    <TextField
                    id="userName"
                    label="User Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('userName')}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    />
                </form>
            </Paper>
        )
    }
}  


export default withStyles(styles)(UserData);