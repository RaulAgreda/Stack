import './App.css'
import { TaskCard } from './TaskCard.jsx'
import { TaskHandler } from './Footer'
import { useState } from 'react'

let lastCardId = 0;



function editTaskHandler(evt) {

}

function App () {
  const [tasks, setTasks] = useState([{name: "test1", id: lastCardId++, completed: false}, {name: "test2", id: lastCardId++, completed:false}]);
  
  function addTaskHandler(taskName) {
    if (!taskName) return;
    console.log(taskName);
    setTasks([...tasks, {name: taskName, id: lastCardId++}]);
}

  function taskSelectedHandler(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    const task = tasks[taskIndex];
    task.completed = !task.completed;
    setTasks([...tasks.slice(0, taskIndex), task, ...tasks.slice(taskIndex + 1)]);
  }
  // const [selectedTask, setSelectedTask] = useState(null);
  return <>
    <header>
      <h1>Stack</h1>
    </header>
    <aside>Menu</aside>
    <main>
      <article className="taskCard-container">
         { tasks.map(task => (
            <TaskCard 
              name={task.name}
              key={task.id} id = {task.id}
              taskClickHandler={taskSelectedHandler}
              isCompleted={task.completed} />
          ))}
      </article>
      {/* <article className="taskCard-container taskCard-completed-container">
        <h2>Completed :D</h2>
        { tasks.filter(task => task.completed).map(task => (
            <TaskCard name={task.name} key={task.id}/>
          ))}

      </article> */}
    </main>
    <footer>
      <TaskHandler addTaskHandler={addTaskHandler}/>
    </footer>
  </>
}

export default App
