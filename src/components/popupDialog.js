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

class PopupDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {todo: ''};
  }

  showDialog = () => {
    this.setState({showDialog: !this.state.showDialog});
  };
  render() {
    return (
      <Dialog
        visible={this.props.showDialog.showDialog}
        width={0.8}
        onTouchOutside={() => this.props.closeDialog()}
        dialogTitle={
          <DialogTitle
            title="ثبت کار جدید"
            align="left"
            textStyle={{fontFamily: 'Yekan', fontSize: 20}}
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="ثبت"
              textStyle={{fontSize: 25, fontWeight: 'bold'}}
              style={{backgroundColor: 'lightblue'}}
              onPress={() => {
                this.props.addTodo(this.state.todo);
                this.props.closeDialog();
                this.setState({
                  todo: '',
                });
              }}
            />
            <DialogButton
              text="انصراف"
              textStyle={{fontSize: 25, fontWeight: 'bold'}}
              style={{backgroundColor: 'orange'}}
              onPress={() => {
                this.props.closeDialog();
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
  addTodo: todo => dispatch({type: 'ADD_TODO', payload: todo}),
  closeDialog: () => dispatch({type: 'SHOWDIALOG'}),
});
const mapStateToProps = state => ({
  showDialog: state.popUpReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupDialog);
