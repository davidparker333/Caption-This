import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Message from './components/Message';
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
      image: null,
      message: null,
      category: null
    }
  }

  addMessage = (message, category) => {
    this.setState({
      message: message,
      category: category
    })
  }

  clearMessage = () => {
    this.setState({
      message: null,
      category: null
    })
  }

  handleLogin(e) {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    // Send this to the endpoint
    console.log(username, password)
  }

  handleRegister(e) {
    e.preventDefault();
    let username = e.target.username.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmpass = e.target.confirmpassword.value;
    if (password !== confirmpass) {
      this.addMessage('Please make sure your passwords match and try again', 'danger');
    } else {
      // Send this to the endpoint
      console.log(username, email, password, confirmpass);
    }
  }

  componentDidMount() {
    if (this.state.imageAPICalled === false) {
      this.generateNewImage()
    }
    setInterval(this.setAPIState, 86400000);
  }

  setAPIState() {
    this.setState({
      imageAPICalled: false
    })
  }

  generateNewImage = () => {
    if ((Math.floor(Math.random() * 10) % 2) === 0) {
      fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
        .then(res => res.json())
        .then(data => this.setState({
            image: data,
            imageAPICalled: true
        }))
    } else if ((Math.floor(Math.random() * 10) % 2) !== 0) {
      fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
        .then(res => res.json())
        .then(data => this.setState({
          image: data,
          imageAPICalled: true
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

          {this.state.message ? (<Message message={this.state.message} category={this.state.category} clearMessage={this.clearMessage} />) : (<div></div>)}
          
  
          <Switch>
            <Route exact path='/' render={() => <Home image={this.state.image} />} />
            <Route exact path='/login' render={() => <Login handleLogin={this.handleLogin} />} />
            <Route exact path='/register' render={() => <Register handleRegister={this.handleRegister} addMessage={this.addMessage} />} />
            <Route exact path='/today' render={() => <TodayImage image={this.state.image} />} />
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