import React,{ useReducer } from "react";

const initialState = {id: 0,firstname: "",lastname: "",contactno: 0};

const reducer = (state,action) => {
    if(action.type === "id"){
        return {...state,id:1};
    }
    if(action.type === "firstname"){
        return {...state,firstname:"Riddhi"};
    }
    if(action.type === "lastname"){
        return {...state,lastname:"Pethani"};
    }
    if(action.type === "contactno"){
        return {...state,contactno:987654321};
    }
}

const UseReducer = () => {
    
const [state, dispatch] = useReducer(reducer, initialState);

return(
    <div>
    <br /><br /><h4>{state.id},{state.firstname},{state.lastname},{state.contactno}</h4>
    <button onClick={() => dispatch({type: 'id'})}>id</button>
    <button onClick={() => dispatch({type: 'firstname'})}>firstname</button>
    <button onClick={() => dispatch({type: 'lastname'})}>lastname</button>
    <button onClick={() => dispatch({type: 'contactno'})}>contactno</button>

    </div>
);
}

export default UseReducer;