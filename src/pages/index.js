import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import SkillBlock from "../components/SkillBlock";
import ProjectCard from "../components/ProjectCard";
import ProfilePic from "../images/profile.png";

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/src/pages/projects/*.md" } }
          sort: { fields: [frontmatter___order], order: ASC }
        ) {
          nodes {
            id
            frontmatter {
              path
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
              techs
              order
            }
          }
        }
        allSkillsJson {
          nodes {
            id
            name
            icon
            value
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="Home" />
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container">
          <div className="profile-teaser media flex-column flex-md-row">
            <img
              alt=""
              className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
              src={ProfilePic}
            />
            <div className="media-body text-center text-md-left">
              <div className="lead">Hello, my name is</div>
              <h3 className="mt-0 display-4 font-weight-bold">
                {data.site.siteMetadata.author}
              </h3>
              <div className="bio mb-3">
                I'm a web developer. I design and build web applications.
              </div>
              {/*//bio*/}
              <Link
                className="theme-btn-on-bg btn font-weight-bold theme-btn-cta"
                to="/portfolio/"
              >
                <FontAwesomeIcon className="mr-2" icon="hand-point-right" />
                View Portfolio
              </Link>
            </div>
            {/*//media-body*/}
          </div>
          {/*//profile-teaser*/}
        </div>
        {/*//container*/}
      </div>
      {/*//header-intro*/}
      <section className="skills-section section py-5">
        <div className="container">
          <h3 className="section-title font-weight-bold text-center mb-5">
            Skills Overview
          </h3>
          <div className="skills-blocks mx-auto pt-5">
            <div className="row">
              {data.allSkillsJson.nodes.map((item, index) => (
                <SkillBlock key={index} item={item} />
              ))}
              {/*//skills-blocks*/}
            </div>
            {/*//row*/}
          </div>
        </div>
        {/*//container*/}
      </section>
      {/*//skills-section*/}

      <section className="featured-projects-section py-5 bg-white">
        <div className="container">
          <h3 className="section-title font-weight-bold text-center mb-5">
            Featured Projects
          </h3>
          <div className="project-cards row mb-5">
            {data.allMarkdownRemark.nodes
              .filter(({ frontmatter: { order } }) => order < 103)
              .map(({ id, frontmatter }) => (
                <ProjectCard key={id} frontmatter={frontmatter} />
              ))}
          </div>
          {/*//project-cards*/}
          <div className="text-center">
            <Link className="btn btn-primary" to="/portfolio/">
              View all projects
            </Link>
          </div>
        </div>
        {/*//container*/}
      </section>
      {/*//featured-projects-section*/}
    </Layout>
  );
};

export default AboutPage;
