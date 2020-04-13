import React from "react"
import Button from "@material-ui/core/Button"

const websiteMap = process.env.WEBSITE_MAP || ""
let linkDetails

const renderButtons = (links = []) =>
  links.map(link => {
    if (websiteMap) {
      const parsedWebsiteMap = JSON.parse(websiteMap)
      linkDetails = parsedWebsiteMap[link]
    }
    if (linkDetails) {
      return (
        <Button
          variant="text"
          key={linkDetails.label}
          target="_blank"
          rel="noreferrer"
          href={linkDetails.link}
        >
          {linkDetails.label}
        </Button>
      )
    }
    return null
  })

const Buttons = ({ links }) => (
  <>
    {renderButtons(links)}
    <Button
      variant="text"
      target="_blank"
      rel="noreferrer"
      href={process.env.WEBSITE_UPLOAD}
    >
      Upload Photos
    </Button>
  </>
)

export default Buttons
