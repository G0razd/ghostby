import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Tags } from "@tryghost/helpers-gatsby"
import { readingTime as readingTimeHelper } from "@tryghost/helpers"


const Partners = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <div className="w-full lg:w-3/4 px-4 my-4 lg:px-6 py-5 transition shadow-sm bg-gray-50 hover:shadow-lg rounded">
            <Link to={url} className="no-underline text-inherit m-2">
                <header className="post-card-header">
                    <h2 className="m-0 p-0 mb-5 text-primary font-semibold text-3xl ">
                        {post.featured && `📌`} {post.title}
                    </h2>

                    {post.feature_image && (
                        <div
                            className="post-card-image rounded"
                            style={{
                                backgroundImage: `url(${post.feature_image})`,
                            }}
                        ></div>
                    )}
                    {post.tags && (
                        <div className="post-card-tags">
                            <Tags
                                post={post}
                                visibility="public"
                                autolink={false}
                            />
                        </div>
                    )}
                </header>
                <section className="text-2xl overflow-ellipsis text - justify
">
                    {post.excerpt}
                </section>

                <footer className="post-card-footer">
                    <div className="flex flex-wrap pt-8">
                        <div className="w-full md:w-1/3 text-sm font-medium">
                        </div>

                        {
                            <div className="post-card-footer-left">
                                <div className="post-card-avatar">
                                    {post.primary_author.profile_image ? (
                                        <img
                                            className="author-profile-image"
                                            src={
                                                post.primary_author
                                                    .profile_image
                                            }
                                            alt={post.primary_author.name}
                                        />
                                    ) : (
                                        <img
                                            className="default-avatar"
                                            src="/images/icons/avatar.svg"
                                            alt={post.primary_author.name}
                                        />
                                    )}
                                </div>
                                <span>Autor: {post.primary_author.name}</span>{` `}
                            </div>
                        }
                    </div>

                    <div className="post-card-footer-right">
                        <div>
                            {readingTime.substring(
                                0,
                                readingTime.indexOf(`n`) + 1
                            ) + ` četby`}
                        </div>
                    </div>
                </footer>
            </Link>
        </div>
    )
}

Partners.propTypes = {
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

export default Partners
