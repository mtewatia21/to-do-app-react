import Checkbox from "./Checkbox";

export default function Task({name, done}){
    return (
        <div className="task">
            {/* <input type="checkbox"/> */}
            <Checkbox defaultState={done} />
           {name}
        </div>
    );
}