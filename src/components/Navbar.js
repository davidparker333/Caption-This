import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light navbar-color">
                <div className="container-fluid">
              <img src="https://res.cloudinary.com/dbqwjxuhv/image/upload/v1622227096/Daco_1189537_dvqlvs.png" className="nav-logo mx-2" alt="" />
                <Link className="navbar-brand" to='/'>CaptionThis</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/today'>Today's Image</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/winners'>Winner Archive</Link>
                  </li>
                </ul>
                {this.props.isLoggedIn ? (<button className='btn btn-outline-primary' onClick={this.props.logUserOut}>Logout</button>) : (
                  <div>
                <Link to='/login'><button type="button" className="btn btn-outline-primary mx-1">Login</button></Link>
                <Link to='/register'><button type="button" className="btn btn-outline-primary mx-1">Register</button></Link> </div> )}
              </div>
                </div>
            </nav>
            </div>
        )
    }
}
