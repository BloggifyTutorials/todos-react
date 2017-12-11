import React from "react"

export default class ErrorMessage extends React.Component {
    render () {
        if (this.props.error) {
            return <div class="alert alert-error">
                {this.props.error.message}
            </div>
        }
        return null
    }
}

