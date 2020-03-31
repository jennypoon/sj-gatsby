import React, { useState } from "react"
import { Link } from "gatsby"
import moment from "moment"
import { withStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Youtube from "../components/youtube"
import VerificationDialog from "../components/verification"
import Buttons from "../components/buttons"

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
    <Layout>
      <SEO title="♡" />
      <Buttons links={links} />
      <h2>
        It's been {moment().diff(moment("2019-08-24"), "days")} Days. Can you
        believe it?
      </h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Youtube youtubeId={process.env.YOUTUBE_FRIEND_ID} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default withStyles(styles)(IndexPage)
