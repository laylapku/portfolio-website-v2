import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
        query {
            allProjectsJson(limit: 3) {
                edges {
                    node {
                        id
                        name
                        tagline
                        for
                        thumb
                        logo_inv
                        tech
                        fields {
                            slug
                        }
                    }
                }
            }
        }
      `}
        render={data => (
            <section className="related-projects-section py-5 bg-white">
                <div className="container">
                    <h3 className="section-title font-weight-bold text-center mb-5">Featured Projects</h3>
                    <div className="project-cards row mb-5">
                        {data.allProjectsJson.edges.map((item) => (
                            <div className="col-12 col-lg-4" key={item.node.id}>
                                <div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
                                    <div className="card-img-container position-relative">
                                        <img className="card-img-top rounded-0" src={item.node.thumb} alt="" />
                                        <div className="card-img-overlay overlay-logo text-center">
                                            <div className="project-logo"><img alt="" className="img-fluid" src={item.node.logo_inv} /></div>
                                        </div>
                                        <Link className="card-img-overlay overlay-content text-left p-lg-4" to={item.node.fields.slug}>
                                            <h5 className="card-title font-weight-bold">{item.node.for}</h5>
                                            <p className="card-text">{item.node.tagline}</p>
                                        </Link>
                                    </div>
                                    <div className="card-body pb-0">
                                        <h4 className="card-title text-truncate text-center mb-0"><Link to={item.node.fields.slug}>{item.node.name}</Link></h4>
                                    </div>
                                    <div className="card-footer border-0 text-center bg-white pb-4">
                                        <ul className="list-inline mb-0 mx-auto">
                                            {item.node.tech.map((ele, idx) => (
                                                <li className="list-inline-item" key={item.node.id + "_tech_" + idx}><span className="badge badge-secondary badge-pill">{ele}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>{/*//card*/}
                            </div>
                        ))}
                    </div>{/*//row*/}
                    <div className="text-center">
                        <Link className="btn btn-primary" to="/projects/">View all projects</Link>
                    </div>
                </div>{/*//container*/}
            </section>
        )}
    />
)