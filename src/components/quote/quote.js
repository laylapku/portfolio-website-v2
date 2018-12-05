import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./quote.css"

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteText: '',
            quoteAuthor: ''
        }
        this.quoteData = this.props.data.allQuotesJson.edges;
        this.newQuote = this.newQuote.bind(this);
    }

    // generate a random quote on first load
    componentWillMount() {
        window.addEventListener('load', this.newQuote);
    }

    newQuote() {
        let newQuote = this.quoteData[Math.floor(Math.random() * this.quoteData.length)].node;
        this.setState({
            quoteText: newQuote.quote,
            quoteAuthor: newQuote.author
        });
    }

    render() {
        return (
            <div>
                <Alert color="secondary">
                    <div id="text"><FontAwesomeIcon icon={"quote-left"} />{' '}{this.state.quoteText}{' '}<FontAwesomeIcon icon={"quote-right"} /></div>
                    <hr />
                    <div id="author" className="mb-0">- {this.state.quoteAuthor}</div>
                </Alert>
                <Button id="new-quote" alt="new quote" onClick={this.newQuote}>New Quote</Button> &nbsp;
                <a id="tweet-quote" href={
                    'https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text="' +
                    this.state.quoteText +
                    '" %0D%0A- ' +
                    this.state.quoteAuthor +
                    "%0D%0A"}>
                    <Button alt="tweet vote"><FontAwesomeIcon icon={['fab', 'twitter']} /></Button>
                </a>
            </div>
        );
    }
}

export default () =>
    <StaticQuery
        query={graphql`
            query {
                allQuotesJson {
                    edges {
                        node {
                            quote
                            author
                        
                        }
                    }
                }
            }
        `}
        render={data => (
            <Quote data={data} />
        )}
    />
