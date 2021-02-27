import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { Layout, PostCard, Pagination, Card } from "../components/common"
import { MetaData } from "../components/common/meta"

import "@brainhubeu/react-carousel/lib/style.css"

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
    const featured = data.featured
    const partners = data.partners

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <Card post={featured} />

                <div className="container mx-auto mt-20 ">
                    <div>
                        <h1>Naše články</h1>
                        <hr />
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

                    <section className="mt-20" >
                        <h1 className="text-40xl md:text-12xl text-center pb-20">{partners.title}</h1>
                        {/* The main post content */}
                        <section
                            className="prose-xl text-3xl text-center load-external-scripts"
                            dangerouslySetInnerHTML={{ __html: partners.html }}
                        />
                    </section>
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        posts: PropTypes.object.isRequired,
        featured: PropTypes.object.isRequired,
        partners: PropTypes.object.isRequired,
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
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
        featured: ghostPost(featured: { eq: true }) {
            ...GhostPostFields
        }

        partners: ghostPage(slug: { eq: "partneri" }) {
            title
            html
        }
    }
`
