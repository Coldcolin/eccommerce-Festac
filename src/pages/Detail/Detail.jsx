import shoe from "../../assets/shoe.avif";
import "./Detail.css"

const Detail = () => {
  return (
    <div className="Detail-Container">
        <div className="Detail-Content">
            <div className="Detail-Left">
                <h3>Nike Air Max 270 to Chuck Taylor</h3>
                <div>Nikes Air Force 1s were amongst the most popular sneakers this year</div>
            </div>
            <div className="Detail-Center">
                <img src={shoe} alt="shoe"/>
                <h3>$290.00</h3>
            </div>
            <div className="Detail-Right">
                <div>Add to Cart</div>
            </div>
        </div>
    </div>
  )
}

export default Detail