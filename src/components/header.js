import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Buttons from "./buttons"
import Image from "./image"

const styles = () => {
  return {
    header: {
      background: `white`,
      marginBottom: `3rem`,
    },
    titleLink: {
      color: `black`,
      textDecoration: `none`,
    },
  }
}

const Header = ({ siteTitle, classes, links }) => (
  <Grid
    container
    className={classes.header}
    justify="space-around"
    direction="row"
    alignItems="flex-start"
  >
    <Grid item sm={9}>
      <Link to="/" className={classes.titleLink}>
        <Typography variant="h4">{siteTitle}</Typography>
      </Link>
      <Typography variant="subtitle1">
        Status: <span style={{ textDecoration: "line-through" }}>Engaged</span>{" "}
        Newlyweds
      </Typography>
    </Grid>

    <Grid item sm={3}>
      <Buttons links={links} />
    </Grid>
    <Grid item xs={12}>
      <Image alt="Street Crossing" filename="sj-street" />
    </Grid>
  </Grid>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
