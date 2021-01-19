const config = require(`./src/utils/siteConfig`)
const colors = require(`tailwindcss/colors`)
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        lineClamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        minHeight: {
            80: `73vh`,
        },

        colors: {
            primary: config.themeColor,
            "primary-light": `#D63B4C`,
            bgcolor: config.backgroundColor,
            gray: colors.coolGray,
            pink: colors.fuchsia,
            inherit: `inherit`,
        },
        fontFamily: {
            sans: [`Inter`, `sans-serif`],
        },
        extend: {
            height: {
                vh: `80vh`,
            },
        },
    },
    variants: {},
    plugins: [
        require(`@tailwindcss/typography`),
        require(`tailwind-scrollbar`),
        require(`tailwind-plugin-line-clamp`),
    ],
    important: true,
}
