import React, { Component } from 'react'
import './App.css'
import { Container } from 'bloomer'
import { Route } from 'react-router-dom'
import Header from './Header'
import Dashboard from './Dashboard'
import AddNote from './AddNote'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Container hasTextAlign='centered'>
          <Header />
          <Route exact path='/' component={Dashboard} />
          <Route path='/add-note' component={AddNote} />
        </Container>
      </div>
    )
  }
}

export default App
