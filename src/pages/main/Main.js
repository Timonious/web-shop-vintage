import React from 'react'
import products from '../../data/product.json'
import {Link} from 'react-router-dom'

export const Main = () => {

    return (
        <>
            <h1>homepage</h1>
            <p>Sit exercitation ex nostrud elit proident proident sint duis velit laborum nisi. Labore aliqua voluptate aliquip laboris consequat irure qui velit. Aliquip culpa Lorem aute minim non laborum elit ex ea labore id ipsum. Sint velit duis dolor sunt deserunt in quis anim irure ipsum nulla. Nulla reprehenderit sit irure qui amet ex eiusmod irure do duis. Duis ea do consequat quis quis duis officia laborum velit enim fugiat cillum.</p>
            <p>newest products</p>
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
