import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";

import Grid from '@material-ui/core/Grid';

import * as actions from './actions'
import InitialPaper from './initialPaper'
import LoadingPage from './loadingPage'
import ExplanationSection from './explanationSection'


const styles = theme => ({
    mainDiv: {
        display:'flex',
        direction: 'column',
        justify:'flex-start'

    },
})

class Login extends React.Component {
    state = {
    }

    render(){
        const { loadingState } = this.props;
        const toReturn = ()=> 
            loadingState? <LoadingPage />:
                <div>
                    <ExplanationSection />
                    <InitialPaper
                    dispatch={this.props.dispatch}
                    loginAction={actions.login}
                    />
                </div>
        
        return(
            <div className='mainDiv'>
                <Grid container spacing={0}  justify="center" >
                    <Grid item xs={'auto'}>
                    {
                        toReturn()
                    }
                    </Grid>
                </Grid>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        loadingState: state.loginReducer.login.isLogging,
        loginState: state.loginReducer.login.isLogged,
        errorLogin: state.loginReducer.login.errorLogin
    }
  }

export default withStyles(styles)(connect(mapStateToProps)(Login));