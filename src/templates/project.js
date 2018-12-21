import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../components/layout"
import ProjectCards from "../components/cards"

export default ({ data }) =>
    <Layout>
        <div className="header-intro theme-bg-primary text-white py-5">
            <div className="container position-relative">
                <h2 className="page-heading mb-2">{data.projectsJson.name}</h2>
                <div className="page-heading-tagline">Project tagline goes here lorem ipsum dolor sit amet.</div>
                <div className="page-heading-logo font-weight-bold position-absolute mt-4 mt-md-0"><img alt="" className="client-logo" src={data.projectsJson.logo_inv} /></div>
            </div>{/*//container*/}
        </div>{/*//header-intro*/}

        <div className="project-wrapper container py-5">
            <div className="row">
                <section className="col-12 col-lg-8">
                    <div className="section-row">
                        <h3 className="section-title">Project Background</h3>
                        <p>{data.projectsJson.desc}</p>
                        <div className="mb-5"><a className="btn btn-primary" href={data.projectsJson.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="mr-2" icon="external-link-alt" /> View Live Site</a></div>
                        <div className="alert alert-dark">
                            This template <strong>includes the original Sketch source file</strong> for making the browser window in the carousel. The screenshots were taken from the <a href="https://www.uxfordev.com/" target="_blank" rel="noopener noreferrer">AppKit template</a>.
			            </div>
                        <div dangerouslySetInnerHTML={{ __html: data.projectsJson.html }} />
                    </div>{/*//section-row*/}
                </section>
                <aside className="project-sidebar col-12 col-lg-4 pl-lg-5">
                    <div className="project-sidebar-inner bg-white p-4">
                        <div className="sidebar-row mb-5">
                            <h3 className="sidebar-title mb-4">Project Info</h3>
                            <ul className="list-unstyled pl-2">
                                <li className="mb-4"><FontAwesomeIcon className="mr-3 text-primary" transform="grow-6 down-2" icon="building" /><strong>{data.projectsJson.for.split(' ')[0]}</strong> {data.projectsJson.for.split(' ')[1]}</li>
                                <li className="mb-4"><FontAwesomeIcon className="mr-3 text-primary" transform="grow-6 down-2" icon="external-link-alt" /><strong>Site Link:</strong> <a href={data.projectsJson.url}>{data.projectsJson.url}</a></li>
                                <li><FontAwesomeIcon className="mr-3 text-primary" transform="grow-6 down-2" icon="wrench" /><strong>Type:</strong> {data.projectsJson.type}</li>
                            </ul>
                        </div>
                        <div className="sidebar-row">
                            <h3 className="sidebar-title mb-3">Technologies Used</h3>
                            <p />
                            <div className="webdev-icons row mb-5 align-items-center">
                                {data.projectsJson.techs.map((item, idx) => (
                                    <div className="webdev-icon col-4 col-md-3 mr-0 mb-4" key={data.projectsJson.id + "_tech_" + idx}><img alt="" className="img-fluid" src={"/images/webdev-icons/" + item.toLowerCase() + ".svg"} /></div>
                                ))}
                            </div>
                        </div>{/*//section-row*/}
                    </div>{/*//project-sidebar-inner*/}
                </aside>
            </div>{/*//row*/}
        </div>{/*//container*/}

        <ProjectCards />
    </Layout>

export const query = graphql`
    query($slug: String!) {
        projectsJson(fields: { slug: { eq: $slug } }) {
            name
            for
            logo_inv
            url
            desc
            techs
            type
            html
        }
    }
`