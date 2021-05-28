import React, { Component } from 'react'

export default class Top4 extends Component {

    componentDidMount() {
        // Get hit the backend api and get the data here, then map below
    }

    render() {
        return (
            <div>
                {/* Map over these in the final version once there's an endpoint */}
                <div className='row my-3'>
                <div className='col-12 col-md-3'>
                    <div className="card border-info mb-3">
                        <div className="card-header">Username</div>
                        <div className="card-body">
                        <p className="card-text">The user's caption goes here</p>
                        </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-3'>
                    <div className="card border-info mb-3">
                        <div className="card-header">Username</div>
                        <div className="card-body">
                        <p className="card-text">The user's caption goes here</p>
                        </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-3'>
                    <div className="card border-info mb-3">
                        <div className="card-header">Username</div>
                        <div className="card-body">
                        <p className="card-text">The user's caption goes here</p>
                        </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-3'>
                    <div className="card border-info mb-3">
                        <div className="card-header">Username</div>
                        <div className="card-body">
                        <p className="card-text">The user's caption goes here</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
