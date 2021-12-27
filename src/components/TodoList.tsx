import React, { FC, ReactElement } from 'react';
import TodoItem from "./TodoItem";
import { Button, Paper } from '@mui/material';
import EmptyList from "./EmptyList";
import {deleteCompletedTodos, selectTodos} from "../features/todos/todoSlice";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

const TodoList: FC = (): ReactElement => {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  const handleDeleteCompletedTodos = () => {
    dispatch(deleteCompletedTodos());
  };

  if (!todos.length) {
    return <EmptyList />;
  }

  const someCompleted = todos.some((todo) => todo.completed);

  return (
    <Paper
      sx={{
        mt: 2,
        p: 2,
        boxSizing: "border-box",
        maxWidth: "430px",
        width: "100%",
      }}
    >
      <>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
        {someCompleted && (
          <Button onClick={handleDeleteCompletedTodos} sx={{ mt: 2 }}>
            Удалить выполненные
          </Button>
        )}
      </>
    </Paper>
  );
};

export default TodoList;
