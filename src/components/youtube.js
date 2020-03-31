import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

const styles = () => ({
  videoComp: {
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    paddingTop: 25,
    height: 0,
  },
  iFrame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
})

const Youtube = ({ youtubeId, classes }) => (
  <div className={classes.videoComp}>
    <iframe
      className={classes.iFrame}
      title={"Friend Slideshow"}
      src={`https://www.youtube.com/embed/${youtubeId}`}
      frameBorder="0"
    />
  </div>
)

Youtube.defaultProps = {
  youtubeId: "",
}

Youtube.propTypes = {
  classes: PropTypes.object,
  youtubeId: PropTypes.string,
}

export default withStyles(styles)(Youtube)
