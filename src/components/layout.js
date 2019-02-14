import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
    <div>
        <div className="container">
            <Header/>
            {children}
        </div>
        <Footer/>
    </div>
)