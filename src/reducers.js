const initialState = {
    expenses: [],
  };
  
  const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      case 'EDIT_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.map((expense) =>
            expense.id === action.payload.id ? action.payload : expense
          ),
        };
      case 'DELETE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.filter((expense) => expense.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default expenseReducer;