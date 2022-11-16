import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

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
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false}
      setToDo([...toDo, newEntry ])
      setNewTask('');
    }

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
      
        // .sort((a,b) => a.id >b.id ? 1 : -1)
        // the order of tasks will always start from the smallest id to larger 
        .map((task, index) => {
          return(
            <React.Fragment key={task.id}>
            <div className='col taskBg'>

            <div className={task.status ? 'done' : ''}>
                <span className='taskNumber'> {index + 1}</span>
                <span className='taskText'> {task.title}</span>
            </ div>

            <div className="iconsWrap">
              <span title="Completed / Not Completed">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span title="Edit">
              <FontAwesomeIcon icon={faPen} />
              </span>
              <span title="Delete">
              <FontAwesomeIcon icon={faTrashCan} />
              </span>           
            </div>


                      
            </div>
            </React.Fragment>

          )
        })
      }
            {/* Update Task*/}
            <div className='row'>
              <div className='col'>
                <input className='form-control form-control-lg'/>
              </div>
              <div className='col-auto'>
                <button className='btn btn-lg btn-success mr-20'>
                  Update
                </button >
                <button className='btn btn-lg btn-warning'>
                  Cancel
                  </button>
              </div>              
            </div>
            <br />


            {/* Add Task*/}
            <div className='row'>
              <div className='col'>
                <input 
                value={newTask}
                onChange={ (e) => setNewTask(e.target.value)}
                className='form-control form-control-lg'/>
              </div>
              <div className='col-auto'>
                <button
                onClick = {addTask} 
                className='btn btn-lg btn-success'>
                  Add Task
                </button>
              </div>              
            </div>


    </div>
  );
}

export default App;
