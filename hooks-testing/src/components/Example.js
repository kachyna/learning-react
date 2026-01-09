import "./Example.css"
import { useState } from "react"

const Example = () => {

    const [title, setTitle] = useState( "First title" )
    const [buttonText, setButtonText] = useState("Change me by clicking me!")
    
    const buttonHandler = () => { 
        setTitle( "Second title" )
    }

    const secondHandler = () => {
        setTitle( "Third title")
    }

    const deleteAll = () => {
        setTitle( "" )
    }

    const changeButton = () => {
        setButtonText("Good job.")
    }

    return (
        <div className="buttons">
            <h2>Title: {title}</h2>
            <button type="button" onClick={ buttonHandler }>Change the title</button>
            <button type="button" onClick={ secondHandler }>Change it again</button>
            <button type="button" onClick={ deleteAll }>Delete the title</button>
            <button type="button" onClick={ changeButton }>{buttonText}</button>
        </div>
    )
}

export default Example