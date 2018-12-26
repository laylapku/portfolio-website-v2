import React from "react"
import { StaticQuery, Link, graphql } from "gatsby";
import { Button, ButtonGroup } from 'reactstrap';

const TECH_LIST = ['React', 'NodeJS', 'D3', 'JavaScript', 'MongoDB', 'Python', 'PHP'];

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
                            logo_inv
                            desc
                            techs
                            fields {
                                slug
                            }
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
            if (filterText && item.node.techs.indexOf(filterText) === -1) {
                return;
            }
            cards.push(
                <div className="col-12 col-lg-4" key={item.node.id}>
                    <div className="card rounded-0 border-0 shadow-sm mb-5">
                        <div className="card-img-container position-relative">
                            <img className="card-img-top rounded-0" src={item.node.thumb} alt="" />
                            <div className="card-img-overlay overlay-logo text-center">
                                <div className="project-logo"><img alt="" className="img-fluid" src={item.node.logo_inv} /></div>
                            </div>
                            <Link className="card-img-overlay overlay-content text-left p-lg-4" to={item.node.fields.slug}>
                                <h5 className="card-title font-weight-bold">{item.node.for}</h5>
                                <p className="card-text">{item.node.desc}</p>
                            </Link>
                        </div>
                        <div className="card-body pb-0">
                            <h4 className="card-title text-truncate text-center mb-0"><Link to={item.node.fields.slug}>{item.node.name}</Link></h4>
                        </div>
                        <div className="card-footer border-0 text-center bg-white pb-4">
                            <ul className="list-inline mb-0 mx-auto">
                                {item.node.techs.map((ele, idx) => (
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
        this.state = {
            rSelected: '',
        };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    handleClick(e, item) {
        this.props.onFilterTextChange(item);
        document.getElementsByClassName("type active")[0].className = "type";
        e.target.className += " active";
    }

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
        this.props.onFilterTextChange(rSelected);
    }

    render() {
        return (
            <div className="text-center">
                <ButtonGroup className="mb-5">
                    <Button color="light" onClick={() => this.onRadioBtnClick("")} active={this.state.rSelected === ""}>All</Button>
                    {TECH_LIST.map((item) => (
                        <Button color="light" onClick={() => this.onRadioBtnClick(item)} active={this.state.rSelected === item} key={"filter-"+item}>{item}</Button>
                    ))}
                </ButtonGroup>
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