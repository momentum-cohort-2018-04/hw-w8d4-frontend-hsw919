import React, { Component } from 'react'
import './App.css'
import { Button } from 'bloomer'
import { Route } from 'react-router-dom'
import firebase, { auth, provider } from './firebase'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      user: null
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin () {
    auth.signInWithPopup(provider)
      .then(res => {
        console.log(res.user)
        this.props.updateUser(res.user)
      })
  }

  render () {
    console.log(this.props)
    return (
      <div className='Login'>
        <Button isColor='primary' onClick={this.handleLogin} isOutlined isSize='medium'>Click here to Login!</Button>
      </div>
    )
  }
}

export default Login
