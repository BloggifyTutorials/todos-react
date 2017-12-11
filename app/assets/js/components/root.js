import React from "react"
import ErrorMessage from "./error-message"
import AddTodoForm from "./add-todo-form"
import Todos from "./list"
import Actions from "bloggify/actions"

export default class App extends React.Component {
    constructor (props) {
        super(props)
        this.refreshList = this.refreshList.bind(this)
        this.setError = this.setError.bind(this)
        this.state = {}
        this.refreshList()
    }

    refreshList () {
        Actions.get("todos.list").then(items => {
            this.setState({
                items
            })
        }).catch(err => {
            this.setError(err)
        })
    }

    setError (error) {
        this.setState({
            error
        })
    }

    render () {
        return <div className="container">
            <h1>TODOs App</h1>
            <ErrorMessage error={this.state && this.state.error} />
            <AddTodoForm
                onTodoAdded={this.refreshList}
                onError={this.setError}
            />
            <Todos
                items={this.state.items}
                onRemove={this.refreshList}
                onError={this.setError}
            />
        </div>
    }
}
