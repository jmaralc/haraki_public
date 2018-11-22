//import fetch from 'cross-fetch'
import { LOGIN_REQUEST, 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS} from '../../constants/actions'

import {poolData} from '../../constants/awsConstants'
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';


const  loginRequest = (username,passw) => {
    return {
        type: LOGIN_REQUEST,
        username,
        passw
    } 
}


const  loginFailure = (username,passw) => {
    return {
        type: LOGIN_FAILURE,
        username,
        passw
    } 
}

const  loginSuccess = (username,passw,json) => {
    window.localStorage.setItem("loggedIn", true)
    return {
        type: LOGIN_SUCCESS,
        username,
        passw,
        json
    } 
}

export const  login = (dataFromForm) => {

    debugger
    let username=dataFromForm.unameValue
    let passw=dataFromForm.passwordValue
    
    var dataEmail = {
        Name : 'email',
        Value : dataFromForm.emailValue
    };

    var attributeList = [];
    var userPool = new CognitoUserPool(poolData);

    var attributeEmail = new CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    
    return  (dispatch)=>{
        dispatch(loginRequest(username,passw))

        userPool.signUp(username, 
            passw, 
            attributeList,
            null, 
            (err, result)=>{
                if (err) {

                    alert(err.message || JSON.stringify(err));
                    dispatch(loginFailure(username,passw))
                    return;
                }
                console.log(result)
                let cognitoUser = result.user;
                console.log('user name is ' + cognitoUser.getUsername());
                dispatch(loginSuccess(username,passw,result))
        })

        // return fetch('https://randomuser.me/api/')
        //     .then(response=> response.json(),
        //     error=>console.log('An error occurred', error)
        // )
        // .then(json=> dispatch(loginSuccess(username,passw,json)))
        
    }
}