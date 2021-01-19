import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

// Styles
import "../../styles/app.css"

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */

const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    return (
        <div className="bg-bgcolor overflow-x-hidden scrollbar-thin scrollbar scrollbar-thumb-rounded scrollbar-thumb-gray-700 scrollbar-track-gray-300">
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>
            {/* The main header section on top of the screen */}
            <header className="bg-gray-50 px-6 py-4 shadow mb-4">
                <div className="flex flex-col container mx-auto md:flex-row items-center md:justify-between">
                    <Link to="/">
                        {site.logo ? (
                            <img
                                className="object-contain h-20 feather feather-image align-center"
                                src={site.logo}
                                alt={site.title}
                            />
                        ) : (
                            isHome
                        )}
                    </Link>
                    <div className="md:flex flex-col md:flex-row md:-mx-4 hidden justify-self-end items-center space-x-5 ">
                        {site.navigation.map((navItem, i) => (
                            <div key={i}>
                                <Link
                                    className=" divide-x block hover:no-underline m-2 uppercase leading-6 font-medium text-gray-900 hover:text-gray-800 md:mx-4  "
                                    to={navItem.url}
                                >
                                    {navItem.label}
                                </Link>
                            </div>
                        ))}
                        <div>
                            <Link to="https://csutv.herokuapp.com/ghost/">
                                <button className="mx-3 inline-block px-6 py-4 hover:bg-primary-light font-medium leading-6 text-center text-gray-50 uppercase transition border-2 border-primary rounded-md bg-primary focus:outline-none">
                                    Přihlásit
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <main className=" min-h-80 my-20">
                {/* All the main content gets inserted here, index.js, post.js */}
                {children}
            </main>
            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className=" px-6 py-5 bg-primary">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left text-gray-300 font-medium">
                            <Link to="/">{site.title}</Link>
                            {` `}© 2020 &mdash; {}
                            {new Date().getFullYear()}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
