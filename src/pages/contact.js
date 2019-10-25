import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allSocialsJson {
          edges {
            node {
              id
              url
              icon
            }
          }
        }
        site {
          siteMetadata {
            pic
          }
        }
      }
    `}
    render={data => <ContactPage data={data} />}
  />
);

const ContactPage = ({ data }) => {
  // webpack feature: function mapping all *.svg paths to the actual data:image
  const reqSvgs = require.context("../images/social-icons", true, /\.svg$/);
  return (
    <Layout>
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container">
          <h2 className="page-heading mb-0">Contact Me</h2>
        </div>
        {/*//container*/}
      </div>
      {/*//header-intro*/}
      <section className="section py-5">
        <div className="container">
          <div className="row">
            <div className="contact-intro col-lg-8 mx-lg-auto mb-5 text-center">
              <img
                className="profile-small d-inline-block mx-auto rounded-circle mb-3"
                src={data.site.siteMetadata.pic}
                alt=""
              />
              <div className="speech-bubble bg-white p-4 p-lg-5 shadow-sm">
                <p className="text-center mb-3">
                  If you are interested in hiring me, please use the form below
                  to get in touch.{" "}
                </p>
                <h6 className="font-weight-bold text-center mb-3">
                  You can also find me on the following channels
                </h6>
                <ul className="social-list list-inline mb-0">
                  {data.allSocialsJson.edges.map(item => (
                    <li className="list-inline-item mb-3" key={item.node.id}>
                      <a href={item.node.url}>
                        <img
                          alt={item}
                          className="img-fluid"
                          src={reqSvgs(`./${item.node.icon.toLowerCase()}.svg`)}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                {/*//social-list*/}
              </div>
            </div>
            {/*//contact-intro*/}
            <form
              id="contact-form"
              className="contact-form col-lg-8 mx-lg-auto"
              method="post"
              action=""
            >
              <h3 className="text-center mb-3">Get In Touch</h3>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="sr-only" htmlFor="cname">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cname"
                    name="name"
                    placeholder="Name"
                    minLength="2"
                    required=""
                    aria-required="true"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label className="sr-only" htmlFor="cemail">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="cemail"
                    name="email"
                    placeholder="Email"
                    required=""
                    aria-required="true"
                  />
                </div>
                <div className="form-group col-12">
                  <label className="sr-only" htmlFor="cmessage">
                    Your message
                  </label>
                  <textarea
                    className="form-control"
                    id="cmessage"
                    name="message"
                    placeholder="Enter your message"
                    rows="10"
                    required=""
                    aria-required="true"
                  ></textarea>
                </div>
                <div className="form-group col-12">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary py-2"
                  >
                    Send It
                  </button>
                </div>
              </div>
              {/*//form-row*/}
            </form>
          </div>
          {/*//row*/}
        </div>
        {/*//container*/}
      </section>
      {/*//section*/}
    </Layout>
  );
};
