import products from '../../data/product.json'
import {useParams , useRouteMatch, Link} from 'react-router-dom'

export const ProductsPage = () => {
    const { id } = useParams();
    useRouteMatch('product-page/:id')
    const groupOfProducts = products.filter(x => x.subCategory === id)
    
    return (
        <>
        <ul>
        {groupOfProducts.map((product) => {
            return(
<li key={product.productId}>
    <Link to={`/product/${product.productId}`}>
    {product.productName}
    </Link>
    </li>
            )
        })}
        </ul></>
    )
}