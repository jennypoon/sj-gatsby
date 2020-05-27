import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  typography: {
    whiteSpace: "pre-line",
    fontFamily: "Raleway, sans-serif",
    fontWeight: 100,
    fontWeightRegular: 100,
    fontWeightLight: 100,
  },
  overrides: {
    MuiButton: {
      text: {
        fontSize: 12,
        textTransform: "uppercase",
        color: "#045B13",
      },
    },
    Typography: {
      h3: {
        fontWeight: 100,
      },
      body2: {
        whiteSpace: "pre-line",
      },
    },
  },
})
