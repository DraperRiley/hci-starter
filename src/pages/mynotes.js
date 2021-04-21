import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/notestable"
import NotesTable from "../components/notestable"

const myNotes = () => (
    <>
    <Layout />
        <SEO title="Course Plan" />
      <NotesTable />
    </>
  )
  
  export default myNotes