import React from 'react'
import {useParams , useRouteMatch} from 'react-router-dom'
import products from '../../data/product.json'

export const Product = () => {
    const { id } = useParams();
    useRouteMatch('product/:id')
    const i = products.findIndex(x => x.productId === id)

const {
        productId,
    dateAdded,
    productName,
    brandName,
    size,
    price,
    quantity,
    categories,
    condition,
    material
    } = products[i]
return (
        <>
            <h1>{productName}</h1>
            <h3>{brandName}</h3>
            <p>{price}</p>
            <ul>
                <li>maat: {size}</li>
                {quantity > 1 &&
                <li>voorraad: {quantity}</li>
                }


            </ul>
        </>
    )

}