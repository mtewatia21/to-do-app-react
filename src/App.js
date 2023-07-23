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

  return (
    <main>
      <TaskForm onAdding = {addTask} />
      {tasks.map((task, idx) => (
        <Task {...task} onToggle={done => updateTask(idx, done)} />
      ))}
    </main>
  );
}

export default App;
