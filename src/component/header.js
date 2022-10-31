import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Button from "./Button"


function Header({onAdd,showAddTask}) {
 
  const location = useLocation();

  return (
    <div>
    <header>
       {location.pathname === '/' && <Button color={showAddTask ? 'red':'green'} text={showAddTask ? 'Close' : 'Add Task'} onAdd={onAdd} />}
    </header>   
    </div>
  )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

export default Header
