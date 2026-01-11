import { useState } from "react"
import "./TaskManager.css"
import Task from "./Task"

const testTask1 = { "id" : crypto.randomUUID(), "text" : "Throw out bin" }
const testTask2 = { "id" : crypto.randomUUID(), "text" : "Ask my mom" }

const TaskManager = () => {
    const [taskText, setTaskText] = useState("")
    const [tasksArray, setTasksArray] = useState([ testTask1, testTask2 ])

    const formSubmit = (e) => {
        e.preventDefault()
        if ( !taskText.trim()) return;
        console.log("The form has been submitted:", taskText)

        const newTask = { id: crypto.randomUUID(), text: taskText }
        setTasksArray( tasks => [...tasks, newTask] );
        setTaskText("")
    }

    const deleteTask = ( id ) => {
        setTasksArray( prevTasks => prevTasks.filter( t => t.id != id ) )
    }

    return (
    <article className="task-widget">
        <h2>Your Tasks ({ tasksArray.length } remaining)</h2>
        <form onSubmit={ formSubmit }>
            <div>
            <input  type="text" placeholder="What is your next task?" name="name" id="name" autoComplete="off"
                    value={taskText}
                    onChange={ ( e ) => setTaskText( e.target.value ) } />
                    <input type="submit" value="Add" />
            </div>
        </form>
        <div className="tasks"> {
            tasksArray.map( task => ( <Task key={task.id} task={task.text} deleteTask = { () => deleteTask( task.id ) }/> ))}
        </div>
    </article>
  )
}

export default TaskManager