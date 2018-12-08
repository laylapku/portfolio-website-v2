import React from "react"
import { Link, graphql } from "gatsby"
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Layout from "../components/layout"
import Calc from "../components/calc/calc"
import Pmdr from "../components/pmdr/pmdr"
import Drum from "../components/drum/drum"
import Markdown from "../components/markdown/markdown"
import Quote from "../components/quote/quote"
import Heatmap from "../components/heatmap/heatmap"

export default ({ data }) =>
    <Layout>
        <div className="header-intro theme-bg-primary text-white py-5">
            <div className="container position-relative">
                <h2 className="page-heading mb-2">Web App Development</h2>
                <div className="page-heading-tagline">Project tagline goes here lorem ipsum dolor sit amet.</div>
                <div className="page-heading-logo font-weight-bold position-absolute mt-4 mt-md-0"><img alt="" className="client-logo" src="/images/logos/logo-2-inverse.svg" /></div>
            </div>{/*//container*/}
        </div>{/*//header-intro*/}

        <div className="project-wrapper container py-5">
            <div className="row">
                <section className="col-12 col-lg-8">
                    <div className="section-row">
                        <h3 className="section-title">Project Background</h3>
                        <p>Project summary goes here. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>
                        <div className="mb-5"><a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt mr-2"></i> View Live Site</a></div>
                        <div className="alert alert-dark">
                            This template <strong>includes the original Sketch source file</strong> for making the browser window in the carousel. The screenshots were taken from the <a href="https://www.uxfordev.com/" target="_blank" rel="noopener noreferrer">AppKit template</a>.
			            </div>
                    </div>{/*//section-row*/}
                    <Tabs />
                </section>
                <aside className="project-sidebar col-12 col-lg-4 pl-lg-5">
                    <div className="project-sidebar-inner bg-white p-4">
                        <div className="sidebar-row mb-5">
                            <h3 className="sidebar-title mb-4">Project Info</h3>
                            <ul className="list-unstyled pl-2">
                                <li className="mb-4"><i className="fas fa-building mr-3 text-primary" data-fa-transform="grow-6 down-2"></i><strong>Client:</strong> Basecamp</li>
                                <li className="mb-4"><i className="fas fa-external-link-alt mr-3 text-primary" data-fa-transform="grow-6 down-2"></i><strong>Site Link:</strong> <a href="#">website.com</a></li>
                                <li><i className="fas fa-wrench mr-3 text-primary" data-fa-transform="grow-6 down-2"></i><strong>Type:</strong> Frontend &amp; Backend</li>
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

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '5'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Random Quote
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Markdown Previewer
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Drum
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Calculator
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                        >
                            Pomodoro
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '6' })}
                            onClick={() => { this.toggle('6'); }}
                        >
                            Heatmap
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent className="text-center" activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Quote />
                    </TabPane>
                    <TabPane tabId="2">
                        <Markdown />
                    </TabPane>
                    <TabPane tabId="3">
                        <Drum />
                    </TabPane>
                    <TabPane tabId="4">
                        <Calc />
                    </TabPane>
                    <TabPane tabId="5">
                        <Pmdr />
                    </TabPane>
                    <TabPane tabId="6">
                        <Heatmap />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export const query = graphql`
    query {
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
    }
`