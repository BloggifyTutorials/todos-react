import React from "react"
import Actions from "bloggify/actions"

export default class Todos extends React.Component {

    constructor (props) {
        super(props)
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo (e) {
        e.preventDefault()
        Actions.post("todos.add", {
            content: this.refs.todo.value
        }).then(() => {
            this.refs.todo.value = ""
            this.props.onTodoAdded()
        }).catch(err => this.props.onError(err))
    }

    render () {
        return <form onSubmit={this.addTodo}>
            <fieldset className="form-group form-success">
                <label>TODO Content:</label>
                <input ref="todo" autoFocus className="form-control" />
                <button className="btn btn-default">
                    Add
                </button>
            </fieldset>
        </form>
    }
}
