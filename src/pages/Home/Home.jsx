// import { useState } from 'react';
import Card from '../../components/card/Card';

const Home = () => {
    // const [items, setItems] = useState(JSON.parse(localStorage.getItem("products")))
    // const items = Array(30).fill(0).map((_, i) => i + 1);
    const items = JSON.parse(localStorage.getItem("products"));
    return (
      <>
        {
          items.map((e, i)=>(<Card id={i} info={e}/>))
        }
      </>
    )
}

export default Home