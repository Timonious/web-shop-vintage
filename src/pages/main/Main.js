import React from 'react'
import products from '../../data/product.json'
import {Link} from 'react-router-dom'

export const Main = () => {

    return (
        <>
            <h1>homepage</h1>
            <ul>
                    {products.map((product) => {
                        return (
                            <li key={product.productId}><Link to={`/product/${product.productId}`}>{product.productName}</Link></li>
                        );
                    })
                    }
                </ul>
</>
    )
}
