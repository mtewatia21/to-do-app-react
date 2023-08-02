import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    if(tasks.length === 0){
      return;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // alert('ALERT2!!!');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks);
  }, []);

  function addTask(name){
    setTasks(prev => {
      return [...prev, {name:name, done:false}];
    });
  }

  function updateTask(taskIdx, done2){
    setTasks(prev => {
      const task2 = [...prev];
      task2[taskIdx].done = done2;
      return task2;
    });
  }

  
  const completed = tasks.filter(t=>t.done).length;
  const totalTasks = tasks.length;
  function getMessage(){
    const percent = completed/totalTasks*100;
    if(percent === 0)
      return 'Start working ASAP!';
    if(percent === 100)
      return 'Amazing! All tasks done!';
    return 'Keep at it!'
  }

  function deleteTask(taskIndex){
    setTasks(prev => {
      return prev.filter((taskObject, index) => index !== taskIndex)
    })
  }
  return (
    <main>
      <h1>{completed}/{totalTasks} Complete</h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdding = {addTask} />
      {tasks.map((task, idx) => (
        <Task {...task} 
        onDelete={() => deleteTask(idx)}
        onToggle={done => updateTask(idx, done)} />
      ))}
    </main>
  );
}

export default App;
