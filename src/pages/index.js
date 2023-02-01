import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


export default () => (
    <Layout>
        <article className="text--lead u-measure">
            <p class="heading heading--small">
                <span role="img" aria-label="Waving hand">👋</span> Hey, it's Olivia.
            </p>
            <p>
                I make things for humans. I'm a product design leader who thinks and builds in systems, and leads teams in developing scalable approaches to solve difficult problems. I'm deeply passionate about designing technology and services that purposefully improve the lives we lead.
            </p>
            <p>
                I work carefully and systematically, drawing from research-based methodologies to ask the right questions and champion the needs of the people we serve first and foremost, and to bring clarity and definition to large, complex problems.
            </p>
            <p>
                I’ve worked with teams at The New York Times, Webflow, Nava, and more. Read the <Link className="link" to="/resume/">resume</Link> for more.
                &nbsp;
                <span role="img" aria-label="Page with curl">📃</span>
            </p>
            <p>
                I believe we can do hard things when we think in systems, experiment, learn quickly, build inclusively, and make space for each other to grow. Let’s jam if you think so too.
            </p>
            <br/>
            <p>
                Based in DC, grown in NY. Forever learning.
                &nbsp;
                <span role="img" aria-label="Seedling sprouting">🌱</span>
            </p>
            <hr className="horizontal-rule"/>
            <p className="heading heading--small">
                <span role="img" aria-label="Lightning bolt">⚡</span> Recent Talks & Recognition
            </p>
            <ul>
                <li>“Design for Humans: How to Make Better Modernization Decisions”, DDD Europe. June 2022, Closing Keynote</li>
                <li>“Understand the Current State of your System using Service Blueprints”, Kandddinsky. October 2022, Workshop</li>
                <li>“Accessibility as a Journey”, NYT Open Speaker Series. 2021, Panel Moderator</li>
                <li>Named one of “D.C.'s Most Powerful Women Designers”, DCFemTech.
                <br/>
                Awarded in <a className="link" href="https://technical.ly/dc/2016/04/06/dcfemtech-honors-52-dcs-powerful-woman-programmers-powerful-woman-designers/">2016</a> and <a className="link" href="https://technical.ly/dc/2018/04/24/here-are-the-winners-of-the-2018-dcfemtech-awards/">2018</a></li>
            </ul>
        </article>
    </Layout>
)
