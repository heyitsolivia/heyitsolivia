import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


export default () => (
    <Layout>
        <article className="text--lead u-measure">
            <p>
                <span role="img" aria-label="Waving hand">👋🏻</span>
                Hey, it's Olivia.
            </p>
            <p>
                I make things for humans. I'm a senior designer who thinks and builds in systems, and leads teams in developing and applying thoughtful, inclusive approaches to difficult problems. I'm deeply passionate about designing technology and services that purposefully improves people's lives, especially for vulnerable or underserved communities.
            </p>
            <p>
                I work carefully and systematically, drawing from human-centered, research-based methodologies  to ask the right questions and champion the needs of the people we serve first and foremost, and to bring clarity and definition to large, complex problems.
            </p>
            <p>
                Challenges I've enjoyed include leading a design team to develop a new eligibility application for <a className="link" href="https://www.navapbc.com/#healthcare-gov">HealthCare.gov</a> that replaces legacy systems and provides over 7.5 million households with a streamlined, intuitive experience to get health coverage. I've also helped redesign from the ground up a data-rich interface for <a className="link" href="http://openstates.org">Open States</a>, an open-source product that allows the public to track bills, activity and other data aggregated from 50 state legislatures. Read the <Link className="link" to="/resume/">resume</Link> for more.
                &nbsp;
                <span role="img" aria-label="Page with curl">📃</span>
            </p>
            <p>
                In my free time, I like making things that bring people <a className="link" href="https://openpuppies.com">joy and delight</a>.
                &nbsp;
                <span role="img" aria-label="Dog face">🐶</span>
            </p>
            <p>
                In <a className="link" href="https://technical.ly/dc/2016/04/06/dcfemtech-honors-52-dcs-powerful-woman-programmers-powerful-woman-designers/">2016</a> and <a className="link" href="https://technical.ly/dc/2018/04/24/here-are-the-winners-of-the-2018-dcfemtech-awards/">2018</a>, I was named one of D.C.'s most Powerful Women Designers by <a className="link" href="http://dcfemtech.com/awards-2018-media">DCFemTech</a>.
                &nbsp;
                <span role="img" aria-label="Lightning bolt">⚡</span>
            </p>
            <p>
                Based in DC, grown in NY. Forever learning.
                &nbsp;
                <span role="img" aria-label="Seedling sprouting">🌱</span>
            </p>
        </article>
    </Layout>
)
