import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TodayImage extends Component {
    render() {
        return (
            <div>
                <div className='row my-5'>

                    <div className='col-12'>
                        <h1>Today's Image...</h1>
                    </div>
                </div>

                    <div className='row my-3'>
                        <div className='col-2'></div>
                        <div className='col-8'>
                                <div className="card border-primary mb-3 today-card">
                                    <div className="card-body text-primary">
                                        <img src={`${this.props.image}`} alt="" className="today-image"></img>
                                    </div>
                                 </div>
                        </div>
                        <div className='col-2'></div>
                    </div>

                    <div className='row'>

                        <div className='col-12 col-md-6'>
                            <div className="card border-info mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Username</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   
                                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#votemodal">
                                    Vote for this Caption
                                    </button>

                                    
                                    <div class="modal fade" id="votemodal" tabindex="-1" aria-labelledby="votemodalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="votemodalLabel">Are you sure?</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            You can only vote once per day! Is this the caption you want to vote for?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nah</button>
                                            <button type="button" class="btn btn-primary">Yep!</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-6'>
                            <div className="card border-info mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Username</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#votemodal">
                                    Vote for this Caption
                                    </button>

                                    
                                    <div class="modal fade" id="votemodal" tabindex="-1" aria-labelledby="votemodalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="votemodalLabel">Are you sure?</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            You can only vote once per day! Is this the caption you want to vote for?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Nah</button>
                                            <button type="button" class="btn btn-primary">Yep!</button>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                    </div>

                    <div className='row'>

                        <div className='col-12'>
                            <Link to='/create'><button className='btn btn-primary mb-5 wide-button'>Post a Caption</button></Link>
                        </div>

                    </div>
            </div>
        )
    }
}
