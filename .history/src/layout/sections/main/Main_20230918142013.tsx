import React from 'react'
import styled from 'styled-components'
import photo from '../../../'

export const Main = () => {
  return (
    <div>
      <div>
        <h1>Software Developer</h1>
        <h2>Hello,  my name is Vadim Kovtunenko</h2>
        <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
        <button>Projects</button>
        <button>LinkedIn</button>
      </div>
      <div>
        <Photo src="" alt="" />
      </div>
    </div>
  )
}

const Photo = styled.img`
  width: 720px;
  height: 629px;
`