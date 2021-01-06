import React from 'react'
import { Link } from "gatsby-theme-material-ui";
import { Layout } from '../components/common'

const NotFoundPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Error 404</h1>
                <section className="content-body">
                    Stránka nenalezena, <Link to="/">vraťte se domů</Link> a zkus to znovu
                </section>
            </article>
        </div>
    </Layout>
)

export default NotFoundPage
