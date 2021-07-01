import products from '../../data/product.json'


export const SideBar = () => {

      
    
    // const mainCategories = [...new Set(products.map(x => x.mainCategory))]
    // console.log(mainCategories);

    const categories = Array.from(new Set(products.map(s => s.mainCategory))).map(mainCategory => {
        return {
            mainCat: mainCategory,
            subCat:  products.map(a => a.mainCategory).subCategory
            // subCat: [...new Set(products.map(x => x.subCategory))]
            // products.find(s => s.mainCategory === mainCategory).subCategory
        }
    })

    

    console.log(categories);
    return (
        <ul>
        {categories.map((cat) => {
            console.log(cat);
            return(
                <li key={cat.mainCat}>{cat.mainCat}</li>
            )        })}
        </ul>
    )
}
