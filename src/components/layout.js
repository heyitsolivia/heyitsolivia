import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
    <main>
        <Helmet>
            <html lang="en"/>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Heyitsolivia | I make things for humans (heyits0livia)</title>
            <meta name="description" content="Olivia Cheng is a senior designer who thinks and builds in systems, and leads teams in developing and applying thoughtful, inclusive approaches to difficult problems."/>
            <link rel="apple-touch-icon" sizes="180x180" href="'/static/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png"/>
            <link rel="manifest" href="/static/favicons/site.webmanifest"/>
        </Helmet>

        <div className="container">
            <Header/>
            {children}
        </div>
        <Footer/>
    </main>
)