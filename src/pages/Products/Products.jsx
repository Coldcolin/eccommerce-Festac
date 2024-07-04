import Card from "../../components/card/Card";


const Products = () => {
    const items = Array(4).fill(0).map((_, i) => i + 1);
    return (
      <>
        {
          items.map((e, i)=>(<Card key={i}/>))
        }
      </>
    )
}

export default Products