import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Yin Pei-Hua (Jocelyn) - Portfolio" />
    <h1 className="text-3xl font-bold underline text-pink-500">Hi people</h1>
    <p>Welcome to the portfolio of Yin Pei-Hua.</p>
  </Layout>
)

export default IndexPage
