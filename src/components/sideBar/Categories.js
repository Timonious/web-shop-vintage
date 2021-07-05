import { useState } from 'react'


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
                            <li key={sCat}>{sCat}</li>
                        )
                    })}
                    </ul>}
                </li>
           
        
    )
}
