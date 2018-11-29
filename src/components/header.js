import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

export default () =>
    <StaticQuery
        query={graphql`
            query {
                allSocialsJson {
                    edges {
                        node {
                            id
                            url
                            icon
                        }
                    }
                }
                allMenuJson {
                    edges {
                        node {
                            id
                            name
                            url
                        }
                    }
                }
            }
        `}
        render={data => (
            <header className="header">      
                <div className="top-bar theme-bg-primary-darken">            
                    <div className="container-fluid">            
                        <nav className="navbar navbar-expand-lg navbar-dark position-relative">
                            <ul className="social-list list-inline mb-0"> 
                                {data.allSocialsJson.edges.map(( item ) => (
	                                <li className="list-inline-item" key={item.node.id}><a className="text-white" href={item.node.url}><i className={item.node.icon}></i></a></li>
                                ))}
                            </ul>{/*//social-list*/}					
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse text-uppercase" id="navigation">
                                <ul className="navbar-nav ml-lg-auto">
                                    {data.allMenuJson.edges.map(( item ) => (
	                                    <li className="nav-item mr-lg-3" key={item.node.id}>
                                            <Link className="nav-link" to={item.node.url}>{item.node.name}</Link>
                                        </li>
                                    ))}					
                                </ul>
                                <span id="slide-line"></span>
                            </div>					
                        </nav>
                    </div>{/*//container*/}
                </div>{/*//top-bar*/}     
            </header>
        )}
    />