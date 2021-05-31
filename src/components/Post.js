import React, { Component } from 'react'
import moment from 'moment';

export default class Post extends Component {
    render() {
        const date = moment(this.props.date_created).fromNow();
        return (
                <div className='col-12 col-md-6'>
                            <div className="card border-info mb-3">
                                <div className="card-body">
                                    <h5 className="card-title mx-3">{this.props.username}</h5>
                                    <p className="card-text mx-3">{this.props.post_body}</p>
                                    <p className="card-text small mx-3">{date}</p>
                                   
                                   {this.props.isLoggedIn ? 
                                    <button type="button" className="btn btn-outline-primary float-end  mx-3" name={this.props.post_id} onClick={(e) => this.props.castVote(e)}>
                                    {this.props.votes}{this.props.votes === 1 ? ' vote' : ' votes' }! Vote for this Caption
                                    </button> : <div></div>}
                                </div>
                            </div>
                        </div>
        )
    }
}
