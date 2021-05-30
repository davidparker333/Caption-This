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
      image: null,
      message: null,
      category: null,
      isLoggedIn: localStorage.getItem('token') !== null
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

  handleLogin = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
      }
    }).then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        this.addMessage('You have successfully logged in!', 'success');
        this.setState({
          isLoggedIn: true
        })
      }).catch(e => {
        console.log(e);
        this.addMessage("Something doesn't look right. Please try again.", 'danger');
      })
  }

  logUserOut = () => {
    localStorage.removeItem('token');
    this.addMessage('You are logged out.', 'warning')
    this.setState({
      isLoggedIn: false
    })
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
      fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept":"*/*"
      },
      body: JSON.stringify([{
        "username": username,
        "email": email,
        "password": password
      }])
    }).then(res => res.json())
      .then(data => {
        if (data.username != null) {
          this.addMessage('You have registered successfully!', 'success');
        }
      }).catch(e => {
        console.log(e);
        this.addMessage("Something doesn't look right. Please try again.", 'danger');
      })
    }
  }

  handleCreatePost = (e) => {
    e.preventDefault();
    let caption = e.target.caption.value;
    fetch('http://localhost:5000/api/post', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept":"*/*",
        "Authorization": "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify({
        "post_body": caption
      })
    }).then(res => res.json())
      .then(data => {
        if (data.date_created != null) {
          this.addMessage("Your caption has been posted! Good luck!", 'success');
        }
      }).catch(e => {
        console.log(e);
        this.addMessage("Something doesn't look right. You need to be logged in to post! Please try again.", 'danger');
      })
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/getdailyimage', {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        "Accept":"*/*"
      }
    }).then(res => res.json())
      .then(data => {
        let date = new Date();
        if (data.date_created <= date.setDate(date.getDate()-1)) {
          this.generateNewImage();
        } else {
        let new_image = data.image_url;
        new_image = new_image.replace('{', '');
        new_image = new_image.replace('}', '');
        this.setState({
          image: new_image
        })
        
      }
      })
  }

  generateNewImage = () => {
    if ((Math.floor(Math.random() * 10) % 2) === 0) {
      fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
        .then(res => res.json())
        .then(data => {
          fetch('http://localhost:5000/api/dailyimage', {
            method: 'POST',
            headers: {
              "Content-Type":"application/json",
              "Accept":"*/*"
            },
            body: JSON.stringify({
              "image_url": data
            })
          }).then(res => res.json())
            .then(data => console.log(data))
        })
    } else {
      fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
        .then(res => res.json())
        .then(data => {
          fetch('http://localhost:5000/api/dailyimage', {
            method: 'POST',
            headers: {
              "Content-Type":"application/json",
              "Accept":"*/*"
            },
            body: JSON.stringify({
              "image_url": data
            })
          }).then(res => res.json())
            .then(data => console.log(data))
        })
    }
  }

  render() {
    return (
      <div>
        
        <div className='container'>
  
          <div className='row'>
            <div className='col-12'>
              <Navbar isLoggedIn={this.state.isLoggedIn} logUserOut={this.logUserOut} />
            </div>
          </div>

          {this.state.message ? (<Message message={this.state.message} category={this.state.category} clearMessage={this.clearMessage} />) : (<div></div>)}
          
  
          <Switch>
            <Route exact path='/' render={() => <Home image={this.state.image} isLoggedIn={this.state.isLoggedIn} />} />
            <Route exact path='/login' render={() => <Login handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} />} />
            <Route exact path='/register' render={() => <Register handleRegister={this.handleRegister} addMessage={this.addMessage} />} />
            <Route exact path='/today' render={() => <TodayImage image={this.state.image} isLoggedIn={this.state.isLoggedIn} />} />
            <Route exact path='/winners' render={() => <WinnerArchive image={this.state.image} />} />
            <Route exact path='/post/:id' render={({match}) => <PostDetail match={match} />} />
            <Route exact path='/post/update/:id' render={({match}) => <UpdatePost match={match} />} />
            <Route exact path='/create' render={() => <CreatePost image={this.state.image} handleCreatePost={this.handleCreatePost} />} />
          </Switch>
            
        </div>
  
  
      </div>
    )
  }
}