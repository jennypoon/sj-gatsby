import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { MuiThemeProvider } from "@material-ui/core/styles"

import { theme } from "../theme"
import Header from "./header"
import VerificationDialog from "./verification"
import { myContext } from "../../provider"

const styles = () => ({
  body: {
    padding: 50,
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
    <myContext.Consumer>
      {context =>
        context.isVerified ? (
          <MuiThemeProvider theme={theme}>
            <Grid container className={classes.body}>
              <Header
                siteTitle={data.site.siteMetadata.title}
                links={context.links}
              />
              <main>{children}</main>
            </Grid>
          </MuiThemeProvider>
        ) : (
          <Grid container className={classes.body}>
            <VerificationDialog
              isVerified={context.isVerified}
              setVerification={context.setVerification}
              setLinks={context.setLinks}
            />
          </Grid>
        )
      }
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
