import { useState } from "react";
import Header from "./component/header";
import Button from "./component/Button";
import Tasks from "./component/Tasks";

function App() {

const [tasks,setTask] = useState([
  {
    "text": "Get 500 from 12399",
    "day": "From 8:00 to 18:00 15.07.22",
    "reminder": false,
    "id": 1
  },
  {
    "text": "Change current tarif (probably in bug)",
    "day": "From 8:00 to 19:00 05.07.22",
    "reminder": false,
    "id": 2
  },
  {
    "text": "Recount? ",
    "day": "From 8:00 to 18:00 15.07.22",
    "reminder": false,
    "id": 3
  },
  {
    "text": "watch the full course about react 2021",
    "day": "From 8:00 to 18:00 15.07.22",
    "reminder": false,
    "id": 4
  },
  {
    "text": "Still sun from codepen ",
    "day": "https://codepen.io/irshadav/pen/GRwKRZ",
    "reminder": false,
    "id": 5
  }
]);

const onClick = () => {console.log("Click Me")}

const deleteTask = (id) => {
 setTask(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {tasks.filter((task) => task.id === id ? {...task, reminder: !task.reminder} : task)}

 const name = "Ali"
  return (
    <div className="App">
      <h1>Hello React {name}</h1>
      <Header/>
      <Button color='green' text='Click Me' onClick={onClick}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :('No Tasks') }
    </div>
  );
}

export default App;
