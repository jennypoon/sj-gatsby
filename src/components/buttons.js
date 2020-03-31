import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const styles = () => ({
  button: {
    textTransform: "none",
    margin: 5,
  },
})

const websiteMap = process.env.WEBSITE_MAP || ""
const parsedWebsiteMap = JSON.parse(websiteMap)

const renderButtons = (links = [], classes) =>
  links.map(link => {
    const linkDetails = parsedWebsiteMap[link]
    if (linkDetails) {
      return (
        <Button
          variant="outlined"
          key={linkDetails.label}
          color="primary"
          target="_blank"
          rel="noreferrer"
          className={classes.button}
          href={linkDetails.link}
        >
          {linkDetails.label}
        </Button>
      )
    }
  })

const Buttons = ({ classes, links }) => (
  <>
    {renderButtons(links, classes)}
    <Button
      color="secondary"
      variant="outlined"
      className={classes.button}
      target="_blank"
      rel="noreferrer"
      href="https://drive.google.com/drive/folders/1C5u5JHJB0JB9FG9OZadFtnjPl0_8gS0g?usp=sharing"
    >
      Upload Photos
    </Button>
  </>
)

Buttons.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Buttons)
