import React, { useState } from "react"
import { Link } from "gatsby"
import moment from "moment"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import VerificationDialog from "../components/verification"

const IndexPage = () => {
  const [isVerified, setVerification] = useState(false)
  if (!isVerified) {
    return (
      <VerificationDialog
        isVerified={isVerified}
        setVerification={setVerification}
      />
    )
  }

  return (
    <Layout>
      <SEO title="♡" />
      <h2>
        It's been {moment().diff(moment("2019-08-24"), "days")} Days. Can you
        believe it?
      </h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
