import { Sub } from "../../types"
import AppMenu from "./AppMenu"
import { useEffect, useState } from "react"
import initalState from "../../db.json"


const Menu:React.FC =() =>{

    const [state,setSatate] = useState<Array<Sub>>([])

    useEffect(() =>{
        setSatate(initalState.initalState.menu)
    },[])

    return (
   
        <div>
            <nav> 
                <ul>        
                    {state.map((index,e) => (
                        <AppMenu {...index} key={e} />
                    ))} 
                </ul>  
            </nav>       
        </div>
    )

}

export default Menu