import React, { Component } from 'react'
import './App.css'
import { Button } from 'bloomer'
import { Link } from 'react-router-dom'
// import Header from './Header'
import firebase from './firebase'
import Note from './Note'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    const notesRef = firebase.database().ref('notes')
    notesRef.on('value', (snapshot) => {
      // console.log(snapshot.val())
      let notes = snapshot.val()
      let newState = []
      for (let note in notes) {
        newState.push({
          id: note,
          title: notes[note].title,
          text: notes[note].text,
          tags: notes[note].tags
        })
      }
      this.setState({
        notes: newState
      })
    })
  }

  render () {
    // console.log(this.state.notes)
    return (
      <div className='Dashboard'>
        <Link to={'/add-note'} className='note-button'>
          <Button isOutlined isColor='primary' isSize='medium'>Add Note</Button>
        </Link>

        <div className='notes-container'>
          {this.state.notes.map((note, idx) => (
            <div key={idx}>
              <Note note={note} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Dashboard
