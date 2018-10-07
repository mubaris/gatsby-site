import React from 'react'
import Helmet from 'react-helmet'
import PostTemplateDetails from '../components/PostTemplateDetails'

import 'katex/dist/katex.min.css'
import '../assets/mailchimp.css'

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle, url, author, keywords } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const { title: postTitle, description: postDescription, path, image } = post.frontmatter
    const description = postDescription !== null ? postDescription : subtitle
    const metaURL = url + path
    return (
      <div>
        <Helmet>
          <meta property="og:url" content={metaURL} />
          <meta property="og:title" content={`${postTitle} - ${title}`} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content="Mubaris NK" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={`@${author.twitter}`} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Helmet>
        <PostTemplateDetails {...this.props} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        keywords
        author {
          name
          twitter
        }
        disqusShortname
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
        equation
        description
        image
        path
      }
    }
  }
`
