import React from "react";

import{useState} from "react";


const Todo = () => {
    let [value, setValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div>
            TODO
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => {
                setTodos([...todos, { value: value }])
                setValue("");
            }}>
                Add </button>
            {todos.map((todo) => (
                <div>{todo.value}</div>
            ))}
        </div>
    )
}

export { Todo }