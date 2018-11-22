import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

import EmailIcon from "@material-ui/icons/Email";
import PasswLock from "@material-ui/icons/Lock";
import AccountCircle from "@material-ui/icons/AccountCircle";


import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from '@material-ui/core/Chip';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import Fade from "@material-ui/core/Fade";

import { emailRegex, userRegex } from "../../constants/regex";
import { dojos as dojosAikido } from "../../constants/dojos";
import FacebookLoginComponent from "./facebookLogin"

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        direction:'column',
    },
    badge: {
        width: 50,
        height: 50,
        fontSize: 20,
        top: -50,
        right: -50,
        // The border color match the background color.
        border: `2px solid ${
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
        }`,
    },
    paper: {   
        marginBottom: 50,
        marginTop: 50,
        marginLeft: 25,
        marginRight: 25,
        padding: theme.spacing.unit * 2,
        textAlign: "center"
    },
    formDiv: {
        display: "block",
        textAlign: "left"
    },
    textField: {
        display: "block",
        marginLeft: 10,
        marginRight: 10,
        margin: 50
    },
    button: {
        display: "inline",
        margin: theme.spacing.unit
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    chips: {
        display: "flex",
        flexWrap: "wrap"
    },
    chip: {
        margin: theme.spacing.unit / 4
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 500,
    },
  },
};


class initialPaper extends React.Component {
  state = {
    emailValue: "",
    emailValid: false,
    passwordValue: "",
    passwordValid: false,
    unameValue: "",
    unameValid: false,
    isLogin: true,
    level: null,
    dojos: []
  };

  handleSignUp = () => {
    let localstate = { ...this.state };
    this.setState({ isLogin: !localstate.isLogin });
  };

  handleChangeLevel = event => {
    this.setState({ level: event.target.value });
  };

  handleChangeDojos = event => {
    this.setState({ dojos: event.target.value });
  };

  handleChangeUsername = ({ target }) => {
    let value = target.value;
    let notAllowedChars = userRegex.test(value);
    let localstate = { ...this.state };

    notAllowedChars
      ? (localstate.unameValid = false)
      : (localstate.unameValid = true);
    localstate.unameValue = value;

    this.setState(localstate);
  };

  handleChangePassword = ({ target }) => {
    let value = target.value;
    let regex = /[^a-zA-Z\d\s:\u00C0-\u00FF]/g;
    let notAllowedChars = value.match(regex);
    let localstate = { ...this.state };

    notAllowedChars
      ? (localstate.passwordValid = false)
      : (localstate.passwordValid = true);
    localstate.passwordValue = value;

    this.setState(localstate);
  };

  handleChangeEmail = ({ target }) => {
    let value = target.value;
    let notAllowedChars = !emailRegex.test(value);
    let localstate = { ...this.state };

    notAllowedChars
      ? (localstate.emailValid = false)
      : (localstate.emailValid = true);
    localstate.emailValue = value;

    this.setState(localstate);
  };

