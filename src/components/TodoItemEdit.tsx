import React, { FC } from "react";
import { Box, Divider, IconButton, InputBase, Tooltip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import useInput from "../hooks/useInput";
import { ITodo } from "../types/todo";
import { saveChange } from "../features/todos/todoSlice";
import {useAppDispatch} from "../hooks/reduxHooks";

interface ITodoItemEditProps {
  todo: ITodo;
  setEditMode: (val: boolean) => void;
}

const TodoItemEdit: FC<ITodoItemEditProps> = ({
  setEditMode,
  todo,
}) => {
  const dispatch = useAppDispatch();
  const { value, changeHandler } = useInput(todo.body);

  const handleSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (value.length > 0) {
      dispatch(saveChange({id: todo.id, value}));
    }
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      component={"form"}
      onSubmit={handleSave}
    >
      <InputBase
        value={value}
        onChange={changeHandler}
        sx={{
          ml: 1,
          maxWidth: "300px",
          width: "100%",
          "&.Mui-focused": {
            boxShadow: "0px 3px 1px -1px rgb(28 131 219)",
          },
        }}
        placeholder="Измените задачу"
        inputProps={{ "aria-label": "Измените задачу" }}
        autoFocus
      />
      <Tooltip title={"Сохранить"}>
        <IconButton
          type="submit"
          sx={(theme) => ({
            p: "10px",
            ml: "auto",
            mr: "3px",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          })}
          aria-label={"Сохранить"}
        >
          <CheckIcon />
        </IconButton>
      </Tooltip>
      <Divider orientation="vertical" flexItem />
      <Tooltip title="Отменить">
        <IconButton
          onClick={handleCancelEdit}
          sx={(theme) => ({
            p: "10px",
            ml: "3px",
            "&:hover": {
              color: theme.palette.error.main,
            },
          })}
          aria-label={"Отменить"}
        >
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TodoItemEdit;
