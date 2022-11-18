export const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
      case "ADD_TODO_SUCCESS":
        return { todos: [action.payload, ...state.todos] };
      case "REMOVE_TODO_SUCCESS":
        return { todos: action.payload };
  
      default:
        return state;
    }
  };