import * as React from 'react'
import TaskList from '../components/TaskList'
import store from '../todoStore'

interface State {
    todos: any[]
}

interface Props {
    navigation: any
}

export class HomeScreen extends React.Component<Props, State> {
    constructor(props, context) {
        super(props, context)
        this.state = store.getState()

        store.subscribe( () => {
            this.setState(store.getState())
        })
    }

    public render() {
        return (
            <TaskList
                onAddStarted={this.onAddStarted}
                todos={this.state.todos}
                onClickDone={this.onClickDone}
            />
        )
    }

    private onAddStarted = () => {
        this.props.navigation.navigate('FormTask', {
            todos: this.state.todos
          })
    }

    private onClickDone = (task) => {
        store.dispatch({
            type: 'DONE_TODO',
            task
        })
    }

}