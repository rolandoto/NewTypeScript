import React, { useEffect, useRef } from "react"

interface title {
    title:string
}

const Usetitle =({title}:title) =>{
    //aqui esta capturando el title original
    const preveTitle = useRef(document.title)
    
    useEffect(() =>{
        
        async function run() {
            
            const previusTitle = preveTitle.current
        
            document.title = `${title} | itglobers`
            return ()=> document.title = previusTitle
          }
        
          run();
        
    },[title])

}
export default Usetitle