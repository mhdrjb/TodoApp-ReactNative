const popUpReducer = (state = {showDialog: false}, action) => {
  switch (action.type) {
    case 'SHOWDIALOG':
      return {...action.payload};
    default:
      return state;
  }
};
export default popUpReducer;
