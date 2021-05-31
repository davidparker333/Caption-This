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
                                    <button type="button" className="btn btn-outline-primary float-end  mx-3" data-bs-toggle="modal" data-bs-target="#votemodal">
                                    {this.props.votes}{this.props.votes === 1 ? ' vote' : ' votes' }! Vote for this Caption
                                    </button> : <div></div>}

                                    
                                    <div className="modal fade" id="votemodal" tabIndex="-1" aria-labelledby="votemodalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="votemodalLabel">Are you sure?</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            You can only vote once per day! Is this the caption you want to vote for?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Nah</button>
                                            {/* This button is showing an id of 2 on the event every time it's pressed. Trying to use to this to hit the vote endpoint */}
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.props.castVote} name={this.props.post_id}>Yep!</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
}
