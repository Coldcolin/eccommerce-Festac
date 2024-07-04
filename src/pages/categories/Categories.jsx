import Category from "../../components/Category/Category"
import "./Categories.css"

const Categories = () => {
    const Categories = Array(10).fill(0).map((_, i)=> i + 1)
  return (
    <div className="Categories-Container">
        {
            Categories.map((e, i)=> (
                <Category key={i}/>
            ))
        }
    </div>
  )
}

export default Categories