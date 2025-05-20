import React, { useEffect, useReducer, useState } from "react";

function App() {
  // let sampleData = [{id:1,title:"eat",status:false},]

  const [title, setTitle] = useState("");
  let myReducerTodo = function (state, action) {
    // console.log("state =>",state,"action =>",action)
    switch (action.type) {
      case "ADDTODO":
        return [...state, action.payload];
      case "REMOVETODO":
        return state.filter((todo) => todo.id !== action.payload.id);
      case "CHANGESTATUS":
        return state.map((todo) => {
          if (todo.id == action.payload.id) {
            return { ...todo, status: true };
          } else {
            return todo;
          }
        });
    }
  };

  const [todos, dispatch] = useReducer(myReducerTodo, []);
  useEffect(() => {
    console.log("current state od todos", todos);
  }, [todos]);

  function createTask(e) {
    e.preventDefault();
    console.log(title);
    dispatch({
      type: "ADDTODO",
      payload: { id: Date.now(), title: title, status: false },
    });
  }
  function deleteTask(id) {
    dispatch({
      type: "REMOVETODO",
      payload: { id: id },
    });
  }

  function updateStatus(id) {
    dispatch({
      type: "CHANGESTATUS",
      payload: { id },
    });
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card p-5">
              <form
                onSubmit={(e) => {
                  createTask(e);
                }}
              >
                <input
                  type="text"
                  placeholder="Enter Text to create task "
                  className="form-control my-2"
                  onInput={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <input
                  type="submit"
                  value={"Create Task"}
                  className="btn btn-success w-100"
                />
              </form>
            </div>
            <div className="card my-2 p-5">
              <ul className="list-group">
                {todos.map((todo) =>
                  todo.status ? (
                    <li
                      className="list-group-item text-decoration-line-through"
                      key={todo.id}
                    >
                      {todo.title}
                      <button
                        className="float-end btn btn-danger mx-1"
                        onClick={() => {
                          deleteTask(todo.id);
                        }}
                      >
                        Remove
                      </button>
                    </li>
                  ) : (
                    <li className="list-group-item" key={todo.id}>
                      {todo.title}
                      <button
                        className="float-end btn btn-danger mx-1"
                        onClick={() => {
                          deleteTask(todo.id);
                        }}
                      >
                        Remove
                      </button>
                      <button
                        className="float-end btn btn-primary mx-1"
                        onClick={() => {
                          updateStatus(todo.id);
                        }}
                      >
                        Mark Complete
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
