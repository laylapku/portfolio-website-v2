import React from "react"
import { StaticQuery, Link, graphql } from "gatsby";

export default () =>
    <StaticQuery
        query={graphql`
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
        `}
        render={data => (
            <FilterableProjectCards data={data} />
        )}
    />

class ProjectCards extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const data = this.props.data;
        const cards = [];

        data.allProjectsJson.edges.forEach((item) => {
            if (item.node.techs.indexOf(filterText) === -1) {
                return;
            }
            cards.push(
                <div className="col-12 col-lg-4" key={item.node.id}>
                    <div className="card rounded-0 border-0 shadow-sm mb-5">
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
            );
        });

        return (
            <div className="project-cards row mb-5">
                {cards}
            </div>
        );
    }
}

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e, item) {
        this.props.onFilterTextChange(item);
        document.getElementsByClassName("type active")[0].className = "type";
        e.target.className += " active";
    }

    render() {
        return (
            <div className="text-center">
                <ul id="filters" className="filters mb-5 mx-auto pl-0">
                    <li className="type active" onClick={(e) => this.handleClick(e, "")}>All</li>
                    {['React', 'PHP', 'HTML/CSS'].map((item) => (
                        <li className="type" onClick={(e) => this.handleClick(e, item)}>{item}</li>
                    ))}
                </ul>{/*//filters*/}
            </div>
        );
    }
}

class FilterableProjectCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <section className="section pt-5">
                <div className="container">
                    <FilterBar
                        onFilterTextChange={this.handleFilterTextChange}
                    />
                    <ProjectCards
                        filterText={this.state.filterText}
                        data={this.props.data}
                    />
                </div>
            </section>
        );
    }
}