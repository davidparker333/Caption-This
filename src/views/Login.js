import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-12 col-sm-2 col-md-4"></div>
                    <div className="col-12 col-sm-8 col-md-4 my-5">

                        <h1 className="my-4">Login Here</h1>

                        <form action="" method="" onSubmit={(e) => this.props.handleLogin(e)}>
                            <div className="form-group d-flex flex-column justify-content-center">
                                <fieldset className="my-2">
                                    Username:
                                    <input type='text' className='form-control' placeholder='Username' name='username'/>
                                </fieldset>
                                <fieldset className="my-2">
                                    Password:
                                    <input type='password' className='form-control' placeholder='Password' name='password'/>
                                </fieldset>
                                <button className='btn btn-outline-primary my-3'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-sm-2 col-md-4"></div>
                </div>
            </div>
        )
    }
}
