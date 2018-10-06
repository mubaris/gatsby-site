import React from 'react'
import Helmet from 'react-helmet'
import PageTemplateDetails from '../components/PageTemplateDetails'

class PageTemplate extends React.Component {
  render() {
    // console.log(this.props.data.site.siteMetadata)
    const { title, subtitle, keywords } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark
    const { title: pageTitle, description: pageDescription } = page.frontmatter
    const description = pageDescription !== null ? pageDescription : subtitle

    return (
      <div>
        <Helmet>
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        <PageTemplateDetails {...this.props} />
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        keywords
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
