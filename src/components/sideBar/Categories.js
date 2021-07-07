import { useState } from 'react'
import { Link } from "react-router-dom";

export const Categories = ({cat, catSub}) => {
const [showSub, toggleShowSub] = useState(false) 
const showSubCat = () => {
    if (showSub) {
        toggleShowSub(false)
    }
    else {
        toggleShowSub(true)
    }
}   
    return (
       
                <li key={cat} onClick={showSubCat}>{cat}
{showSub && 
                <ul>
                    {catSub && catSub.map((sCat) => {
                         return(
                            <li key={sCat}><Link to={`/product-page/${sCat}`}>{sCat}</Link></li>
                        )
                    })}
                    </ul>}
                </li>
           
        
    )
}
