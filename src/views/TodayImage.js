import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'

export default class TodayImage extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            voted: false
        }
    }

    castVote = (e) => {
        e.preventDefault();
        let post_id = e.target.name;
        fetch(`http://localhost:5000/api/vote/${post_id}`, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"*/*",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => {
                if (data.Response === "You have already voted today") {
                    this.props.addMessage('You have already voted today!', 'danger');
                }
                this.refreshVotes();
                this.setState({
                    voted: true
                })
            })
    }

    refreshVotes() {
        fetch('http://localhost:5000/api/today', {
            method: 'GET',
            headers: {
                "Content-Type":"application/json",
                "Accept":"*/*"
            }
        }).then(res => res.json())
            .then(data => this.setState({
                posts: data
            }))
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/today', {
            method: 'GET',
            headers: {
                "Content-Type":"application/json",
                "Accept":"*/*"
            }
        }).then(res => res.json())
            .then(data => this.setState({
                posts: data
            }))
    }

    render() {
        return (
            <div>
                <div className='row my-5'>

                    <div className='col-12'>
                        <h1>Today's Image...</h1>
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

                    <hr />

                    <div className='row'>
                        <div className='col-12'>
                            <h6 className='text-center'>Cast your vote wisely! You can only vote once per day!</h6>
                        </div>
                    </div>

                    <hr />

                    <div className='row mt-2'>
                        {this.state.posts.map((post, index) => <Post username={post.username} key={index} post_body={post.post_body} date_created={post.date_created} votes={post.votes} isLoggedIn={this.props.isLoggedIn} post_id={post.id} castVote={this.castVote} />)}
                    </div>


                    {this.props.isLoggedIn ?
                    <div className='row'>
                        <div className='col-12'>
                            <Link to='/create'><button className='btn btn-primary mb-5 wide-button'>Post a Caption</button></Link>
                        </div>
                    </div> :
                    <div className='row'>
                        <div className='col-12'>
                            <Link to='/login'><button className='btn btn-primary mb-5 wide-button'>Login to Post a Caption</button></Link>
                        </div>
                        </div>}
            </div>
        )
    }
}
