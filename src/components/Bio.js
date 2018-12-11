import React from 'react'

import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Helene Francke`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: "4rem",
            height: "4.8rem",
            borderRadius: "45%"
          }}
        />
        <p>
          Written by <strong>Helene Francke</strong> who lives and works in Stockholm, Sweden building useful things.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
