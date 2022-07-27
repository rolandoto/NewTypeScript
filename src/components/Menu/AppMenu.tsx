import React from "react"
import { Link } from "react-router-dom";

export interface Su {
    name: string;
    path:string
}

const AppMenu:React.FC<Su> = (props) =>{

    return (
        <li><Link to={`${props.path}`} >{props.name}</Link></li>
    )
}

export default AppMenu