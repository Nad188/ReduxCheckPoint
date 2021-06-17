import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import Filter from "./Components/Filter";

function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUnDone] = useState(false);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <Filter setDone={setDone} setUnDone={setUnDone} />
        </div>
        <div>
          <TodoList done={done} unDone={unDone} />
        </div>
      </div>
    </div>
  );
}

export default App;
