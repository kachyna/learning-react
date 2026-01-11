import "./Task.css"
import { RxCross1 } from "react-icons/rx";

const Task = ( {task, deleteTask} ) => {
    return (
        <div className = "task" >
            <p>{task}</p>
            <button onClick = { deleteTask }> <RxCross1 /> </button>
        </div>
    )
}

export default Task