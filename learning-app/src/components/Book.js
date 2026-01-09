import "./Book.css"
import OrderButton from "./OrderButton"

const Book = ( props ) => {
    return (
    <div className="one-book">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <OrderButton />
    </div>
    )
    
}

export default Book