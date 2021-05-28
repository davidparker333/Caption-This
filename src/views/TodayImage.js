import React, { Component } from 'react'

export default class TodayImage extends Component {
    render() {
        return (
            <div>
                <div className='row my-5'>

                    <div className='col-12'>
                        <h1>Today's Image...</h1>
                    </div>

                    <div className='row my-3'>
                    <div className='col-12 d-flex justify-contents-center'>
                    <img src={`${this.props.image}`} alt="" className="today-image"></img>
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}
