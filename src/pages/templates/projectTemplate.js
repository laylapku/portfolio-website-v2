import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../components/Layout";

const ProjectTemplate = ({ data: { markdownRemark } }) => {
  if (markdownRemark) {
    var {
      id,
      html,
      frontmatter: {
        name,
        tagline,
        madeFor,
        watermark,
        tech,
        url,
        github,
        pics
      }
    } = markdownRemark;
  }

  return (
    <Layout>
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container position-relative">
          <h2 className="page-heading mb-2">{name}</h2>
          <div className="page-heading-tagline">{tagline}</div>
          {watermark && (
            <div className="page-heading-logo font-weight-bold position-absolute mt-4 mt-md-0">
              <img alt="" className="client-logo" src={watermark} />
            </div>
          )}
        </div>
        {/*//container*/}
      </div>
      {/*//header-intro*/}

      <div className="project-wrapper container py-5">
        <div className="row">
          <section className="col-12 col-lg-8">
            {pics && pics.length > 1 && (
              <Carousel
                controls={false}
                className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block"
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
            )}
            {/*//pics-view*/}
            <div
              className="project-sections py-5"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </section>
          <aside className="project-sidebar col-12 col-lg-4 pl-lg-5">
            <div className="project-sidebar-inner bg-white p-4">
              <div className="sidebar-row mb-5">
                <h3 className="sidebar-title mb-4">Project Info</h3>
                <ul className="list-unstyled pl-2">
                  <li className="mb-4">
                    <FontAwesomeIcon
                      className="mr-3 text-primary"
                      transform="grow-6 down-2"
                      icon="meteor"
                    />
                    <strong>For:</strong> {madeFor}
                  </li>
                  <li className="mb-4">
                    <FontAwesomeIcon
                      className="mr-3 text-primary"
                      transform="grow-6 down-2"
                      icon="external-link-alt"
                    />
                    <strong>Link:</strong> <a href={url}>{url.slice(2)}</a>
                  </li>
                  <li className="mb-4">
                    <FontAwesomeIcon
                      className="mr-3 text-primary"
                      transform="grow-6 down-2"
                      icon={["fab", "github-alt"]}
                    />
                    <strong>Code:</strong>{" "}
                    <a href={github}>{github.slice(2)}</a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-row">
                <h3 className="sidebar-title mb-3">Technologies Used</h3>
                <p />
                <div className="webdev-icons row mb-5 align-items-center">
                  {tech.map((item, idx) => (
                    <div
                      className="webdev-icon col-4 col-md-3 mr-0 mb-4"
                      key={id + "_tech_" + idx}
                    >
                      <img
                        alt={item}
                        className="img-fluid"
                        src={
                          "/images/webdev-icons/" + item.toLowerCase() + ".svg"
                        }
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
        {/*//row*/}
      </div>
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
        watermark
        pics {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        url
        github
        tech
      }
    }
  }
`;
