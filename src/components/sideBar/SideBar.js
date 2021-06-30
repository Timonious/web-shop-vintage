import products from '../../data/product.json'


export const SideBar = () => {
    return (
        <ul>
        {products.map((product) => {
            return(
                <li key={product.productId}>{product.mainCategory}</li>
            )        })}
        </ul>
    )
}
