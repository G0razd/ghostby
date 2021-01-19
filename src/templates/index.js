import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { Layout, PostCard, Pagination, Carousel } from "../components/common"
import { MetaData } from "../components/common/meta"

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location, pageContext }) => {
    const posts = data.posts.edges
    const featured = data.featured.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className ="mb-20">
                    {featured.map(({ node }) => (
                        <Carousel key={node.id} post={node} />
                    ))}
                </div>

                <div className="container mx-auto ">
                    <div>
                        <h1>
                           Naše články 
                        </h1>
                        <hr/>
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard
                                className="post-feed"
                                key={node.id}
                                post={node}
                            />
                        ))}
                    </div>

                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        posts: PropTypes.object.isRequired,
        featured: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
    query GhostPostQuery($limit: Int!, $skip: Int!) {
        posts: allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            limit: $limit
            skip: $skip
            filter: { featured: { eq: false } }
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
        featured: allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            limit: $limit
            skip: $skip
            filter: { featured: { eq: true } }
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
    }
`
