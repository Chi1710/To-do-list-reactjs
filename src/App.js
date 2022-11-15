import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faCircleCheck, faPen, faTrashCan
// } from '@fortawsome/free-solid-svg-icons'

import './App.css';

function App() {

  //Tasks (toDo list) state
  //status: false (it mean isn't completed)
  const[toDo, setToDo] = useState([
      {id: 1, title:"Task one", status: false},
      {id: 2, title:"Task two", status: false}
  ]);

  //Temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState(''); 

  //Add task
  const addTask = () => {


  }

  //Delete task
  const deleteTask = (id) => {


  }

  //mark task as completed
  const markDoneTask = (id) => {


  }

  //Cancel update
  const cancelUpdate = () => {


  }

  //change task for update
  const changeTask = (event) => {


  }

  //update task
  const updateTask = () => {

  }


  return (
    <div className="container App">
        
        <br></br>
        <h2>To Do List App (ReactJS)</h2>
        <br></br>

       {/* display ToDos */}
      {toDo && toDo.length ? '' : 'No Task...'}

      {toDo && toDo
        .map((task, index) => {
          return(
            <div className='col taskBg'>
            <div className={task.status ? 'done' : ''}>

              <React.Fragment key={task.id}>
                <span className='taskNumber'> {index + 1}</span>
                <span className='taskText'> {task.title}</span>
              </React.Fragment>

            </ div>
            </div>
          )
        })
      }


    </div>
  );
}

export default App;
