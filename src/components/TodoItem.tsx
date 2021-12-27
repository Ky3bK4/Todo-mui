import React, { FC, ReactElement, useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TodoItemEdit from "./TodoItemEdit";
import { ITodo } from "../types/todo";
import {useAppDispatch} from "../hooks/reduxHooks";
import {deleteTodo, setCompletedTodo} from '../features/todos/todoSlice'

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<ITodoItemProps> = ({
  todo,
}): ReactElement => {
  const dispatch = useAppDispatch();

  const [isCompleted, setCompleted] = useState(todo.completed);
  const [editMode, setEditMode] = useState(false);

  const handleComplete = () => {
    setCompleted(!isCompleted);
    dispatch(setCompletedTodo({id: todo.id, completed: !isCompleted}))
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  if (editMode)
    return (
      <TodoItemEdit
        todo={todo}
        setEditMode={setEditMode}
      />
    );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Checkbox checked={isCompleted} onChange={handleComplete} />
      <Typography
        variant="body1"
        sx={{
          textDecoration: isCompleted ? "line-through" : "none",
          wordBreak: "break-word",
        }}
      >
        {todo.body}
      </Typography>
      <Tooltip title={"Изменить"}>
        <IconButton
          onClick={handleEdit}
          sx={{
            p: "10px",
            ml: "auto",
            mr: "3px",
          }}
          aria-label={"Изменить"}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Divider orientation="vertical" flexItem />
      <Tooltip title="Удалить">
        <IconButton
          onClick={handleDelete}
          sx={{
            p: "10px",
            ml: "3px",
          }}
          aria-label={"Удалить"}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TodoItem;
