import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {

    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Christian, a self proclaimed photographer that's actually trash</h2>
            <p>Need a photographer? <Link to="/contact">Contact</Link></p>
        </Layout>
    )
}

export default IndexPage