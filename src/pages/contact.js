import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSocialsJson {
          nodes {
            id
            url
            icon
          }
        }
      }
    `
  );

  // webpack feature: function mapping all *.svg paths to the actual data:image
  const reqSvgs = require.context("../images/social-icons", true, /\.svg$/);
  return (
    <Layout>
      <SEO title="Contact" />
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
              <div className="speech-bubble bg-white p-4 p-lg-5 shadow-sm">
                <p className="text-center mb-3">
                  If you are interested in hiring me, please use the form below
                  to get in touch.{" "}
                </p>
                <h6 className="font-weight-bold text-center mb-3">
                  You can also find me on the following channels
                </h6>
                <ul className="social-list list-inline mb-0">
                  {data.allSocialsJson.nodes.map(({ id, url, icon }) => (
                    <li className="list-inline-item mb-3" key={id}>
                      <a href={url}>
                        <img
                          alt={icon}
                          className="img-fluid"
                          src={reqSvgs(`./${icon.toLowerCase()}.svg`)}
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
              name="contact-form"
              method="post"
              className="contact-form col-lg-8 mx-lg-auto"
              /* Netlify form handling config */
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact-form" />
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
                    Send
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

export default ContactPage;
