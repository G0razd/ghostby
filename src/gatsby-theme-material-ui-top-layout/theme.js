import { createMuiTheme, colors } from "@material-ui/core"
const config = require(`../utils/siteConfig`)

const theme = createMuiTheme({
    palette: {
        primary: {
            main: config.themeColor,
        },
        secondary: {
            main: `#19857b`,
        },
        error: {
            main: colors.red.A400,
        },
        background: {
            default: config.background,
        },
    },
    typography: {
        fontFamily: [`Lato`, `sans-serif`].join(`,`),
    },
})

export default theme
