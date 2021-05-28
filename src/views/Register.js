import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-sm-2 col-md-4"></div>
                    <div className="col-12 col-sm-8 col-md-4 my-5">

                        <h1 className="my-4">Register Here</h1>

                        <form action="" method="" onSubmit={(e) => this.props.handleRegister(e)}>
                            <div className="form-group d-flex flex-column justify-content-center">
                                <fieldset className="my-2">
                                    Username:
                                    <input type='text' className='form-control' placeholder='John Smith' name='username' />
                                </fieldset>
                                <fieldset className="my-2">
                                    Email: 
                                    <input type='email' className='form-control' placeholder='someone@example.com' name='email' />
                                </fieldset>
                                <fieldset className="my-2">
                                    Password:
                                    <input type='password' className='form-control' placeholder='Password' name='password' />
                                </fieldset>
                                <fieldset className="my-2">
                                    Confirm Password:
                                    <input type='password' className='form-control' placeholder='Confirm Password' name='confirmpassword' />
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
