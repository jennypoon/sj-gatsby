import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const styles = theme => ({
  headerImg: {
    marginTop: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
})

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO title="♡" />
    <Grid container spacing={8}>
      <Grid item xs={12} className={classes.headerImg}>
        <Image alt="Street Crossing" filename="sj-street" />
      </Grid>
      <Grid item md={5} sm={12}>
        <Typography variant="h5">
          It's been {moment().diff(moment("2019-08-24"), "days")} Days. Can you
          believe it?
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Now that we're all in quaratine, Jenny has finally been forced to sit
          down and build out this new website so we can share the photos and
          happy memories from our wedding.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Firstly, we wanted to say THANK YOU again, to everyone that attended
          our special day. We are truly blessed and so thankful. It was so
          special to have our families travel across oceans to witness our
          marriage. It was actually the largest Poon Family gathering that has
          ever happened, which brought a tearful reunion.
        </Typography>

        <Typography variant="h5">What's life like now? </Typography>
        <Typography variant="body1" paragraph={true}>
          Life as Newleyweds hasn't been all rainbow and butterflies. Jenny had
          to leave the comfort of her home and build a new one with Stephen in
          his basement suite. Jenny would pretty much visit her parent's house
          everyday - either to grab something she forgot, have dinner with her
          family, or just because she missed her familiar surroundings. Three
          furniture arrangement sessions, endless trips back and forth, and two
          mattresses later ... Jenny is finally settled in! It's been great
          building a new daily routine together and learning about each other's
          habits! We're not sick of each other yet, but our true test will come
          if this quarantine lasts any longer...
        </Typography>
        <Typography variant="h5">What's Next?</Typography>
        <Typography variant="body1" paragraph={true}>
          Well... we were supposed to go to Iceland for our honeymoon in June.
          But due to Covid-19, that has now been postponed. All we can really do
          now is continue spending quality time together and slowly furnish our
          new place!
        </Typography>
      </Grid>
      <Grid item md={7} sm={12}>
        <Image alt="At the pier" filename="sj-pier" />
      </Grid>
    </Grid>
    <Link to="/memories/" style={{ textDecoration: "none" }}>
      <Typography variant="body1">Check out our favorite memories</Typography>
    </Link>
  </Layout>
)

export default withStyles(styles)(IndexPage)
