import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <Helmet>
            <title>Olivia Cheng | Resume</title>
        </Helmet>
        <article className="u-measure">
            <h2 className="heading heading--large">Experience</h2>    

            <h3 className="heading heading--small resume__heading">
                <span>Director of Product Design, The New York Times</span>
                <span>2021&ndash;Current</span>
            </h3>

            <ul>
                <li>Built a product design team from the ground up for Core Platforms, focusing on shared platforms, services and tools to modernize foundational capabilities and infrastructure that power products and experiences across The New York Times.</li>
                <li>Led the strategy for a new Identity platform in partnership with product and engineering, driving alignment with teams across the company and leadership. Supported modernization initiatives across Commerce, Messaging, and Native Apps platforms, driving clarity through complex, ambiguous problems. Guided teams through the delivery of critical projects while managing shifting business priorities.</li>
                <li>Developed the product design practice around crafting high quality internal services and tooling. Developed resources for managers to better support and develop designers across the Times, and improved new hire onboarding. Mentored senior designers and new managers in leadership practices.</li>
            </ul>

            <h3 className="heading heading--small resume__heading">
                <span>Staff Product Designer, Webflow</span>
                <span>2019&ndash;2021</span>
            </h3>

            <ul>
                <li>Led strategic initiatives that fed into business and product decision-making, including pricing research to understand the purchasing behavior of core customer segments. Drove generative research to identify opportunities and critical pain points in the user journey around the CMS product to inform the product roadmap.</li>
                <li>Designed new onboarding experiences to lower the barrier of entry for new users through hands-on play, increasing user activation rates by 30%. Collaborated with engineers to build a scalable framework of interaction patterns and components for in-product tutorial experiences.</li>
                <li>Leveled up research as an org capability by coaching designers and product managers in shaping and conducting user research, advising on research initiatives across the organization, and developing a toolkit to standardize research best practices. Initiated DEI efforts across the design team, advocating for inclusive design practices.</li>

            </ul>

            <h3 className="heading heading--small resume__heading">
                <span>Design Lead & Design Manager, Nava PBC</span>
                <span>2017&ndash;2018</span>
            </h3>
            <ul>
                <li>Led a distributed design team in developing a new HealthCare.gov application, providing a streamlined experience to help millions of applicants get health coverage with greater ease. Responsible for overall vision, establishing design milestones, and shaping roadmap with product and engineering partners. Evaluated and addressed program risks with leadership on a weekly basis, and strengthened relationships with government stakeholders at the Centers for Medicare & Medicaid Services.</li>
                <li>Led discovery including competitive analysis, design audits, stakeholder interviews and user research to uncover applicant needs for eligibility-based services. Facilitated development of design principles, repeatable patterns, frameworks and design standards to scale design quality across the team. Advocated for agile and lightweight research practices with stakeholders to increase speed of learning and iteration.</li>
                <li>Facilitated weekly spaces for designers to present and critique work, explore ideas and develop strategies. Provided direct reports with regular support and feedback, coaching, and opportunities for growth. Improved team processes: including revamping onboarding to more easily ramp up new team members, designing more effective interview processes, and developing a career development review process.</li>
            </ul>
        
            <h3 className="heading heading--small resume__heading">
                <span>Front-end Engineer, ISL</span>
                <span>2015&ndash;2016</span>
            </h3>
            <p>Led development on numerous client websites and applications. Contributed to the development of the Service Year platform, refactored major parts of the front-end into extensible components, and maintained front-end documentation. Led research and development for several experimental products, including a touchscreen mirror hardware product. Advocated for better design collaboration practices, and ran workshops to train team members on developing design systems.</p>

            <h3 className="heading heading--small resume__heading">
                <span>Designer, Sunlight Labs</span>
                <span>2013&ndash;2015</span>
            </h3>
            <p>Led end-to-end design for OpenCongress, a platform for tracking legislative activity in the U.S. Congress, and EmailCongress, a service for contacting members of Congress. Conducted user research to inform product improvements. Designed a new component library, custom icon set and logo as part of a brand refresh. Standardized CSS architecture and developed a design system with front-end documentation.</p>

            <h3 className="heading heading--small resume__heading">
                <span>Designer, AARP Digital</span>
                <span>2012&ndash;2013</span>
            </h3>
            <p>Developed accessible design solutions and coded prototypes of new components. Created a styleguide documenting AARP Digital design guidelines and standards used by internal teams and vendors to uphold the brand.</p>

            <h3 className="heading heading--small resume__heading">
                <span>Designer, Southern Tier AIDS Program</span>
                <span>2010&ndash;2012</span>
            </h3>
            <p>Designed websites to increase community engagement and HIV prevention awareness. Developed custom event registration and content management systems, raising hundreds of thousands in fundraising annually.</p>

            <h2 className="heading heading--large resume__heading">Tools & Skills</h2>
            <p>I choose the right tool for the job. That might mean research, prototyping, and systems thinking, but also whiteboarding, facilitating workshops, and asking the right questions.</p>
            <p>I believe we can do hard things when we think in systems, learn quickly, experiment, build inclusively, and make space for each other to grow. Let’s jam if you think so too.</p>

            <h2 className="heading heading--large">Education</h2>
            <h3 className="heading heading--small resume__heading">
                <span>Binghamton University, BA Graphic Design</span>
                <span>2011</span>
            </h3>
        </article>
    </Layout>
)
