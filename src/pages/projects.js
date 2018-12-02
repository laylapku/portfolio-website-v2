import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Filter from "../components/filter"

export default ({ data }) =>
	<Layout>
		<div className="header-intro theme-bg-primary text-white py-5">
			<div className="container">
				<h2 className="page-heading mb-3">Projects</h2>
				<div className="page-heading-tagline">In-depth Case Studies to show you what I can offer and how I work</div>
			</div>{/*//container*/}
		</div>{/*//header-intro*/}
		<Filter />
	</Layout>

export const query = graphql`
    query {
        allProjectsJson {
            edges {
                node {
                    id
                    name
                    for
                    thumb
                    logo
                    logo_inv
                    url
                    desc
                    techs
                }
            }
        }
    }
`