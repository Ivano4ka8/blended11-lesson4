import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.items;
export const selectLoading = state => state.todos.loading;
export const selectError = state => state.todos.error;
export const selectFilter = state => state.filter;
export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
