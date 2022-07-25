import React from "react";
import { Sub } from "../types";

interface Props {
    subs:Array<Sub>
}



const List =({subs}:Props) =>{

    return (
        <ul>
            {subs.map(index =>{
                return (
                    <li>
                        <img src={index.avatar} alt={index.nick} />
                        <h4>{index.nick} <small>{index.subMonts}</small> </h4>
                    </li>
                )
            })}
      </ul>
    )

}

export default List