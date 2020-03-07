import React, {Component} from 'react';
import Dialog, {
  DialogTitle,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  DialogContent,
} from 'react-native-popup-dialog';
import {TextInput} from 'react-native';
import {connect} from 'react-redux';
import {addTodoAction, showDialog} from '../actions/todoActions';
import {RFPercentage} from 'react-native-responsive-fontsize';

class PopupDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {todo: ''};
  }

  showDialog = () => {
    this.setState({showDialog: !this.state.showDialog});
  };
  render() {
    const {closeDialog, showDialog, addTodo} = this.props;
    return (
      <Dialog
        visible={showDialog.showDialog}
        width={0.8}
        onTouchOutside={() => closeDialog()}
        dialogTitle={
          <DialogTitle
            title="ثبت کار جدید"
            align="left"
            textStyle={{fontFamily: 'Yekan', fontSize: RFPercentage(5)}}
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="ثبت"
              textStyle={{fontSize: RFPercentage(5), fontWeight: 'bold'}}
              style={{backgroundColor: 'lightblue'}}
              onPress={() => {
                addTodo(this.state.todo);
                closeDialog();
                this.setState({
                  todo: '',
                });
              }}
            />
            <DialogButton
              text="انصراف"
              textStyle={{fontSize: RFPercentage(5), fontWeight: 'bold'}}
              style={{backgroundColor: 'orange'}}
              onPress={() => {
                closeDialog();
              }}
            />
          </DialogFooter>
        }
        dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}>
        <DialogContent>
          <TextInput
            style={{
              borderWidth: 1,
              width: '100%',
              borderColor: 'gray',
              marginTop: 10,
            }}
            value={this.state.todo}
            onChangeText={text => this.setState({todo: text})}
          />
        </DialogContent>
      </Dialog>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodoAction(todo)),
  closeDialog: () => dispatch(showDialog()),
});
const mapStateToProps = state => ({
  showDialog: state.popUpReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupDialog);
