import React from "react"
import TodoItem from "./todo-item"

export default class Todos extends React.Component {
    render () {
        const items = this.props.items

        if (!items) {
            return null
        }

        if (items.length) {
            const $items = items.map((item, index) => {
                return <TodoItem
                    item={item}
                    key={index}
                    id={index + 1}
                    onRemove={this.props.onRemove}
                    onError={this.props.onError}
                />
            })

            return <table>
                <thead>
                    <tr>
                        <td width="20">#</td>
                        <td>Description</td>
                        <td width="130">Solved</td>
                        <td width="250">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {$items}
                </tbody>
            </table>
        } else {
            return <div className="alert alert-info">
                No TODOs yet. Create your first one.
            </div>
        }
    }
}

