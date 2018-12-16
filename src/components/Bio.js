import React from 'react'

import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <img
          src={profilePic}
          alt={`Helene Francke`}
           />
        <p>
          Written by <strong>Helene Francke</strong> who lives and works in Stockholm, Sweden building useful things.{' '}
          <span style={{display: 'block'}}><a href="/about">More information about Helene</a></span>
        </p>
        
      </div>
    )
  }
}

export default Bio
