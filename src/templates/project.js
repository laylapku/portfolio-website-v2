import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../components/layout"

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
                    </div>{/*//section-row*/}
                </section>
                <aside className="project-sidebar col-12 col-lg-4 pl-lg-5">
                    <div className="project-sidebar-inner bg-white p-4">
                        <div className="sidebar-row mb-5">
                            <h3 className="sidebar-title mb-4">Project Info</h3>
                            <ul className="list-unstyled pl-2">
                                <li className="mb-4"><FontAwesomeIcon className="mr-3 text-primary" transform="grow-6 down-2" icon="building" /><strong>{data.projectsJson.for.split(' ')[0]}</strong> {data.projectsJson.for.split(' ')[1]}</li>
                                <li className="mb-4"><FontAwesomeIcon className="mr-3 text-primary" transform="grow-6 down-2" icon="external-link-alt" /><strong>Site Link:</strong> <a href={data.projectsJson.url}>{data.projectsJson.url}</a></li>
                                <li><FontAwesomeIcon className="mr-3 text-primary" transform="grow-6 down-2" icon="wrench" /><strong>Type:</strong> Frontend &amp; Backend</li>
                            </ul>
                        </div>
                        <div className="sidebar-row">
                            <h3 className="sidebar-title mb-3">Technologies Used</h3>
                            <p />
                            <div className="webdev-icons row mb-5 align-items-center">

                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/react.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/nodejs.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/javascript.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/jquery-alt.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/html5.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/css3.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/sass.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/python.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/php.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/mysql-alt.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/mongodb-alt.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/webpack.svg" /></div>
                                <div className="webdev-icon col-4 col-md-3 mr-0 mb-4"><img alt="" className="img-fluid" src="/images/webdev-icons/bootstrap4.svg" /></div>

                            </div>
                        </div>{/*//section-row*/}
                    </div>{/*//project-sidebar-inner*/}
                </aside>
            </div>{/*//row*/}
        </div>{/*//container*/}

        <section className="section pt-5 related-projects-section bg-white">
            <div className="container">
                <h3 className="section-title font-weight-bold text-center mb-5">Other Project Case Studies</h3>
                <div className="project-cards row mb-5">
                    {data.allProjectsJson.edges.map((item) => (
                        <div className="col-12 col-lg-4" key={item.node.id}>
                            <div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
                                <div className="card-img-container position-relative">
                                    <img className="card-img-top rounded-0" src={item.node.thumb} alt="" />
                                    <div className="card-img-overlay overlay-logo text-center">
                                        <div className="project-logo"><img alt="" className="img-fluid w-50" src={item.node.logo_inv} /></div>
                                    </div>
                                    <Link className="card-img-overlay overlay-content text-left p-lg-4" to={item.node.url}>
                                        <h5 className="card-title font-weight-bold">{item.node.for}</h5>
                                        <p className="card-text">{item.node.desc}</p>
                                    </Link>
                                </div>
                                <div className="card-body pb-0">
                                    <h4 className="card-title text-truncate text-center mb-0"><Link to={item.node.url}>{item.node.name}</Link></h4>
                                </div>

                                <div className="card-footer border-0 text-center bg-white pb-4">
                                    <ul className="list-inline mb-0 mx-auto">
                                        {item.node.techs.split(" ").map((ele, idx) => (
                                            <li className="list-inline-item" key={item.node.id + "_tech_" + idx}><span className="badge badge-secondary badge-pill">{ele}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>{/*//card*/}
                        </div>
                    ))}
                </div>{/*//row*/}
            </div>{/*//container*/}
        </section>
    </Layout>

export const query = graphql`
    query($slug: String!) {
        allProjectsJson(limit: 3) {
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
        projectsJson(fields: { slug: { eq: $slug } }) {
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
`