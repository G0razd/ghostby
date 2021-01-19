const config = require(`./src/utils/siteConfig`)
const colors = require(`tailwindcss/colors`)
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        minHeight: {
            80: `73vh`,
        },
        colors: {
            primary: config.themeColor,
            "primary-light": `#D63B4C`,
            bgcolor: config.backgroundColor,
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            sans: [`Inter`, `sans-serif`],
        },
        extend: {},
    },
    variants: {},
    plugins: [
        require(`@tailwindcss/typography`),
        require(`tailwind-scrollbar`),
    ],
    important: true,
}
