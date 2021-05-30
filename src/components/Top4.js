import React, { Component } from 'react';
import moment from 'moment';

export default class Top4 extends Component {
    render() {
        const date = moment(this.props.date_created).fromNow();
        return (
                <div className='col-12 col-md-3'>
                    <div className="card border-info mb-3">
                        <div className="card-header">{this.props.username}</div>
                        <div className="card-body">
                            <p className="card-text">{this.props.post_body}</p>
                            <p className="card-text small">{date}</p>
                        </div>
                    </div>
                </div>
        )
    }
}
