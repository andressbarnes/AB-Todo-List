const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const UPDATE_ORDER = 'UPDATE_ORDER';

export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const updateTodo = id => ({
  type: UPDATE_TODO,
  id
});

export const updateOrder = data => ({
  type: UPDATE_ORDER,
  data: data
});
