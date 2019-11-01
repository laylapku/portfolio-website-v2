import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ProjectCard = ({
  frontmatter: { path, name, madeFor, tagline, thumb, techs }
}) => {
  return (
    <div className="col-12 col-lg-4">
      <div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
        {/*//card-image*/}
        <div className="card-img-container position-relative">
          {thumb && (
            <Img
              className="card-img-top rounded-0"
              fluid={thumb.childImageSharp.fluid}
              alt=""
            />
          )}
          <div className="card-img-overlay overlay-logo text-center" />
          <Link
            className="card-img-overlay overlay-content text-left p-lg-4"
            to={path}
          >
            {madeFor && (
              <h5 className="card-title font-weight-bold">For: {madeFor}</h5>
            )}
            <p className="card-text">{tagline}</p>
          </Link>
        </div>
        {/*//card-body*/}
        <div className="card-body pb-0">
          <h4 className="card-title text-truncate text-center mb-0">
            <Link to={path}>{name}</Link>
          </h4>
        </div>
        {/*//card-footer*/}
        <div className="card-footer border-0 text-center bg-white pb-4">
          <ul className="list-inline mb-0 mx-auto">
            {techs.map((ele, idx) => (
              <li className="list-inline-item mr-0" key={"_tech_" + idx}>
                <span className="badge badge-secondary badge-pill">{ele}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
