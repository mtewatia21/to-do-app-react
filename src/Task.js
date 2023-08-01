import Checkbox from "./Checkbox";

export default function Task({name, done, onToggle}){
    return (
        <div className={'task ' + (done ? 'done' : '')}>
            {/* <input type="checkbox"/> */}
            <Checkbox checked ={done} onClick={() => onToggle(!done)} />
           <span>{name}</span>
        </div>
    );
}