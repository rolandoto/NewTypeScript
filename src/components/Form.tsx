import { useReducer, useState } from "react"
import useNewSubForm from "../hooks/UseNewsForm"
import { Sub } from "../types"


interface FormProps {
    onNewSub:(newSub:Sub) => void
}

const Form =({onNewSub}:FormProps) =>{

    //const [inputValues,setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const [InputValues,dispatch] = useNewSubForm()


    const handSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault()
            onNewSub(InputValues)
            handClear()
    }


    const handLechange =(e:React.ChangeEvent<HTMLInputElement>) =>{

        const {value,name} =e.target
        dispatch({
            type:"Change_value"
            ,payload:{
                inputName:name,
                inputValue:value
            }
        })
    }

    const handClear  =() =>{    
        dispatch({
            type:"Clear"
        })
    }



    return (

        <form onSubmit={handSubmit} >
            <input onChange={handLechange} value={InputValues.nick} type="text" name="nick"  placeholder="nick"  />
            <input  onChange={handLechange} value={InputValues.subMonts} type="number" name="subMonts" placeholder="subMonts"  />
            <input  onChange={handLechange} value={InputValues.avatar} type="text" name="avatar"  placeholder="avatar"  />
            <button type="button" onClick={handClear} >Claer form</button>
            <button type="submit" >Sub new sub</button>
        </form>
    )

}

export default Form