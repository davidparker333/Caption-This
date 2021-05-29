import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Top4 from '../components/Top4'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='row my-5'>

                    {/* Left aligned banner card */}
                    <div className='col-12 col-md-6'>
                    <div className="card border-primary mb-3">
                    <div className="card-body text-primary">
                    <img src="https://res.cloudinary.com/dbqwjxuhv/image/upload/v1622227316/caption-this_pieqrg.jpg" className='banner-img' alt=""></img>
                    </div>
                    </div>
                    </div>

                    {/* Right aligned banner card */}
                    <div className='col-12 col-md-6'>
                    <div className="card border-primary mb-3">
                    <div className="card-body">
                        <img src="https://res.cloudinary.com/dbqwjxuhv/image/upload/v1622226164/ctlogo_gdhn2m.png" className="banner-card-img" alt=""></img>
                        <h5 className="card-title">CaptionThis!</h5>
                        <p className="card-text">The site where you compete against your friends to come up with the best caption! Each user is able to vote for their favorite once per day, and the winner will be added to our illustrious Winner's Archive so they can forever relive the glory of victory.</p>
                        <hr />
                        <div className='text-center'><i className="fas fa-trophy"></i><i className="fas fa-trophy"></i><i className="fas fa-trophy"></i></div>
                        <hr />
                        <p className="card-text">Please begin by creating an account / login to view today's captions, or look below for a few of today's top rated captions.</p>
                    </div>
                    </div>
                    </div>

                </div>

                <div className='row my-3'>
                    <hr />
                </div>

                <div className='row my-3'>
                    <div className='col-12'>
                    <h2>Today's Image...</h2>
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

                <Top4 />

                <div className='row'>

                        <div className='col-12'>
                            <Link to='/create'><button className='btn btn-primary mb-5 wide-button'>Post a Caption</button></Link>
                        </div>

                    </div>

            </div>
        )
    }
}
