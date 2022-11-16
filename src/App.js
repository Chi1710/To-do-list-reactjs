import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTasksAlt, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {

  //Tasks (toDo list) state
  //status: false (it mean isn't completed)
  const[toDo, setToDo] = useState([]);

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
    let newTasks = toDo.filter ( task => task.id !== id)
    setToDo(newTasks);
  }

  //mark task as completed
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if(task.id === id){
        return ({ ...task, status: !task.status})
      }
      return task;
    })
    setToDo(newTask);
  }

  //Cancel update
  const cancelUpdate = () => {
    setUpdateData('');

  }

  //change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);

  }

  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData('');
  }


  return (
    <div className="container App">
        
        <br></br>
        <h2>To Do List App (ReactJS)</h2>
        <br></br>

        {updateData && updateData ? (
            //Update Task
          <>
          <div className='row'>
            <div className='col'>
              <input
                value={ updateData && updateData.title}
                onChange = { (e) => changeTask(e)}
                className="form-control form-control-lg"
                />
            </div>
            <div className='col-auto'>
              <button 
              onClick={updateTask}
              className='btn btn-lg btn-success mr-20'> 
              Update</button>
              <button
              onClick={cancelUpdate}
              className='btn btn-lg btn-warning'>
                Cancel </button>
          </div>
          </div>
          <br />
          </>
          ): ( //Add Task
           <>
              <div className='row'>
                <div className='col'>
                  <input
                  value={newTask}
                  onChange = { (e) => setNewTask(e.target.value)}
                  className = 'form-control form-control-lg'
                  />
                  </div>
                <div className='col-auto'>
                  <button
                  onClick={addTask}
                  className="btn btn-lg btn-success">
                    Add Task
                  </button>
                </div>
              </div>
              <br />
              </>
          )}

        

       {/* display ToDos */}
      {toDo && toDo.length ? '' : 'No Task...'}

      {toDo && toDo
      
        .sort((a,b) => a.id >b.id ? 1 : -1)
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
              <span 
              title="Completed / Not Completed"
              onClick={ (e) => markDone(task.id) }>
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>

              {task.status ? null : ( 
              <span 
              title="Edit"
              onClick={ () => setUpdateData({
                id: task.id,
                title: task.title,
                status: task.status ? true : false 
              })}>
              <FontAwesomeIcon icon={faPen} />
              </span>
              )}

              <span 
              title="Delete"
              onClick={() => deleteTask(task.id)}>
              <FontAwesomeIcon icon={faTrashCan} />
              </span>           
            </div>                      
            </div>
            </React.Fragment>

          )
        })
      }
      
      
    </div>
  )
}


export default App;
