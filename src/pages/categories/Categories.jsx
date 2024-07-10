import Category from "../../components/Category/Category"
import "./Categories.css";
import { useContext, useState, useEffect} from "react";
import { ProductContext as Aisha } from "../../context/ContextProvider";

const Categories = () => {
    const {products} = useContext(Aisha)
    const [categories, setCategories] = useState([])

    useEffect(()=>{
      const values = products.map((e)=>{
        return {cat: e.category, img: e.image}
      })
      const singleCat = values.reduce((p, e, i)=> {
        if(i === 0){
          p.push(e.cat)
          return p
        }else{
          if(p.includes(e.cat)){
            return p
          }else{
            p.push(e.cat)
            return p
          }
        }
      }, [])
      console.log(singleCat)

      let theArr= [];

      for(let i=0; i < singleCat.length; i++){
        const ind = values.findIndex((e)=> e.cat === singleCat[i])
        theArr.push(values[ind])
        console.log(singleCat[i])
      }

      setCategories(theArr)
    }, [])
  return (
    <div className="Categories-Container">
        {
            categories.map((e, i)=> (
                <Category vals={e} key={e.id}/>
            ))
        }
    </div>
  )
}

export default Categories