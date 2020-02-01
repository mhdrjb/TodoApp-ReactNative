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
    this.state = {showDialog: false, todo: ''};
  }
  componentDidMount() {
    this.props.showDialog(this.showDialog);
  }
  showDialog = () => {
    this.setState({showDialog: !this.state.showDialog});
  };
  render() {
    return (
      <Dialog
        visible={this.state.showDialog}
        width={0.8}
        onTouchOutside={() => this.setState({showDialog: false})}
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
                this.setState({
                  showDialog: false,
                  todo: '',
                });
              }}
            />
            <DialogButton
              text="انصراف"
              textStyle={{fontSize: 25, fontWeight: 'bold'}}
              style={{backgroundColor: 'orange'}}
              onPress={() => {
                this.setState({showDialog: false});
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
});

export default connect(null, mapDispatchToProps)(PopupDialog);
