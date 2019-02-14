import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
    <Layout>
        <Header />
        <h2 className="heading heading--large">Experience</h2>
        
        <h3 className="heading heading--small resume__heading">
            <span>Design Lead & Design Manager, Nava PBC</span>
            <span>2017&ndash;2018</span>
        </h3>
        <ul>
            <li>Led a design team in developing a new HealthCare.gov eligibility application, providing a streamlined experience to help over 7.5 million applicants get health coverage with greater ease and peace of mind. Responsible for design roadmap in short-term and long-term planning. Collaborated with product and engineering leads to develop the product roadmap and to identify, assess and address project risks on a weekly basis.</li>
            <li>Led discovery research composed of competitive analysis, design audits, stakeholder interviews and user research to uncover applicant needs in eligibility-based services. Distilled findings into a set of design principles used to identify key priorities and guide feature development. Advocated for more efficient research practices with our partners, i.e. targeted lightweight testing sprints, over end-to-end testing sessions.</li>
            <li>Strengthened collaboration with government partners by serving as the voice of design in meetings with stakeholders, and organizing weekly design syncs to share progress and gather ongoing feedback. Developed documentation standards for requirements/user flows to enforce alignment and reach consensus between external stakeholders and internal teams.</li>
            <li>Facilitated regular spaces for design team to present and critique work, explore ideas and develop strategies. Held weekly 1:1s with direct reports to provide regular support and feedback. Improved internal team processes, including: increasing usefulness of retrospectives, overhauling onboarding to ramp up new team members, designing more effective interview processes, and developing a career development review process adopted by the broader design organization.</li>
        </ul>
        
        <h3 className="heading heading--small resume__heading">
            <span>Design Lead, Open States</span>

            <span>2017&ndash;Current</span>
        </h3>
        <ul>
            <li>Led the redesign of Open States, an open-source platform that allows the public to track bills, activity and other data aggregated from 50 state legislatures. Developed a design strategy with the project's core maintainers to overhaul the eight-year-old product with a rebranding and a modern, responsive interface.</li>
            <li>Set the design direction for the entire platform after conducting a comprehensive component inventory. Redesigned all components as part of the development of the new design system. Implemented a new front-end built on React and Django with extensible components, each documented in the styleguide.</li>
        </ul>
    
        <h3 className="heading heading--small resume__heading">
            <span>Front-end Engineer, ISL</span>
            <span>2015&ndash;2016</span>
        </h3>
        <ul>
            <li>Conducted user research to design the next iteration of SELFIE, a mirror with a touchscreen interface. Designed user flows and wireframes for a new interface based on qualitative data from stakeholder interviews, user interviews, and usability testing. Developed interface using pyQT and QML, and built an admin dashboard using Django and Vue.js for users to configure SELFIE remotely</li>
            <li>Advocated for collaborative design practices, and ran workshops and exercises to train team members on developing cohesive design systems and to improve communications between project managers, designers, and engineers</li>
            <li>Worked with a team of eight engineers to develop Service Year, a platform built on top of Django and Backbone.js, connecting students and nonprofits via opportunities to serve across the nation. Improved long-term maintainability of Service Year by refactoring large parts of the front-end into extensible, modular Sass components, and maintaining CSS documentation in a living styleguide using KSS</li>
            <li>Led front-end development on numerous websites using technologies like Django, Wordpress, Squarespace, Vue.js. Wrote custom tooling using Gulp to support local development of Squarespace projects.</li>
        </ul>

        <h3 className="heading heading--small resume__heading">
            <span>Designer, Sunlight Labs</span>
            <span>2013&ndash;2015</span>
        </h3>
        <ul>
            <li>Led discovery research for Sunlight Foundation's future flagship product, producing a holistic set of product guidelines including goals, requirements, and success metrics</li>
            <li>Led product  design for EmailCongress, a service for contacting members of Congress via email. Conducted user research to identify pain points, improve on user flows and iterate on wireframes. Implemented visual design and interaction details for  the front-end.</li>
            <li>Led the product redesign of OpenCongress, a platform that allows users to follow activity in the U.S. Congress. Produced a new logo, custom icons, and components library for the rebrand. Created  wireframes for user stories and design mocks for primary views. Conducted user research to understand needs of the core audience and identify improvements to existing features</li>
            <li>Standardized CSS architecture in the  OpenCongress front-end, and developed a design system with documentation for components to guide front-end development</li>
            <li>Increased productivity of the design team by modularizing email template creation and creating automated JavaScript tools to aid in testing and compiling</li>
        </ul>

        <h3 className="heading heading--small resume__heading">
            <span>Designer, AARP Digital</span>
            <span>2012&ndash;2013</span>
        </h3>
        <ul>
            <li>Produced clean, accessible design solutions to meet business needs of stakeholders, and prototyped designs and components in HTML, CSS and JavaScript. Created a responsive styleguide documenting AARP Digital design guidelines and standards, used by internal teams and external vendors to enforce the AARP brand</li>
        </ul>

        <h3 className="heading heading--small resume__heading">
            <span>Designer, Southern Tier AIDS Program</span>
            <span>2010&ndash;2012</span>
        </h3>
        <ul>
            <li>Designed and built event websites for the nonprofit to raise awareness and increase community engagement. Implemented custom front-ends, event registration systems, CMS and payment integrations, helping to facilitate over $200,000 in fundraising annually</li>
        </ul>

        <h2 className="heading heading--large resume__heading">Tools & Skills</h2>
        <p>I choose the right tool for the job. That might include Sketch, InVision, Illustrator, or Balsamiq Mockups, but also whiteboarding, prototyping, writing and asking questions.</p>
        <p>I build inclusively. I advocate for best practices around design systems, front-end performance, accessibility, and responsive development in order to deliver consistent experiences that are accessible to all, and performant across all platforms. Previously, I've built these experiences using HTML, CSS/Sass, Node.js, Vue.js, Gulp, Webpack, Python, and Django.</p>

        <h2 className="heading heading--large">Education</h2>
        <h3 className="heading heading--small resume__heading">
            <span>Binghamton University</span>
            <span>2011</span>
        </h3>
        <p>Bachelor of Arts in Graphic Design</p>
    </Layout>
)
