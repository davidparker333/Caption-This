import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import Login from './views/Login';
import PostDetail from './views/PostDetail';
import Register from './views/Register';
import TodayImage from './views/TodayImage';
import UpdatePost from './views/UpdatePost';
import WinnerArchive from './views/WinnerArchive';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      imageAPICalled: false,
      image: null
    }
  }

  componentDidMount() {
    // Go and check the back-end
    // If the image there is more than 24 hours old
    if (this.state.imageAPICalled === false) {
      this.generateNewImage()
    }
    setInterval(this.generateNewImage, 86400000);
  }

  generateNewImage = () => {
    if ((Math.floor(Math.random() * 10) % 2) === 0) {
      fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
        .then(res => res.json())
        .then(data => this.setState({
            image: data
        }))
    } else if ((Math.floor(Math.random() * 10) % 2) !== 0) {
      fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
        .then(res => res.json())
        .then(data => this.setState({
          image: data
        }))
    }
  }

  render() {
    return (
      <div>
        
        <div className='container'>
  
          <div className='row'>
            <div className='col-12'>
              <Navbar />
            </div>
          </div>
  
  
          <Switch>
            <Route exact path='/' render={() => <Home image={this.state.image} />} />
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/register' render={() => <Register />} />
            <Route exact path='/today' render={() => <TodayImage />} />
            <Route exact path='/winners' render={() => <WinnerArchive />} />
            <Route exact path='/post/:id' render={({match}) => <PostDetail match={match} />} />
            <Route exact path='/post/update/:id' render={({match}) => <UpdatePost match={match} />} />
            <Route exact path='/create' render={() => <CreatePost />} />
          </Switch>
            
        </div>
  
  
      </div>
    )
  }
}