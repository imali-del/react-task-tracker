import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { useState,useEffect } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
import About from "./component/About";
import Footer from './component/Footer';


function App() {

const [showAddTask, setShowAddTask] = useState(false)

const [tasks,setTask] = useState([]);

useEffect(() => {
  
  const getTasks = async () =>{
    const getTaskFromServer = await fetchTasks();
    setTask(getTaskFromServer);
  }
 
  getTasks();
 
},[]);

//Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch(`http://localhost:5000/tasks`);
  const data = await res.json();
  return data;
}

// const onClick = () => {console.log("Click Me")}

//Add Task
const addTask = async (task) => {
  // const id = Math.floor(Math.random() * 5000) + 1;
  // console.log(id);

  // const addTask = {id,...task};
  
  const res = await fetch(`http://localhost:5000/tasks`,{method:'POST',headers:{'Content-type':'application/json'},body:JSON.stringify(task)})
 
  const data = await res.json();

  setTask([...tasks,data]);
  
} 


const deleteTask = async (id) => {
 await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'});
 
 setTask(tasks.filter((task) => task.id !== id))
}

//Get Single Task based on Id

const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  return res.json();
}

const toggleReminder = async (id) =>
{
  debugger
  const taskToToggle = await fetchTask(id);
  const updateTask = {...taskToToggle, reminder : !taskToToggle.reminder};

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{method:'PUT',headers:{'Content-type':'application/json'},body:JSON.stringify(updateTask)})
  
  const data = await res.json();

  setTask(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task));

}

 const name = "Ali"
  return (
    <Router>
    
    <h1>Task Tracker {name}</h1>
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
    <Routes>
    <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask addTask={addTask}/>}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
   
    <Route path='/about' element={<About />}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
