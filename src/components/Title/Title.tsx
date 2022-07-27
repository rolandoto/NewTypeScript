
interface Title {
    title:string
}

const Title =({title}:Title) =>{

    return (
        <div>
             <span>{title}</span>
        </div>
    )

}

export default Title