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

  const addProduct=()=>{
      dispatch({type: "addProduct", payload: inputValues});
      setInputValues({});
  }


  return (
    <div className="Post-Container">
      <div className="Post-Form">
        <img src={displayImage} alt="place"/>
        <input type="file" accept="image/x-png,image/gif,image/jpeg" id="image" onChange={(e)=> HandleUploadImage(e)}/>
        <label htmlFor="image">add Image</label>
        <input placeholder="product name" onChange={(e)=> setInputValues((prev)=> {return {...prev, name: e.target.value}})}/>
        <input placeholder="product price" onChange={(e)=> setInputValues((prev)=> {return {...prev, price: e.target.value}})}/>
        <input placeholder="product details" onChange={(e)=> setInputValues((prev)=> {return {...prev, description: e.target.value}})}/>
        <input placeholder="product category" onChange={(e)=> setInputValues((prev)=> {return {...prev, category: e.target.value}})}/>
        <div onClick={addProduct}>Post</div>
      </div>
    </div>
  )
}

export default Post