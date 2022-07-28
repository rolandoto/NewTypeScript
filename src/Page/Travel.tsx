import { LoginForm } from "../components/LoginForm/LoginForm"
import Title from "../components/Title/Title"
import Usetitle from "../Hooks/UseTitle"

const Travel:React.FC =() =>{

    Usetitle({title:"Travel"})

    return (
        <div className="container" >
             <Title title="Hola, bienvenido, sabemos que quieres viajar en un Travel por favor
                diligencia el siguiente formulario" />
            <LoginForm error={"rosodoka"}  loading={false} />
        </div>
    )

}

export default Travel