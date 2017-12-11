import React from "react"
import Actions from "bloggify/actions"

export default class TodoItem extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            solved: this.props.item.solved
        }

        this.toggle = this.toggle.bind(this)
        this.remove = this.remove.bind(this)
    }

    toggle () {
        this.setState({
            solved: !this.state.solved
        })

        Actions.post("todos.toggle", {
            _id: this.props.item._id
        }).catch(err => this.props.onError(err))
    }

    remove () {
        Actions.post("todos.remove", {
            _id: this.props.item._id
        }).then(() => {
            this.props.onRemove()
        }).catch(console.error)
    }

    render () {
        const item = this.props.item
        return <tr>
            <td>{this.props.id}</td>
            <td>{item.content}</td>
            <td>
                <div className={`btn btn-${this.state.solved ? "success btn-ghost" : "error"}`}>
                    {this.state.solved ? "Solved!" : "Not yet."}
                </div>
            </td>
            <td>
                <button className="btn btn-error" onClick={this.remove}>
                    &times;
                </button>
                <button className="btn btn-primary" onClick={this.toggle}>
                    Mark as
                    {this.state.solved ? " un" : " "}
                    solved
                </button>
            </td>
        </tr>
    }
}

