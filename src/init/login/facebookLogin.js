/*global FB*/
import React from 'react';
import {FB_APP_ID} from '../../constants/facebookLogin'

class FacebookLoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

    loadFbLoginApi() {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : FB_APP_ID,
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v3.2'
            });
        };

        console.log("Loading fb api");
        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); 
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }



    componentDidMount() {
        this.loadFbLoginApi()
    }


    testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
        });
    }

    statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
        this.testAPI();
        } else if (response.status === 'not_authorized') {
            console.log("Please log into this app.");
        } else {
            console.log("Please log into this facebook.");
        }
    }

    checkLoginState() {
      FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }

    handleFBLogin() {
        debugger
        FB.login(this.checkLoginState());
        }
    
    loginWithFacebook =()=>{
        debugger
        if(!this.isLoggedInFacebook()){
            FB.login(function(response) {
                if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
                });
                } else {
                console.log('User cancelled login or did not fully authorize.');
                }
            });
        }
    }

    render() {
        return (
            <div id="fb-root">
            <div class="fb-login-button" 
            data-max-rows="1" 
            data-size="small" 
            data-button-type="continue_with" 
            data-show-faces="false" 
            data-auto-logout-link="false" 
            data-use-continue-as="false">
            </div>
            </div>
    )}
}

export default FacebookLoginComponent;