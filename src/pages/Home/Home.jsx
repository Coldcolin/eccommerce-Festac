// import { useState } from 'react';
import Card from '../../components/card/Card';
import { useContext } from 'react';
import { ProductContext } from '../../context/ContextProvider';

const Home = () => {
    const {products }= useContext(ProductContext);
    console.log(products)
    // const items = JSON.parse(localStorage.getItem("products"));
    return (
      <>
        {
          products.map((e)=>(<Card info={e} key={e.id}/>))
        }
      </>
    )
}

export default Home