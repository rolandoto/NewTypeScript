import React, { useEffect } from 'react'
import { LoginForm } from '../components/LoginForm/LoginForm'
import Title from '../components/Title/Title'

const Vivair: React.FC =() =>{

    return (
        <div className="container" >
            <Title title='bienvenido, sabemos que quieres viajar en un Vavair por favor
                diligencia el siguiente formulario' />
            <LoginForm error={"rosodoka"}  loading={false} />
        </div>
    )
}

export default Vivair