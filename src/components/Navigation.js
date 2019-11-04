import React, { Component } from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { reqSocialSvgs } from "../utils/svgs.util";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allSocialsJson {
          nodes {
            id
            url
            icon
          }
        }
        allMenuJson {
          nodes {
            id
            name
            url
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <div className="top-bar theme-bg-primary-darken">
          <MyNavbar data={data} />
        </div>
      </header>
    )}
  />
);

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar className="navbar-dark position-relative" expand="lg">
          <ul className="social-list list-inline mb-0">
            {this.props.data.allSocialsJson.nodes.map(({ id, url, icon }) => (
              <li className="list-inline-item" key={id}>
                <a className="text-white" href={url}>
                  <img
                    alt=""
                    className="img-fluid"
                    src={reqSocialSvgs(`./${icon.toLowerCase()}.svg`)}
                  />
                </a>
              </li>
            ))}
          </ul>
          {/*//social-list*/}
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            className="text-uppercase"
            id="navigation"
            isOpen={this.state.isOpen}
            navbar
          >
            <Nav className="navbar-nav ml-lg-auto" navbar>
              {this.props.data.allMenuJson.nodes.map(({ id, url, name }) => (
                <NavItem className="mr-lg-3" key={id}>
                  <Link className="nav-link" activeClassName="active" to={url}>
                    {name}
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
