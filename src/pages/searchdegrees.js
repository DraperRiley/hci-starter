import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/degreesearch"
import DegreeSearch from "../components/degreesearch"

//The Search Degrees page
const searchDegrees = () => (
      
      <>
        <Layout />
        <SEO title="Course Plan" />
        <DegreeSearch />
      </>
    
    
  )
  
  export default searchDegrees