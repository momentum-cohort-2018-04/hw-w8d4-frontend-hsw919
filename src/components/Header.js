import React, { Component } from 'react'
import './App.css'
import { Title, Icon } from 'bloomer'
// import { Route } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div className='Header'>
        <Title isSize={1} className='header-title'>Notes <Icon isSize='large' className='far fa-clipboard header-icon' /></Title>
        <hr />
      </div>
    )
  }
}

export default Header
