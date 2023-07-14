import { useState } from "react";

export default function TaskForm({onAdding}){
    const [taskName, setTaskName] = useState('');
    function handleSubmit(ev){
        ev.preventDefault();
        onAdding(taskName);
        setTaskName('');
    }
    return (
        <form onSubmit={ev => handleSubmit(ev)}>
            <button>+</button>
            <input type="text" 
            onChange={ev => setTaskName(ev.target.value)}
            value = {taskName} placeholder="Add Task here!"></input>
        </form>
    );
}