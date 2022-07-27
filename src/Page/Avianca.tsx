import React from "react"
import { LoginForm } from "../components/LoginForm/LoginForm"
import Title from "../components/Title/Title"

const Avianca:React.FC=() =>{

    return (
        <div className="container" >    
            <Title title="Hola, bienvenido, sabemos que quieres viajar en un Avianca por favor
                diligencia el siguiente formulario" />
            <LoginForm  loading={false} />
        </div>
    )
}

export default Avianca