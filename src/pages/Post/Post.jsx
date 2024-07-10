import "./Post.css";
import placeholder from "../../assets/placeholder.png"
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ContextProvider";


const Post = () => {
  const {dispatch}= useContext(ProductContext)
  const [inputValues, setInputValues] = useState({});
  const [displayImage, setDisplayImage] = useState(placeholder);

  const HandleUploadImage = (e)=>{
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setInputValues((prev)=> {return {...prev, image: save}}); 
    setDisplayImage(save);
  }

  const addProduct=(e)=>{
    e.preventDefault()
    dispatch({type: "addProduct", payload: inputValues});
    setInputValues({
        name: "",
        price: "",
        description: "",
        category: "",
    });
    setDisplayImage(placeholder);
  }

  return (
    <div className="Post-Container">
      <form className="Post-Form" onSubmit={(e)=>addProduct(e)}>
        <img src={displayImage} alt="place"/>
        <input type="file" accept="image/x-png,image/gif,image/jpeg" required={true} id="image" onChange={(e)=> HandleUploadImage(e)}/>
        <label htmlFor="image">add Image</label>
        <input placeholder="product name" required={true} value={inputValues.name} onChange={(e)=> setInputValues((prev)=> {return {...prev, name: e.target.value}})}/>
        <input placeholder="product price" required={true} value={inputValues.price} onChange={(e)=> setInputValues((prev)=> {return {...prev, price: e.target.value}})}/>
        <input placeholder="product details" required={true} value={inputValues.description} onChange={(e)=> setInputValues((prev)=> {return {...prev, description: e.target.value}})}/>
        <input placeholder="product category" required={true} value={inputValues.category} onChange={(e)=> setInputValues((prev)=> {return {...prev, category: e.target.value}})}/>
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default Post