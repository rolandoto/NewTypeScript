import { useReducer } from "react"
import { Sub } from "../types"



const INITIAL_STATE={
    nick:"",
   subMonts:0,
   avatar:""
}

interface FormState {
    inputValues: Sub
}

type FomrReducerAction ={
    type:"Change_value",
    payload:{
        inputName:string,
        inputValue:string
    }
}
| {
    type:"Clear"
   } 


   const formReducer =(state:FormState["inputValues"],action:FomrReducerAction) =>{

    switch(action.type){
        case "Change_value":
            const {inputName,inputValue} = action.payload

            return {
                ...state,
                [inputName]:inputValue
            }
        case "Clear" :
            return INITIAL_STATE
    }
    
}


const useNewSubForm =() =>{
        return useReducer(formReducer,INITIAL_STATE)
}

export default useNewSubForm