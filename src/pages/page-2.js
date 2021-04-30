import * as React from "react"
import { Link } from "gatsby"
import "../Styling/test.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/degreetable"
import DegreeTable from "../components/degreetable"

//The degree audit page
const SecondPage = () => (
  <>
  <Layout />
    <SEO title="My Degrees" />
    <DegreeTable />
  </>
)

export default SecondPage
