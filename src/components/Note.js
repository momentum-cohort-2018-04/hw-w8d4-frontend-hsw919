import React, { Component } from 'react'
import './App.css'
import { Box, Subtitle, Button } from 'bloomer'
// import { Route } from 'react-router-dom'
import firebase from './firebase'

class Note extends Component {
  constructor () {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete () {
    const noteRef = firebase.database().ref(`/notes/${this.props.note.id}`)
    noteRef.remove()
  }

  render () {
    const note = this.props.note
    return (
      <div className='Note'>
        <Box>
          {/* <h1>{note.title}</h1> */}
          <Subtitle isSize={3}>{note.title}</Subtitle>
          <p>{note.text}</p>
          <p>tags: {note.tags}</p>
          <Button isColor='primary' isOutlined>Edit</Button>
          <Button isColor='danger' isOutlined onClick={this.handleDelete}>Delete</Button>
        </Box>
      </div>
    )
  }
}

export default Note
