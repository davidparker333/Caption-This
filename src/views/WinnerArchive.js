import React, { Component } from 'react'
import Winner from '../components/Winner'

export default class WinnerArchive extends Component {
    constructor() {
        super();

        this.state = {
            winners: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/getallwinners', {
            method: 'GET',
            headers: {
                "Content-Type":"application/json",
                "Accept":"*/*"
            }
        }).then(res => res.json())
            .then(data => this.setState({
                winners: data
            }))
    }

    render() {
        return (
            <div>
                
                <div className='row my-5'>

                    <div className='col-12'>
                        <h1 className='text-center'><i className="fas fa-trophy" /> The Winner's Hall <i className="fas fa-trophy" /></h1>
                    </div>

                </div>

                <div className='row'>

                    {this.state.winners.map((winner, index) => <Winner username={winner.winner_username} key={index} post_body={winner.post_body} date_created={winner.date_created} image={winner.image_url} />)}

                </div>

            </div>
        )
    }
}
