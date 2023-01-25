export const initialState = {
    isLoggedIn:false,
    user:null,
    signUpData:{},
    loginData:{},
}

export const loginRequestAction = (data) =>{
    return{
        type: 'LOG_IN_REQUEST',
        data,
    }
}
export const loginSuccessAction = (data) =>{
    return{
        type: 'LOG_IN_SUCCESS',
        data,
    }
}
export const loginFailureAction = (data) =>{
    return{
        type: 'LOG_IN_FAILURE',
        data,
    }
}

export const logoutRequestAction = () =>{
    return{
        type: 'LOG_OUT_REQUEST',
    }
}

export const logoutSuccessAction = () =>{
    return{
        type: 'LOG_OUT_SUCCESS',
    }
}

export const logoutFailureAction = () =>{
    return{
        type: 'LOG_OUT_FAILURE',
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOG_IN' :
            return{
                ...state,
                isLoggedIn:true,
                user : action.data,
            }

        case 'LOG_OUT' :
            return{
                ...state,
                isLoggedIn:false,
                user : null,
            }
        
        default:
            return state;

    }
}

export default reducer;