import React from "react"
import Footer from "../components/footer"

export default ({ children }) => (
    <div>
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children}
        </div>
        <Footer/>
    </div>
)
