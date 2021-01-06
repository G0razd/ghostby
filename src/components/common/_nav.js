import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-theme-material-ui"
import { AppBar, Toolbar } from "@material-ui/core"
/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */
const Navigation = ({ data }) => (
    
)

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    logo: PropTypes.string,
    title: PropTypes.string,
}

export default Navigation
