import * as React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import store from '../todoStore'

interface Props {
  navigation: any
}

interface State {
  task: string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7'
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3

  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButton: {
    backgroundColor: '#666'
  }
})

export class FormAddTaskScreen extends React.Component<Props, State> {

  constructor(props, context) {
    super(props, context)

    this.state = { task: '' }
  }

  public render() {
    return (
        <View style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={this.onChangeText}
            />
            <Button
                onPress={this.onPressAdd}
                title='Add'
                buttonStyle={styles.button}
            />
            <Button
                onPress={this.onPressCancel}
                title='Cancel'
                buttonStyle={[styles.button, styles.cancelButton]}
            />
        </View>
    )
  }

  private onChangeText = (text: string) => {
    this.setState({
      task: text
    })
  }

  private onPressAdd = () => {
    store.dispatch({
      type: 'ADD_TODO',
      task: this.state.task
    })
    this.props.navigation.navigate('Home', {})
  }

  private onPressCancel = () => {
    this.props.navigation.goBack()
  }
}