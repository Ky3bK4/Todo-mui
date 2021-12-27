import {createSlice} from "@reduxjs/toolkit";
import {ITodo} from "../../types/todo";
import {RootState} from "../../app/store";

interface TodoState {
  todos: ITodo[]
}

const initialState:TodoState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const id = state.todos[state.todos.length - 1]?.id + 1 || 0;
      state.todos.push({
        id,
        body: action.payload,
        completed: false
      })
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },

    setCompletedTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: action.payload.completed,
          };
        }
        return todo;
      })
    },
    deleteCompletedTodos: (state) => {
      state.todos = state.todos.filter(todo => todo.completed !== true)
    },
    saveChange: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            id: action.payload.id,
            body: action.payload.value,
            completed: todo.completed,
          };
        }
        return todo;
      })
    }
  }
});

export const { addTodo, deleteTodo, setCompletedTodo, deleteCompletedTodos, saveChange} = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
