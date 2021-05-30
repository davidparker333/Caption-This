import moment from 'moment'
import React, { Component } from 'react'

export default class Winner extends Component {
    render() {
        let image = this.props.image;
        if (image[0] === "{") {
            image = image.replace('{', '');
            image = image.replace('}', '');
        }
        return (   
            <div className='col-12 col-md-6'>
            <div className="card mb-3">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.username}</h5>
                    <p className="card-text">{this.props.post_body}</p>
                    <p className="card-text"><small className="text-muted">{moment(this.props.date_created).calendar()}</small></p>
                </div>
                </div>
            </div>
        )
    }
}
