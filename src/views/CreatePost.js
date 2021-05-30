import React, { Component } from 'react'

export default class CreatePost extends Component {
    
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-2"></div>
                    <div className="col-8">

                        <h1 className="my-4">Create your caption...</h1>

                       
                                <div className="card border-primary mb-3 today-card">
                                    <div className="card-body text-primary">
                                        <img src={`${this.props.image}`} alt="" className="today-image"></img>
                                    </div>
                                 </div>
                      
                     

                    <form action="" method="" onSubmit={(e) => this.props.handleCreatePost(e)}>
                            <div className="form-group d-flex flex-column justify-content-center">
                                <fieldset className="my-2">
                                    Enter your caption:
                                    <input type='text' className='form-control' placeholder='CaptionThis!' name='caption'/>
                                </fieldset>
                                <button className='btn btn-outline-primary my-3'>Submit</button>
                            </div>
                        </form>

                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }
}
