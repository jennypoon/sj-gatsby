import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Header from "./header"

const styles = () => ({
  body: {
    padding: 50,
  },
})

const Layout = ({ children, classes, links, isVerified }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (!isVerified) {
    return (
      <Grid container className={classes.body}>
        <main>{children}</main>
      </Grid>
    )
  }
  return (
    <>
      <Grid container className={classes.body}>
        <Header siteTitle={data.site.siteMetadata.title} links={links} />
        <main>{children}</main>
      </Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
