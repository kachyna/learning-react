import "./DecreaseButton.css"

// We use props to pass the function pointer
const DecreaseButton = ( props ) => {
    return <button type="button" onClick={ props.decrease }>Decrement</button>
}

export default DecreaseButton