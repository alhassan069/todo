import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
// import { Todo } from "./components/Todo";
import { Input } from "./components/Input";

function App() {
  const [data, setData] = useState([]);

  const handleSubmit = (value, time) => {
    if (time == "") {
      alert("Enter Date");
    } else {
      setData([
        ...data,
        { value, time: time.split("T"), id: uuid(), done: false },
      ]);
    }

    console.log(data, time, value);
  };

  const handleDelete = (id) => {
    const removedTodo = data.filter((item) => item.id !== id);
    setData(removedTodo);
  };

  const handleToggle = (id) => {
    const updatedTodo = data.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setData(updatedTodo);
  };

  return (
    <>
      <div className="App">
        <Input onClick={handleSubmit} />
        <div className="cont">
          <div className="show">
            <h2>To Do</h2>
            {data
              .filter((e) => {
                return e.done != true;
              })
              .map((e) => {
                return (
                  <div key={e.id} className="itemsShow">
                    <p>Task: {e.value}</p>
                    <p>
                      Deadline: {e.time[0]} time: {e.time[1]}
                    </p>
                    <button onClick={() => handleToggle(e.id)}>Done</button>
                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                  </div>
                );
              })}
          </div>
          <div className="show">
            <h2>Already Done</h2>
            {data
              .filter((e) => {
                return e.done == true;
              })
              .map((e) => {
                return (
                  <div key={e.id} className="itemsShow">
                    <p>Task: {e.value}</p>
                    <p>
                      Deadline: {e.time[0]} time: {e.time[1]}
                    </p>
                    <button onClick={() => handleToggle(e.id)}>Undo</button>
                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
