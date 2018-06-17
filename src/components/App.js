import React, { Component } from 'react'
import './App.css'
import { Container } from 'bloomer'
import { Route } from 'react-router-dom'
import Header from './Header'
import Dashboard from './Dashboard'
import AddNote from './AddNote'
import EditNote from './EditNote'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Container hasTextAlign='centered'>
          <Header />
          <Route exact path='/' component={Dashboard} />
          <Route path='/add-note' component={AddNote} />
          <Route path='/note/edit/:noteId' component={EditNote} />
        </Container>
      </div>
    )
  }
}

export default App
