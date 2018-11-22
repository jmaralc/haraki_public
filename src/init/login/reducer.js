import {LOGIN, 
    LOGIN_REQUEST, 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS} from '../../constants/actions'

const initialState = {
    user: {
        loggedIn: false,
        userName: null,
        userInfo:null,
        userRank: null,
        dojoList: null,
        userLevel: null
    },
    login: {
        isLogging: false,
        isLogged: false,
        errorLogin: false,
        lastLogin: null,
        lastLoginInfo: []

    }
  }

  export default (state=initialState, action) =>{
    switch(action.type){
        case LOGIN:
            return {...state,
            }
        case LOGIN_REQUEST:
            return {...state,
                login:{isLogging: true}
            }
        case LOGIN_SUCCESS:
            debugger
            
            return {...state,
                login:{
                    isLogging: false,
                    isLogged: true
                    }
            }
        case LOGIN_FAILURE:
            return {...state,
                login:{
                    isLogging: false,
                    isLogged: false,
                    errorLogin:'un error'
                    }
            }
        default:
            return state
    }
}