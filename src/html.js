import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* Adding 3rd Party JS */}
          <script type="text/javascript" src="/js/all.min.js"></script>
          <script type="text/javascript" src="/js/jquery-3.3.1.min.js"></script>
          <script type="text/javascript" src="/js/bootstrap.min.js"></script>
          <script type="text/javascript" src="/js/back-to-top.js"></script>
          <script type="text/javascript" src="/js/main.js"></script>
          <script type="text/javascript" src="/js/imagesloaded.pkgd.min.js"></script> 
          <script type="text/javascript" src="/js/isotope.pkgd.min.js"></script>
          <script type="text/javascript" src="/js/isotope-custom.js"></script>
          {/* Adding 3rd Party JS */}
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
