import React, { FC } from "react";
import { Paper, IconButton, InputBase, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useInput from "../hooks/useInput";
import { useFocus } from "../hooks/useFocus";
import {useAppDispatch} from "../hooks/reduxHooks";
import { addTodo } from "../features/todos/todoSlice";

interface ITodoFormProps {
  addTodo?: (value: string) => void;
}

const TodoForm: FC<ITodoFormProps> = ( ) => {
  const dispatch = useAppDispatch();

  const { value, setValue, changeHandler } = useInput();

  const { isFocused, focusHandler } = useFocus();

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(value.length) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <Paper
      component={"form"}
      sx={[
        {
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "430px",
        },
        isFocused && {
          boxShadow:
            "0px 3px 2px -1px rgb(28 131 219), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        },
      ]}
      onSubmit={submitHandler}
    >
      <InputBase
        sx={{ ml: 3, flex: 1 }}
        placeholder="Введите вашу задачу"
        inputProps={{ "aria-label": "Введите вашу задачу" }}
        value={value}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={focusHandler}
      />
      <Tooltip title={"Добавить"}>
        <IconButton type={"submit"} aria-label="Добавить" sx={{ p: "10px" }}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default TodoForm;
