import React from 'react'
import {useParams , useRouteMatch} from 'react-router-dom'
import products from '../../data/product.json'

export const Product = () => {
    const { id } = useParams();
    useRouteMatch('product/:id')
    const i = products.findIndex(x => x.productId === id)

const {
    productName,
    brandName,
    size,
    price,
    quantity,
    condition,
    material
    } = products[i]
return (
        <>
            <h1>{productName}</h1>
            <h3>{brandName}</h3>
            <p>{price}</p>
            <ul>
                {size && <li>maat: {size}</li>}
                {condition && <li>staat: {condition}</li>}
                {material && <li>materiaal: {material}</li>}
                {quantity > 1 &&<li>voorraad: {quantity}</li>}


            </ul>
        </>
    )

}