  render() {
    const { classes, dispatch, loginAction } = this.props;
    const {
      emailValue,
      emailValid,
      passwordValue,
      passwordValid,
      unameValid,
      unameValue,
      isLogin,
      level,
      dojos
    } = this.state;

    let errorMail = false;
    if (!emailValid && emailValue.length !== 0) {
      errorMail = (
        <FormHelperText id="component-error-text" error={true}>
          So far the email does not looks correct...
        </FormHelperText>
      );
    }

    let errorPassword = false;
    if (!passwordValid && passwordValue.length !== 0) {
      errorPassword = (
        <FormHelperText id="component-error-text" error={true}>
          {" "}
          Remember just digits, capitals and numbers{" "}
        </FormHelperText>
      );
    }

    let errorUsername = false;
    if (!unameValid && unameValue.length !== 0) {
        errorUsername = (
        <FormHelperText id="component-error-text" error={true}>
          {" "}
          Remember just digits, capitals and numbers{" "}
        </FormHelperText>
      );
    }

    let loginButtonDisabled =
      !(emailValid && passwordValid) ||
      !(emailValue.length > 0 && passwordValue.length > 0);
    
    let signupButtonDisabled = !(emailValid && passwordValid &&unameValid) ||
      !(emailValue.length > 0 && passwordValue.length > 0 && unameValue.length > 0) ||
      !(dojos.length>0) || !level;

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
            <Badge badgeContent={'Beta'} color="primary" classes={{ badge: classes.badge }}>
            <div></div>
            </Badge>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <div>
                <Typography variant="h1" component="h1" gutterBottom>
                  おねがいします, welcome to Haraki
                </Typography>
                <Typography variant="h2" gutterBottom>
                  Provide your email and password to log in.
                </Typography>
                <Typography variant="h2" gutterBottom>
                  Or use your preferred social media to enter the app
                </Typography>
                <FacebookLoginComponent />
                <form
                  noValidate
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
                >
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={!isLogin}
                          onChange={this.handleSignUp}
                          color="primary"
                          labelPlacement="bottom"
                        />
                      }
                      label="Not registered yet? Proceed with the registration"
                      labelPlacement="bottom"
                    />
                  </FormGroup>
                  <FormControl className={classes.textField}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      type="email"
                      placeholder="mymail@example.com"
                      minLength="6"
                      maxLength="64"
                      title="Please provide only email address like micorreo@ejemplo.com"
                      id="email"
                      label="Email"
                      autoFocus
                      value={this.state.nameValue}
                      onChange={this.handleChangeEmail}
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">
                          <EmailIcon color="primary" />
                        </InputAdornment>
                      }
                    />
                    {errorMail}
                  </FormControl>

                  <FormControl className={classes.textField}>
                    <InputLabel htmlFor="upassword">User Password</InputLabel>
                    <Input
                      id="upassword"
                      label="User password"
                      placeholder="mysecret"
                      autoFocus
                      value={this.state.passwordValue}
                      type="password"
                      onChange={this.handleChangePassword}
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">
                          <PasswLock color="primary" />
                        </InputAdornment>
                      }
                    />
                    {errorPassword}
                  </FormControl>
                  {isLogin ? (
                    <Fade in={isLogin} style={{ transitionDelay: 100 }}>
                      <div>
                      <Button
                        id="loginbutton"
                        type="submit"
                        variant="contained"
                        className={classes.button}
                        disabled={loginButtonDisabled}
                        onClick={() =>
                          dispatch(
                            loginAction(this.state)
                          )
                        }
                        color="primary"
                      >
                        Log in
                      </Button>
                      </div>
                    </Fade>
                  ) : null}

                  {!isLogin ? (
                    <div>
                      <Fade in={!isLogin} style={{ transitionDelay: 100 }}>
                        <FormControl className={classes.textField}>
                          <InputLabel htmlFor="uname">User Name</InputLabel>
                          <Input
                            type="uname"
                            placeholder="Bruce Lee"
                            id="uname"
                            label="User Name"
                            value={this.state.nameValue}
                            onChange={this.handleChangeUsername}
                            fullWidth
                            startAdornment={
                              <InputAdornment position="start">
                                <AccountCircle color="primary" />
                              </InputAdornment>
                            }
                          />
                           {errorUsername}
                        </FormControl>
                      </Fade>
                      <Fade in={!isLogin} style={{ transitionDelay: 100 }}>
                        <div className={classes.formDiv}>
                          <FormLabel component="legend">
                            What kind of aikidoka are you?
                          </FormLabel>
                          <RadioGroup
                            aria-label="level"
                            name="level"
                            className={classes.group}
                            value={this.state.level}
                            onChange={this.handleChangeLevel}
                          >
                            <FormControlLabel
                              value="practitioner"
                              control={<Radio color="primary" />}
                              label="Practitioner"
                            />

                            <FormControlLabel
                              value="teacher"
                              control={<Radio color="primary" />}
                              label="Teacher"
                            />
                          </RadioGroup>
                        </div>
                      </Fade>
                      <Fade in={!isLogin} style={{ transitionDelay: 100 }}>
                        <div className={classes.formDiv}>
                          <FormLabel component="legend">
                            At which dojos?
                          </FormLabel>
                          <FormControl className={classes.formControl}>
                            <Select
                              name="Dojos"
                              className={classes.selectEmpty}
                              autoWidth
                              multiple
                              displayEmpty
                              MenuProps={MenuProps}
                              value={this.state.dojos}
                              onChange={this.handleChangeDojos}
                              input={<Input id="select-multiple-placeholder" />}
                              renderValue={selected => {
                                if(selected.length===0){return(<em>Select your usual dojos...</em>)}

                                return(
                                <div className={classes.chips}>
                                  {selected.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                  ))}
                                </div>
                                )
                                }}
                            >
                                <MenuItem disabled value="">
                                    <em>Select your usual dojos...</em>
                                </MenuItem>
                                {dojosAikido.map(dojo => (
                                    <MenuItem
                                    key={dojo}
                                    value={dojo}
                                    >
                                        <Checkbox 
                                        checked={this.state.dojos.indexOf(dojo) > -1} 
                                        color="primary"/>
                                        <ListItemText primary={dojo} />
                                    </MenuItem>
                                ))}
                            </Select>
                          </FormControl>
                        </div>
                      </Fade>
                      <Fade in={!isLogin} style={{ transitionDelay: 100 }}>
                      <Button
                        id="signupbutton"
                        type="submit"
                        variant="contained"
                        className={classes.button}
                        disabled={signupButtonDisabled}
                        onClick={() =>
                          dispatch(
                            loginAction(this.state)
                          )
                        }
                        color="primary"
                      >
                        Sign up
                      </Button>
                    </Fade>
                    </div>
                  ) : null}
                </form>
              </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(initialPaper);
