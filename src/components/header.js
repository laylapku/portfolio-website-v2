import React from 'react';
import { StaticQuery, Link, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';

export default () =>
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
              allMenuJson {
                  edges {
                      node {
                          id
                          name
                          url
                      }
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

class MyNavbar extends React.Component {
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
                <Navbar className="navbar navbar-expand-lg navbar-dark position-relative" expand="md">
                    <ul className="social-list list-inline mb-0">
                        {this.props.data.allSocialsJson.edges.map((item) => (
                            <li className="list-inline-item" key={item.node.id}><a className="text-white" href={item.node.url}><FontAwesomeIcon icon={['fab', item.node.icon]} /></a></li>
                        ))}
                    </ul>{/*//social-list*/}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="text-uppercase" id="navigation" isOpen={this.state.isOpen} navbar>
                        <Nav className="navbar-nav ml-lg-auto" navbar>
                            {this.props.data.allMenuJson.edges.map((item) => (
                                <NavItem className="nav-item mr-lg-3" key={item.node.id}>
                                    <Link className="nav-link" activeClassName="active" to={item.node.url}>{item.node.name}</Link>
                                </NavItem>
                            ))}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}