import * as React from "react"
import { Link } from "gatsby"
import "../Styling/test.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/degreetable"
import DegreeTable from "../components/degreetable"

const SecondPage = () => (
  <>
  <Layout />
    <SEO title="My Degrees" />
    <h1>My Degrees</h1>
    <DegreeTable />
  </>
)

export default SecondPage
