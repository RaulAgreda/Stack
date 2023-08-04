import AddIcon from "./assets/add.svg"
import { useState } from 'react'

export function TaskHandler ({addTaskHandler}) {
    const [taskName, setTaskName] = useState("");
    
    // Modes add, edit, delete
    function handleInputChange(evt) {
        setTaskName(evt.target.value)
    }
    function handleClick() {
        addTaskHandler(taskName);
        setTaskName("");
    }

    return (
        <div className="addTask-container">
            <input className="addTask-input" type="text" placeholder="Add a task" onChange={handleInputChange} value={taskName} />
            <button onClick={handleClick} className="addTask-button"><img src={AddIcon}></img></button>
        </div>
    )
}