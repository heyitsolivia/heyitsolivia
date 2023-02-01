
import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"


export default () => (
    <Layout>
        <Helmet>
            <title>Olivia Cheng | Portfolio</title>
            <meta name="description" content="I make things for humans. I'm a senior designer leading teams in developing and applying thoughtful, inclusive approaches to difficult problems. If I sound like someone you’d like to work with, read on."/>
        </Helmet>
        <article className="text--lead u-measure">
            <h1 class="heading heading--large">
                <span role="img" aria-label="Briefcase">💼 </span>
                Selected Work
            </h1>
            <p>
                Hey, it's Olivia. <span role="img" aria-label="Waving hand">👋</span>
                <br/>
                I make things for humans. I'm a senior designer who thinks and builds in systems, and leads teams in developing and applying thoughtful, inclusive approaches to difficult problems. I'm deeply passionate about designing technology and services that purposefully improves people's lives, especially for vulnerable or underserved communities.
            </p>
            
            <span class="heading heading--large" role="img" aria-label="Waving hand">👋</span>

        </article>
    </Layout>
)
