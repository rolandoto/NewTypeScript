import React, { useEffect } from 'react'
import { LoginForm } from '../components/LoginForm/LoginForm'
import Title from '../components/Title/Title'
import Usetitle from '../Hooks/UseTitle'

const Vivair: React.FC =() =>{

    Usetitle({title:"Vivair"})

    return (
        <div className="container" >
            <Title title='bienvenido, sabemos que quieres viajar en un Vivair por favor
                diligencia el siguiente formulario' />
            <LoginForm error={"rosodoka"}  loading={false} />
        </div>
    )
}

export default Vivair
