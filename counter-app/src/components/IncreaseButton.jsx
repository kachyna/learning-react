import "./increaseButton.css"

const IncreaseButton = ( props ) => {
    return <button type="button" onClick={ props.increase }>Increment</button>
}

export default IncreaseButton