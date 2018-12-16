import React, { Component } from 'react'
import { Link } from 'gatsby'

import styles from './nav.module.css'

class Nav extends Component {
    render() {
        return (
            <nav>
          <ul className={styles.nav}>
          <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
            <li className={styles.navItem}><Link to="/about">CV</Link></li>
            <li className={styles.navItem}><Link to="/projects">Projects</Link></li>
            <li className={styles.navItem}><Link to="/">Home</Link></li>
            
          </ul>
        </nav>
        )
    }
}

export default Nav

