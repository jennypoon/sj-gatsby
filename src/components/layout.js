import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"

import Header from "./header"
import "./layout.css"

const styles = () => ({
  body: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 1.45rem`,
  },
})

const Layout = ({ children, classes }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={classes.body}>
        <main>{children}</main>
        <footer>TO DO FOOTER</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
