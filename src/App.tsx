import React from 'react';
import {Container} from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TodoForm/>
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
