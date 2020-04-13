import React from "react"
import { Link } from "gatsby"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Youtube from "../components/youtube"
import bananaTrainGif from "../gifs/banana_train.gif"

const FavMemories = () => {
  return (
    <Layout>
      <SEO title="Favorite Memories" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">Our Favorite Memories</Typography>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardMedia
              src={bananaTrainGif}
              component="img"
              title="Door Games"
            />
            <CardMedia
              src={require("../images/bsb-singing.jpg")}
              component="img"
              title="Door Games"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Door Games
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Here's a sneak peak of one of the games they had to go through!
                Extremely entertaining to watch! Shout out to the bridesmaid for
                coming up with such creative ideas! That BSB serenade was the
                cherry on top!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardMedia
              src={require("../images/first-dance.jpg")}
              component="img"
              title="First Dance"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                First Dance
              </Typography>
              <Typography gutterBottom variant="body2">
                Song: Lady Gaga - Is that Alright
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Jenny is so proud of Stephen for taking dancing lessons! Not bad
                for 3 dancing lessons! Thank you so much Derek for the live
                performance! My parents did a double take when they realized you
                were singing live!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardMedia
              src={require("../gifs/musical_chairs.gif")}
              component="img"
              title="Blindfold Musical Chairs"
            />
            <CardMedia
              src={require("../images/musical-chairs-winner.jpg")}
              component="img"
              title="Blindfold Musical Chairs"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Blindfold Musical Chairs
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Thank you guys for being such good sports about playing
                Blindfold Musical Chairs! We didn't realize how competitive it
                could get but it was sure entertaining to watch!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardMedia
              src={require("../images/mcs.jpg")}
              component="img"
              title="Our Awesome MCs"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Our Awesome MCs
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Thank you Derek and Elysia for being our MCs! You guys did an
                amazing job!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={7} sm={12}>
          <Card>
            <CardContent>
              <Youtube youtubeId={process.env.YOUTUBE_FRIEND_ID} />
              <br />
              <Typography gutterBottom variant="h5">
                Memories with Friends
              </Typography>
              <Typography variant="body2" component="p">
                Stephen worked hard on this slideshow and it was such a shame
                that the DJ couldn't figure out how to get the sound to play
                through his system. So here it is again! Turn up the volume and
                enjoy!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={4} xs={12}>
          <Card>
            <CardMedia
              src={require("../images/chinese-k.jpg")}
              component="img"
              title="Reception Game"
            />

            <CardContent>
              <Typography gutterBottom variant="h5">
                Chinese Karaoke
              </Typography>
              <Typography variant="body2" component="p">
                Shout out to Chris, Brian, and Ruzni for partipating in Chinese
                Karoke! You guys were such great sports about it and agreed to
                it as soon as we asked! Our relatives had so much fun guessing!
                Good work you three!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={4} sm={12}>
          <Typography variant="body1" paragraph={true}>
            The speeches from our friends - it's going straight into the
            scrapbook!
          </Typography>
        </Grid>
        <Grid item md={4} sm={12}>
          <Typography variant="body1" paragraph={true}>
            Derek killing it during the Mother/Father Dance!
          </Typography>
        </Grid>
      </Grid>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default FavMemories
