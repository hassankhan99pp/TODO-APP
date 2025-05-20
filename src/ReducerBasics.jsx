import React, { useReducer } from "react";

function App() {
  
  // let sampleData = [{id:1,title:"eat",status:false},]
  // 3 make a reducer function with to props state and action
  let myReducerTodo = function(state,action){

    console.log("state =>",state,"action =>",action)
    switch(action.type){
// 4 make the function that you want to perform 
      case 'ADDTODO':
      case 'REMOVETODO':
      case 'CHANGESTATUS':
    }

  }
  // 2 call the reducer function when te 3 step is compelte call the reducer function in props 
  const [todos, dispatch] = useReducer(myReducerTodo, []);


  function createTask (e){
    e.preventDefault()

    dispatch({ type: "ADDTODO" ,payload :{id:"",title:"",status:false} });
    
    
    
  }
  function deleteTask (){
    
    dispatch({
      type: "REMOVETODO",
      payload: { id: "" },
    });
  }
  
  function updateStatus (){
    
    dispatch({
      type: "CHANGESTATUS",
      payload: { id: ""},
    });
  }

  return (
    // 1 make body
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card p-5">
              <form onSubmit={(e)=>{createTask(e)}}>
                <input
                  type="text"
                  placeholder="Enter Text to create task "
                  className="form-control my-2"
                />
                <input
                  type="submit"
                  value={"Create Task"}
                  className="btn btn-success w-100"
                />
              </form>
            </div>
            <div className="card my-2 p-5">
              <ul>
                <li>
                  Content
                  <button className="float-end btn btn-danger mx-1" onClick={()=>{deleteTask()}}>Remove</button>
                  <button className="float-end btn btn-primary mx-1" onClick={()=>{updateStatus()}}>Mark Complete</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
