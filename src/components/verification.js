import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"

const emailMap = process.env.ACESSS_MAP || ""

const VerificationDialog = ({ isVerified, setVerification, setLinks }) => {
  const [message, setMessage] = useState("")
  const [userInput, setUserInput] = useState("")

  const handleVerification = () => {
    const parsedEmailMap = JSON.parse(emailMap)
    if (Object.keys(parsedEmailMap).includes(userInput)) {
      setLinks(parsedEmailMap[userInput])
      return setVerification(true)
    } else {
      return setMessage(
        "Oops! This email wasn't registered with us. Please use another one, or reach out to J/S for help!"
      )
    }
  }

  return (
    <Layout>
      <SEO title="Login" />
      <Dialog fullWidth open={!isVerified} onClose={handleVerification}>
        <DialogTitle id="verification">S + J</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the secret code to view this website:
          </DialogContentText>
          <TextField
            margin="dense"
            id="password"
            label="Type here"
            type="text"
            error={!!message}
            helperText={message}
            onChange={e => setUserInput(e.target.value.toLowerCase().trim())}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant={"contained"}
            onClick={handleVerification}
            color="secondary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  )
}

VerificationDialog.defaultProps = {
  isVerified: false,
}

VerificationDialog.propTypes = {
  isVerified: PropTypes.bool,
  setVerification: PropTypes.func,
  setLinks: PropTypes.func,
}

export default VerificationDialog
