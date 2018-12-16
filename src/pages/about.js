import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../layout/Layout'


class About extends Component {
render () {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description 
    return (
        <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
            <h1>
                About me
            </h1>
            <p>My name is Helene Francke and I am a frontend develooper. I grew up in Stockholm, Sweden and I was born in the mid eighties.
              I studied horsemanship in England for a year before moving to Halmstad (a small town on the southern west coast of Sweden) to study linguistics.
              I chose to continue my studies in Uppsala (a town within easy commuting distance from Stockholm) and then I went on to work for a urban development consulting firm for about 10 years.
            </p>
            <p>
              And that's it. My life in a nutshell. Nothing terribly exciting, but it has been a good life so far. I'm a fairly uncomplicateed person and I enjoy the simple things in life.
              Books, tv and movies. The one excitining thing in my life right now is my switch in careers. I recently trained as a frontend developer because I finally found what I want to do with my life.
            </p>
            <blockquote>Curiosity killed the cat. Satisfaction brought it back.</blockquote>
        </Layout>
    )
}
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
