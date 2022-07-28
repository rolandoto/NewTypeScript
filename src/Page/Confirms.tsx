import Title from "../components/Title/Title"
import Usetitle from "../Hooks/UseTitle"

const Success :React.FC =() =>{
    
    Usetitle({title:"Confirms"})

    return (
        <div className="container" >
            <Title title='Exitoso' />
        </div>
    )
}

export default Success