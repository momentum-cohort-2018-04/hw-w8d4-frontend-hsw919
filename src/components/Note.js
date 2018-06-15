import React, { Component } from 'react'
import './App.css'
import { Box, Subtitle } from 'bloomer'
// import { Route } from 'react-router-dom'

class Note extends Component {
  render () {
    const note = this.props.note
    console.log(note)
    return (
      <div className='Note'>
        <Box>
          {/* <h1>{note.title}</h1> */}
          <Subtitle isSize={3}>{note.title}</Subtitle>
          <p>{note.text}</p>
          <p>tags: {note.tags}</p>
        </Box>
      </div>
    )
  }
}

export default Note
