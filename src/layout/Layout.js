import React, { Component } from 'react'
import { Link } from 'gatsby'

import Nav from '../components/nav'
import Footer from '../components/footer'

import 'typeface-montserrat'
import 'typeface-merriweather'
import './base.css'


class Layout extends Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return (
      <div className="mainWrapper">
        <Nav />
        <div className="pageWrapper">
        {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
