import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [isVerified, setVerification] = useState(false)
  const [links, setLinks] = useState([])

  return (
    <myContext.Provider
      value={{
        isVerified,
        setVerification: () => setVerification(!isVerified),
        links,
        setLinks: customLink => setLinks(customLink),
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
