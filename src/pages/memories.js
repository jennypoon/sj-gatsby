import React from "react"
import { Link as GatsbyLink } from "gatsby"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { cardContent } from "../memoryCardContent"
import Youtube from "../components/youtube"

const cardComp = ({ cardTitle, cardContent, mdSize = 4, cardMedia }) => {
  const cardMediaComp = (title, { mediaSrc, mediaType }) => {
    if (mediaType === "youtube") {
      return <Youtube youtubeId={mediaSrc} />
    }
    if (mediaType === "img") {
      return (
        <CardMedia
          src={require(`../images/${mediaSrc}.jpg`)}
          component="img"
          title={title}
        />
      )
    }
    if (mediaType === "gif") {
      return (
        <CardMedia
          src={require(`../gifs/${mediaSrc}.gif`)}
          component="img"
          title={title}
        />
      )
    }
  }

  return (
    <Grid item md={mdSize} sm={12}>
      <Card>
        {cardMedia.map(media => cardMediaComp(cardTitle, media))}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {cardTitle}
          </Typography>
          <Typography variant="body2" component="p">
            {cardContent}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

const FavMemories = () => (
  <Layout>
    <SEO title="Favorite Memories" />
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Our Favorite Memories</Typography>
        <Typography variant="body1">
          If you'd like to share the photos you've taken, make sure to upload
          them{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href={process.env.WEBSITE_UPLOAD}
          >
            here!
          </Link>
        </Typography>
      </Grid>
      {cardContent.map(moment => cardComp(moment))}
    </Grid>
    <GatsbyLink to="/">Go back to the homepage</GatsbyLink>
  </Layout>
)

export default FavMemories
