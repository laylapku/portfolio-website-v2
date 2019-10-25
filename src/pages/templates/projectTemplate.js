import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../components/Layout";

// webpack feature: function mapping all *.svg paths to the actual data:image
const reqSvgs = require.context("../../images/webdev-icons", true, /\.svg$/);

const ProjectTemplate = ({ data: { markdownRemark } }) => {
  if (markdownRemark) {
    var {
      id,
      html,
      frontmatter: {
        name,
        tagline,
        madeFor,
        pics,
        url,
        github,
        highlights,
        tech
      }
    } = markdownRemark;
  }

  return (
    <Layout>
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container position-relative">
          <h2 className="page-heading mb-2">{name}</h2>
          <div className="page-heading-tagline">{tagline}</div>
        </div>
        {/*//container*/}
      </div>
      {/*//header-intro*/}

      <section className="project-wrapper container py-5">
        <div className="row">
          <div className="project-media-body d-flex col-12 m-auto">
            {pics && pics.length > 1 ? (
              <Carousel
                controls={false}
                className="carousel-container col-lg-4 mb-3 mb-md-0 md-5 rounded d-none d-md-inline-block"
              >
                {pics.map((pic, idx) => (
                  <Carousel.Item
                    key={`${id}-image-${idx}`}
                    className="carousel-item"
                  >
                    <Img fluid={pic.childImageSharp.fluid} />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <Img
                fluid={pics && pics[0].childImageSharp.fluid}
                className="col-lg-4 mb-3 mb-md-0 md-5 rounded d-md-inline-block d-none"
              />
            )}
            {/*//pics-view*/}
            <aside className="project-sidebar col-lg-6 pl-lg-5">
              <div className="project-sidebar-inner p-4">
                <div className="sidebar-row mb-5">
                  <h3 className="sidebar-title mb-3">Project Info</h3>
                  <ul className="list-unstyled pl-2">
                    {madeFor && (
                      <li className="mb-3">
                        <FontAwesomeIcon
                          className="mr-3 text-primary"
                          transform="grow-6 down-2"
                          icon="meteor"
                        />
                        <strong>For:</strong> {madeFor}
                      </li>
                    )}
                    {url && (
                      <li className="mb-3">
                        <FontAwesomeIcon
                          className="mr-3 text-primary"
                          transform="grow-6 down-2"
                          icon="external-link-alt"
                        />
                        <strong>Link:</strong> <a href={url}>{url.slice(2)}</a>
                      </li>
                    )}
                    {github && (
                      <li className="mb-3">
                        <FontAwesomeIcon
                          className="mr-3 text-primary"
                          transform="grow-6 down-2"
                          icon={["fab", "github-alt"]}
                        />
                        <strong>Code:</strong>{" "}
                        <a href={github}>{github.slice(2)}</a>
                      </li>
                    )}
                  </ul>
                </div>
                {highlights && (
                  <div className="sidebar-row mb-5">
                    <h3 className="sidebar-title mb-3">Highlights</h3>
                    <ul className="mb-3">
                      {highlights.map((highlight, idx) => (
                        <li className="mb-2" key={`${id}-highlight-${idx}`}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="sidebar-row">
                  <h3 className="sidebar-title mb-3">Technologies Used</h3>
                  <div className="webdev-icons mx-2 row align-items-center">
                    {tech.map((item, idx) => (
                      <div
                        className="webdev-icon col-3 col-lg-2 mr-0 mb-4"
                        key={id + "_tech_" + idx}
                      >
                        <img
                          alt={item}
                          className="img-fluid"
                          src={reqSvgs(`./${item.toLowerCase()}.svg`)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/*//section-row*/}
              </div>
              {/*//project-sidebar-inner*/}
            </aside>
          </div>
          <div
            className="project-sections col-lg-12 py-5 mx-3"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {/*//row*/}
      </section>
      {/*//container*/}
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        name
        madeFor
        tagline
        pics {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        url
        github
        highlights
        tech
      }
    }
  }
`;
