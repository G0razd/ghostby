import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Card = ({ post }) => {
    const url = `/${post.slug}/`

    return (
        <div className="w-full">
            <div className="relative rounded-sm block md:flex items-center bg-gray-100 ">
                <div className="relative w-full md:w-2/5 h-vh overflow-hidden">
                    <img src={post.feature_image} alt="" />
                </div>
                <div className="w-full md:w-3/5 flex items-center bg-gray-100 ">
                    <div className="p-12 md:pr-24 md:pl-16  md:py-12">
                        <div className="text-gray-600 text-justify">
                            <span className="text-gray-900 text-4xl m-0 p-0 mb-10 pb-10">
                                {post.title}
                            </span>
                            <p className="prose-2xl overflow-elipse">
                                {post.excerpt}
                            </p>
                        </div>
                        <Link
                            className="no-underline text-inherit m-2 flex items-baseline mt-3 text-secondary hover:text-primary focus:text-primary"
                            to={url}
                        >
                            <span className="text-2xl font-semibold">
                                Čtěte více
                            </span>
                        </Link>
                    </div>
                    <svg
                        className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default Card
