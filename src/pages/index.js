import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SkillBlock from "../components/SkillBlock";
import ProjectCard from "../components/ProjectCard";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allSkillsJson {
          edges {
            node {
              id
              name
              icon
              value
            }
          }
        }
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
        site {
          siteMetadata {
            name
            pic
          }
        }
      }
    `}
    render={data => <AboutPage data={data} />}
  />
);

const AboutPage = props => {
  const { data } = props;

  return (
    <Layout>
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container">
          <div className="profile-teaser media flex-column flex-md-row">
            <img
              alt=""
              className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
              src={data.site.siteMetadata.pic}
            />
            <div className="media-body text-center text-md-left">
              <div className="lead">Hi, my name is</div>
              <h2 className="mt-0 display-4 font-weight-bold">
                {data.site.siteMetadata.name}
              </h2>
              <div className="bio mb-3">
                I'm a web developer specialising in React. I design and build
                web applications.
                <br /> Check out my{" "}
                <Link className="link-on-bg" to="/projects/">
                  portfolio
                </Link>{" "}
                and{" "}
                <Link className="link-on-bg" to="/resume/">
                  resume
                </Link>
                .
              </div>
              {/*//bio*/}
              <Link
                className="theme-btn-on-bg btn font-weight-bold theme-btn-cta"
                to="/contact/"
              >
                Let's chat
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
              {data.allSkillsJson.edges.map((item, index) => (
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
            {data.allProjectsJson.edges
              .filter(
                item =>
                  item.node.name === "Eloqua" ||
                  item.node.name === "Portfolio Website"
              )
              .map(item => (
                <ProjectCard key={item.node.id} item={item} />
              ))}
          </div>
          {/*//project-cards*/}
          <div className="text-center">
            <Link className="btn btn-primary" to="/projects/">
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
