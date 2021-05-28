import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div className={`alert alert-${this.props.category} alert-dismissible fade show my-2`} role="alert">
                {this.props.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => this.props.clearMessage()}></button>
            </div>
        )
    }
}
