import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layout/Layout'


class ProjectPage extends Component {
    render() {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <div>
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                            <div key={node.fields.slug}>
                                <h3>
                                    <Link to={node.fields.slug}>
                                        {title}
                                    </Link>
                                </h3>
                                <small>{node.frontmatter.date}</small>
                                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            </div>
                        )
                    })}
                </div>
            </Layout>
        )
    }
}

export default ProjectPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
