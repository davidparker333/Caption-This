import React, { Component } from 'react'

export default class WinnerArchive extends Component {
    render() {
        return (
            <div>
                
                <div className='row my-5'>

                    <div className='col-12'>
                        <h1 className='text-center'><i className="fas fa-trophy" /> The Winner's Hall <i className="fas fa-trophy" /></h1>
                    </div>

                </div>

                <div className='row'>

                    <div className='col-12 col-md-6'>
                     <div className="card mb-3">
                            <img src={this.props.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Username</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Date: 5/29/21</small></p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className="card mb-3">
                            <img src={this.props.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Username</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Date: 5/29/21</small></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
