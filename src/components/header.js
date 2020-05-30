import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Buttons from "./buttons"

const styles = theme => {
  return {
    header: {
      background: `white`,
      marginBottom: `1rem`,
    },
    titleLink: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        textAlign: "center",
      },
    },
    linkButtons: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        textAlign: "center",
      },
    },
  }
}

const Header = ({ siteTitle, classes, links }) => (
  <Grid
    container
    className={classes.header}
    justify="space-between"
    direction="row"
    alignItems="flex-end"
  >
    <Grid item md={5} className={classes.titleLink}>
      <Link to="/" style={{ color: `black`, textDecoration: `none` }}>
        <Typography variant="h4">{siteTitle}</Typography>
      </Link>
      <Typography variant="subtitle1">
        Status: <span style={{ textDecoration: "line-through" }}>Engaged</span>{" "}
        Newlyweds
      </Typography>
    </Grid>

    <Grid item className={classes.linkButtons}>
      <Buttons links={links} />
    </Grid>
    <Grid item xs={12}>
      <hr></hr>{" "}
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
