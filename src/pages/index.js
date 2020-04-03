import React, { useState } from "react"
import { Link } from "gatsby"
import moment from "moment"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Youtube from "../components/youtube"
import VerificationDialog from "../components/verification"
import Image from "../components/image"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
    fontWeight: 100,
    fontWeightRegular: 100,
    fontWeightLight: 100,
  },
  overrides: {
    MuiButton: {
      text: {
        textTransform: "uppercase",
        color: "#045B13",
      },
    },
    Typography: {
      h3: {
        fontWeight: 100,
      },
    },
  },
})

const styles = () => ({
  button: {
    textTransform: "none",
  },
})

const IndexPage = ({ classes }) => {
  const [isVerified, setVerification] = useState(false)
  const [links, setLinks] = useState([])

  if (!isVerified) {
    return (
      <VerificationDialog
        isVerified={isVerified}
        setVerification={setVerification}
        setLinks={setLinks}
      />
    )
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Layout links={links} isVerified={isVerified}>
        <SEO title="♡" />
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">
              It's been {moment().diff(moment("2019-08-24"), "days")} Days. Can
              you believe it?
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="body1">
              Now that we're all in quaratine, got nothing else to do but
              finally build this new website out to share the photos taken
            </Typography>
          </Grid>
          <Grid item sm={6} xs={10}>
            <Image alt="Gatsby in Space" filename="gatsby-astronaut.png" />
          </Grid>
        </Grid>
        <Youtube youtubeId={process.env.YOUTUBE_FRIEND_ID} />

        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(IndexPage)
