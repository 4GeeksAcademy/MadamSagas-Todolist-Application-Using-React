import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1 className="mb-3 text-primary">My Todos</h1>
      <ul>
        <li className="m-3 p-3">
          
          <input
          className="form-control mb-3"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do"
            
          />
          {todos.map((item, index) => (
            <li className="fs-4 text list-group-item m-3 py-1 px-3">
              {item}{" "}
              <i
                class="fa-solid fa-square-xmark ms-5 fs-4 text text-primary btn-delete"
                onClick={() =>
                  setTodos(
                    todos.filter((t, currentIndex) => index != currentIndex)
                  )
                }
              ></i>
            </li>
          ))}
        </li>
      </ul>
      <div>
        {todos.length > 0 ? (
          <p className="mt-3 m-3 py-1 px-3">Cantidad de tareas: {todos.length}</p>
        ) : (
          <p className="mt-3 ms-4 py-1 px-3">No hay tareas por hacer</p>
        )
        }
      </div>

      
    </div>
  );
};

export default Home;
