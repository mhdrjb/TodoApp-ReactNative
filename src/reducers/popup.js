const popUpReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHOWDIALOG':
      state.showDialog = action.payload;
      return state;
    default:
      return state;
  }
};
