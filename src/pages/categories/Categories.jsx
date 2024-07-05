import Category from "../../components/Category/Category"
import "./Categories.css";
import { useContext, useState, useEffect} from "react";
import { ProductContext } from "../../context/ContextProvider";

const Categories = () => {
    const {products} = useContext(ProductContext)
    const [categories, setCategories] = useState([])

    useEffect(()=>{
      const values = products.map((e)=>{
        return {cat: e.category, img: e.img}
      })
      const singleCat = values.reduce()
    }, [])
  return (
    <div className="Categories-Container">
        {
            categories.map((e, i)=> (
                <Category key={i}/>
            ))
        }
    </div>
  )
}

export default Categories