const popUpReducer = (state = {showDialog: false}, action) => {
  switch (action.type) {
    case 'SHOWDIALOG':
      return {...state, showDialog: !state.showDialog};
    default:
      return state;
  }
};
export default popUpReducer;
