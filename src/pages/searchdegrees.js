import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/degreesearch"
import DegreeSearch from "../components/degreesearch"

const searchDegrees = () => (
      
      <>
        <Layout />
        <SEO title="Course Plan" />
        <h1>Search Degrees</h1>
        <DegreeSearch />
      </>
    
    
  )
  
  export default searchDegrees