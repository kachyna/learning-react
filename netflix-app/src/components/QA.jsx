import { useState } from "react"
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./QA.css"

const QA = ( {question, answer} ) => {

    const [showAnswer, setShowAnswer] = useState( false )

    return(
        <div className="qna">
            <div className="question">
                <h3 >{question}</h3>
                <button onClick={ () => setShowAnswer( ! showAnswer )}><MdOutlineArrowDropDown /> { showAnswer ? "Hide Answer" : "Show Answer"}</button>
            </div>
            <p className="answer">{showAnswer && answer}</p>
        </div>
    )
} 

export default QA