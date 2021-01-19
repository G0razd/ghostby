import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-theme-material-ui"

const Pagination = ({ pageContext }) => {
    const {
        previousPagePath,
        nextPagePath,
        humanPageNumber,
        numberOfPages,
    } = pageContext

    return (
        <nav className="pagination" role="navigation">
            <div>
                {previousPagePath && (
                    <Link
                        className="hover: no-underline font-medium"
                        to={previousPagePath}
                        rel="prev"
                    >
                        Předchozí
                    </Link>
                )}
            </div>
            {numberOfPages > 1 && (
                <div className="pagination-location w-1/2 text-left">
                    Stránka č. {humanPageNumber} z {numberOfPages} stránek
                </div>
            )}
            <div>
                {nextPagePath && (
                    <Link
                        className="hover: no-underline font-medium"
                        to={nextPagePath}
                        rel="next"
                    >
                        Další
                    </Link>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
