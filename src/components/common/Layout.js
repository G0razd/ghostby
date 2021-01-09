import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Grid, Button, Container } from "@material-ui/core"
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const useStyles = makeStyles((theme) => {
    return {
        logo: {
            width: 90,
        },
        linkRow: {
            flexGrow: 1,
            marginRight: theme.spacing(1),
        },
        link: {
            textAlign: `center`,
            fontSize: 14,
            "&Padding": {
                padding: theme.spacing(1.2),
            },
        },
    }
})

const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const classes = useStyles()
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <Container maxWidth="xl" disableGutters>
                {/* The main header section on top of the screen */}                        
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Link to="/">
                                {site.logo ? (
                                    <img
                                        className={classes.logo}
                                        src={site.logo}
                                        alt={site.title}
                                    />
                                ) : null}
                            </Link>
                            <Grid
                                container
                                sm={0}
                                md
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                            >
                                <Grid
                                    item
                                    className={classes.linkRow}
                                    container
                                    md={5}
                                    lg={3}
                                    direction="row"
                                    alignItems="center"
                                >
                                    {site.navigation.map(
                                        (navItem, i) => (
                                            <Grid item md key={i}>
                                                <Button
                                                    href={navItem.url}
                                                    className={
                                                        classes.link
                                                    }
                                                >
                                                    {navItem.label}
                                                </Button>
                                            </Grid>
                                        )
                                    )}
                                </Grid>

                                <Grid item sm={1}>
                                    <Button
                                        color="primary"
                                        className={classes.link}
                                        variant="contained"
                                    >
                                                Přihlásit{` `}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>

                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2020 &mdash;
                                {new Date().getFullYear()}
                            </div>
                        </div>
                    </footer>
                </div>
            
            </Container>
        </>
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
