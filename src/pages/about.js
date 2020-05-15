import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>My name is Christian. I am a photographer, but not really. I also graduated computer science. Lol.</p>
            <Link to="/contact">Contact</Link>
        </Layout>
    )
}

export default AboutPage