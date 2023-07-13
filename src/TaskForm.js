import { useState } from "react";

export default function TaskForm(){
    const [taskName, setTaskName] = useState('');
    return (
        <form>
            <button>+</button>
            <input type="text" 
            onChange={ev => setTaskName(ev.target.value)}
            value = {taskName} placeholder="Add Task here!"></input>
        </form>
    );
}