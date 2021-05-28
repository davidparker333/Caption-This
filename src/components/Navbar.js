import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light navbar-color">
                <div className="container-fluid">
              <img src="https://res.cloudinary.com/dbqwjxuhv/image/upload/v1622227096/Daco_1189537_dvqlvs.png" className="nav-logo mx-2" alt="" />
                <a className="navbar-brand" href="/">CaptionThis</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Today's Image</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Winner Archive</a>
                  </li>
                </ul>
                <button type="button" className="btn btn-outline-primary mx-1">Login</button>
                <button type="button" className="btn btn-outline-primary mx-1">Register</button>
              </div>
                </div>
            </nav>
            </div>
        )
    }
}
