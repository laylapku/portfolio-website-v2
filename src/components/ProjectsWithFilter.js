import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Button, ButtonGroup } from "reactstrap";
import ProjectCard from "./ProjectCard";

const TECH_LIST = ["Production", "Frontend", "Backend", "Data-viz", "Practice"];

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              name
              tagline
              for
              thumb
              logo_inv
              tech
              ctg
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <FilteredProjectCards data={data} />}
  />
);

class FilteredProjectCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    const data = this.props.data;
    const filterText = this.state.filterText;
    return (
      <section className="section pt-5">
        <div className="container">
          <FilterBar onFilterTextChange={this.handleFilterTextChange} />
          <div className="project-cards row mb-5">
            {data.allProjectsJson.edges
              .filter(
                item =>
                  (filterText && item.node.ctg.indexOf(filterText) !== -1) ||
                  filterText === ""
              )
              .map(item => (
                <ProjectCard key={item.node.id} item={item} />
              ))}
          </div>
        </div>
      </section>
    );
  }
}

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rSelected: ""
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  /* handleClick(e, item) {
    this.props.onFilterTextChange(item);
    document.getElementsByClassName("type active")[0].className = "type";
    e.target.className += " active";
  } */

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
    this.props.onFilterTextChange(rSelected);
  }

  render() {
    return (
      <div className="text-center">
        <ButtonGroup className="btn-group mb-5">
          <Button
            color="light"
            onClick={() => this.onRadioBtnClick("")}
            active={this.state.rSelected === ""}
          >
            All
          </Button>
          {TECH_LIST.map(item => (
            <Button
              color="light"
              onClick={() => this.onRadioBtnClick(item)}
              active={this.state.rSelected === item}
              key={"filter-" + item}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}
