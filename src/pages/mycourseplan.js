import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CourseTable from "../components/coursetable"

const myCoursePlan = () => (
    <>
    <Layout />
      <SEO title="Course Plan" />
      <CourseTable />
    </>
  )
  
  export default myCoursePlan