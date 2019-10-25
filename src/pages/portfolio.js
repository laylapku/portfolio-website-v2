import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Button, ButtonGroup } from "reactstrap";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/projects/*.md" } }
      ) {
        nodes {
          id
          frontmatter {
            path
            type
            name
            madeFor
            tagline
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tech
          }
        }
      }
    }
  `);

  const [ctgFilter, setFilter] = useState("");
  const handleFilterChange = ctgFilter => {
    setFilter(ctgFilter);
  };

  return (
    <Layout>
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container">
          <h2 className="page-heading mb-3">Projects</h2>
          <div className="page-heading-tagline">
            case studies to show you what I can offer
          </div>
        </div>
        {/*//container*/}
      </div>
      {/*//header-intro*/}
      <section className="section pt-5">
        <div className="container">
          <FilterBar onFilterChange={handleFilterChange} />
          <div className="project-cards row mb-5">
            {data.allMarkdownRemark.nodes
              .filter(
                item =>
                  (ctgFilter &&
                    item.frontmatter.type.indexOf(ctgFilter) !== -1) ||
                  ctgFilter === ""
              )
              .map(({ id, frontmatter }) => (
                <ProjectCard key={id} frontmatter={frontmatter} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;

const FilterBar = ({ onFilterChange }) => {
  const TECH_LIST = [
    "Frontend",
    "Backend",
    "Data-viz",
    "Production",
    "Practice"
  ];
  const [rSelected, setrSelected] = useState("");
  const onRadioBtnClick = rSelected => {
    setrSelected(rSelected);
    onFilterChange(rSelected);
  };

  return (
    <div className="text-center">
      <ButtonGroup className="btn-group mb-5">
        <Button
          color="light"
          onClick={() => onRadioBtnClick("")}
          active={rSelected === ""}
        >
          All
        </Button>
        {TECH_LIST.map(item => (
          <Button
            color="light"
            onClick={() => onRadioBtnClick(item)}
            active={rSelected === item}
            key={"filter-" + item}
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
