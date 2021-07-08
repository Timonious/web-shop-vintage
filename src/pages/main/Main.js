import React from 'react'
import products from '../../data/product.json'
import {Link} from 'react-router-dom'

export const Main = () => {
let newestProducts = products
newestProducts.sort(function (a, b) {
    return b.dateAdded - a.dateAdded;
  });

console.log(newestProducts);
    return (
        <>
            <h1>homepage</h1>
            <p>Sit exercitation ex nostrud elit proident proident sint duis velit laborum nisi. Labore aliqua voluptate aliquip laboris consequat irure qui velit. Aliquip culpa Lorem aute minim non laborum elit ex ea labore id ipsum. Sint velit duis dolor sunt deserunt in quis anim irure ipsum nulla. Nulla reprehenderit sit irure qui amet ex eiusmod irure do duis. Duis ea do consequat quis quis duis officia laborum velit enim fugiat cillum.</p>
            <p>newest products</p>
            <ul>
                            <li key={newestProducts[0].productId}><Link to={`/product/${newestProducts[0].productId}`}>{newestProducts[0].productName}</Link></li>
                            <li key={newestProducts[1].productId}><Link to={`/product/${newestProducts[1].productId}`}>{newestProducts[1].productName}</Link></li>
                            <li key={newestProducts[2].productId}><Link to={`/product/${newestProducts[2].productId}`}>{newestProducts[2].productName}</Link></li>  
                </ul>

                <p>Kiek deze foto van dropbox es daaaaannnnnn</p>

                <img alt='picapica' src="https://www.dropbox.com/s/2iiemrm036uq2lw/IMG-20200929-WA0010.jpg"/>
</>
    )
}
