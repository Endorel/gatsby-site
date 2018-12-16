import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../layout/Layout'

class Contact extends Component {
    render() {
        return (
            <Layout>
                <form>
                    <label>Name: </label>
                    <input type="text" name="name" />
                    <br />
                    <label>Subject: </label>
                    <input type="text" name="subject" />
                    <br />
                    <label>Message: </label>
                    <br />
                    <textarea></textarea>
                    <br />
                    <button>Send</button>
                </form>
            </Layout>
        )
    }
}

export default Contact
