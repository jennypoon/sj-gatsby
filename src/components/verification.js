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

const VerificationDialog = ({ isVerified, setVerification }) => {
  const [message, setMessage] = useState("")
  const [userInput, setUserInput] = useState("")

  const handleVerification = () => {
    if (userInput === "824") {
      return setVerification(true)
    } else {
      return setMessage(
        "Oops! Incorrect! Try again or contact J/S for the code"
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
            autoFocus
            margin="dense"
            id="password"
            label="Type here"
            type="password"
            error={!!message}
            helperText={message}
            onChange={e => setUserInput(e.target.value)}
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
}

export default VerificationDialog
