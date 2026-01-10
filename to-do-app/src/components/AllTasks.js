import "./AllTasks.css"
import { useState } from "react"
import data from "../data"

const AllTasks = () => {
    const [tasks, setTasks ] = useState( data )

    const taskHandler = ( id ) => {
        console.log("Clicked", id)
        const filtered = tasks.filter( ( x ) => { return x.id !== id })
        console.log( filtered )
        setTasks( filtered )
    }

    const deleteAllTasksHandler = () => setTasks([])

    return (
        <div>
            { tasks.map( (task) => { 
                const {id, name} = task

                return <div className="task" key={id}>
                    <h4>{name}</h4>
                    <button type="button" onClick={ () => taskHandler(id) }>Delete</button>
                </div> 
            })}
            <button type="button" onClick={ deleteAllTasksHandler }>Delete all tasks</button>
        </div>
    )
}

export default AllTasks