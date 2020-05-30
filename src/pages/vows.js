import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Vows = () => (
  <Layout>
    <SEO title="♡" />
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Our Vows</Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="h5">Dear Jenny</Typography>
        <Typography variant="body1" paragraph={true}>
          We met each other at the Sun Run, I was quite curious about you <br />
          So I was happy to see you again a few days later on the 502 <br />
          I’m glad I made the first move and asked you to go out with me
          <br />
          Otherwise, who knows what would’ve happened and where we would be!
        </Typography>
        <Typography variant="body1" paragraph={true}>
          At the start of our relationship, we were put to our first test,
          <br />
          You flew off to Paris for 4 months and I was a complete mess,
          <br />
          But everyday, you woke up at dawn to give me a call <br />
          Your emails, letters and packages, I could tell you were giving it
          your all <br />
          Your love was so strong and you believed in us with all your heart
          <br />
          You made me feel like nothing would tear us apart <br />
        </Typography>
        <Typography variant="body1" paragraph={true}>
          7 years later, we’ve grown and learned so much together <br />
          And I can’t wait to continue this journey with you forever <br />
          You’ve taught me to be grateful for what I have <br />
          And always help me see the bright side whenever I’m sad
          <br />
          I promise to love you with all my soul <br />
          We’ll always stand hand in hand as life unfolds
          <br />
          And know that when I nag and pout a lot <br />
          Your well being will always be my main thought
          <br />
          And I promise to let you watch your sports on Christmas and
          Thanksgiving days
          <br />
          Though I will need your help cooking during the commercial delays
          <br />
          And when you get emotional during your teams wins or loss <br />
          I’ll always be the one smirking while holding a Kleenex box <br />
          I promise to never give up and always communicate my happiness and
          sorrows <br />
          And work hard to cherish you like there’s no tomorrow.
          <br />
        </Typography>
        <Typography variant="body1" paragraph={true}>
          I get excited when I think about our future together
          <br />
          Our relationship just keeps getting strong and better.
          <br />
          I’ve been told that marriage is not easy and will be a bumpy ride
          <br />
          But let our love, family and faith be our guide.
          <br />
        </Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="h5">Dear Stephen</Typography>
        <Typography variant="body1" paragraph={true}>
          We met each other at the Sun Run, I was quite curious about you <br />
          So I was happy to see you again a few days later on the 502 <br />
          I’m glad I made the first move and asked you to go out with me
          <br />
          Otherwise, who knows what would’ve happened and where we would be!
        </Typography>
        <Typography variant="body1" paragraph={true}>
          At the start of our relationship, we were put to our first test,
          <br />
          You flew off to Paris for 4 months and I was a complete mess,
          <br />
          But everyday, you woke up at dawn to give me a call <br />
          Your emails, letters and packages, I could tell you were giving it
          your all <br />
          Your love was so strong and you believed in us with all your heart
          <br />
          You made me feel like nothing would tear us apart <br />
        </Typography>
        <Typography variant="body1" paragraph={true}>
          7 years later, we’ve grown and learned so much together <br />
          And I can’t wait to continue this journey with you forever <br />
          You’ve taught me to be grateful for what I have <br />
          And always help me see the bright side whenever I’m sad
          <br />
          I promise to love you with all my soul <br />
          We’ll always stand hand in hand as life unfolds
          <br />
          And know that when I nag and pout a lot <br />
          Your well being will always be my main thought
          <br />
          And I promise to let you watch your sports on Christmas and
          Thanksgiving days
          <br />
          Though I will need your help cooking during the commercial delays
          <br />
          And when you get emotional during your teams wins or loss <br />
          I’ll always be the one smirking while holding a Kleenex box <br />
          I promise to never give up and always communicate my happiness and
          sorrows <br />
          And work hard to cherish you like there’s no tomorrow.
          <br />
        </Typography>
        <Typography variant="body1" paragraph={true}>
          I get excited when I think about our future together
          <br />
          Our relationship just keeps getting strong and better.
          <br />
          I’ve been told that marriage is not easy and will be a bumpy ride
          <br />
          But let our love, family and faith be our guide.
          <br />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Image alt="Ceremony" filename="ceremony" />
      </Grid>
    </Grid>
  </Layout>
)

export default Vows
