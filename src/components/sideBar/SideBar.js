import products from '../../data/product.json'
import { Categories } from './Categories'


export const SideBar = () => {
    const subCat = (mC) => {
          let sC = []
          for (let index = 0; index < products.length; index++) {
             if (mC === products[index].mainCategory) {
                 sC = [...sC, products[index].subCategory] 
             } 
          }
        
          return sC.filter((a, b) => sC.indexOf(a) === b)
      }
    
    const categories = Array.from(new Set(products.map(s => s.mainCategory))).map(mainCategory => {
        return {
            mainCat: mainCategory,
            subCat: subCat(mainCategory)
        }
    })
    return (
        <ul>
        {categories.map((cat) => {
            console.log(cat);
            return(
                <Categories cat={cat.mainCat} catSub={cat.subCat}/>
            )        })}
        </ul>
        
    )
}
