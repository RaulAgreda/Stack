
import dragHandle from './assets/drag_handle.svg';

export function TaskCard({name, id, taskClickHandler, isCompleted = false}) {
    name = name.trim();
    name = name.length > 40 ? name.substring(0, 40) + "..." : name;

    const taskCompleted = isCompleted ? "taskCard-completed" : "";

    return <>
        <button id={id} className={"taskCard " + taskCompleted} onClick={() => {taskClickHandler(id)}}>
            <img src={dragHandle}></img>
            {name}
        </button>
    </>
}