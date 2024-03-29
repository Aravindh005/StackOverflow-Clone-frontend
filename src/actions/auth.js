import * as api from "../api/index"
import {setCurrentUser} from "./currentUser.js"

export const signup =(authData, navigate) => async (dispatch)=>{
    try {
        const { data } = await api.signUp(authData);
        dispatch({ type: 'AUTH', data});
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))));
        
        navigate('/');
    }catch(error){
console.log(error);
    }
}

export const login =(authData, navigate) => async (dispatch)=>{
    try {
        const { data } = await api.logIn(authData);
        dispatch({ type: 'AUTH', data});
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))));
        console.log(JSON.parse(localStorage.getItem('profile'))+"from actions");
        navigate("/");
    }catch(error){
console.log(error);
    }
}