import React, { Component } from 'react'

export default class UpdateProfile extends Component {
    constructor() {
        super();

        this.state = {
            info: {}
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/viewprofile', {
            method: 'GET',
            headers: {
                "Content-Type":"application/json",
                "Accept":"*/*",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => this.setState({
                info: data
            }))
    }

    handleUpdate = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let email = e.target.email.value;
        console.log(username, email)
        fetch('http://localhost:5000/api/updateprofile', {
            method: 'PUT',
            headers: {
                "Content-Type":"application/json",
                "Accept":"*/*",
                "Authorization": "Bearer " + localStorage.getItem('token')
            },
            body: JSON.stringify([{
                "username": username,
                "email": email
            }])
        }).then(res => res.json())
            .then(data => {
                this.props.addMessage('Profile successfully updated', 'success');
                this.setState({
                info: {
                    username: data.username,
                    email: data.email
                }
            })
        }).catch(error => this.props.addMessage("Something isn't right, please try again", 'danger'))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-sm-2 col-md-4"></div>
                    <div className="col-12 col-sm-8 col-md-4 my-5">

                        <h1 className="my-4">Update Your Profile</h1>

                        <form action="" method="" onSubmit={(e) => this.handleUpdate(e)}>
                            <div className="form-group d-flex flex-column justify-content-center">
                                <fieldset className="my-2">
                                    Username:
                                    <input type='text' className='form-control' defaultValue={this.state.info.username} name='username' />
                                </fieldset>
                                <fieldset className="my-2">
                                    Email: 
                                    <input type='email' className='form-control' defaultValue={this.state.info.email} name='email' />
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
