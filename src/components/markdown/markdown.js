import React from 'react'
import { FormGroup, Label, Input, Jumbotron, Container } from 'reactstrap';
import marked from 'marked'
import "./markdown.css"

// new tab for link
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
}

marked.setOptions({
    renderer: renderer,
    breaks: true // carriage return 2 <br />
});

const placeholder =
    `# H1
## H2
[I'm an inline-style link](https://www.google.com)
Inline \`code\` has \`back-ticks around\` it.
\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
Strong emphasis, aka bold, with **asterisks** or __underscores__.
`


class Markdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { markdown: placeholder };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            markdown: event.target.value
        });
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <Label for="editor">Editor</Label>
                    <Input type="textarea" name="text" id="editor" onChange={this.handleChange} value={this.state.markdown} />
                </FormGroup>
                <div>Previewer</div>
                <Jumbotron fluid>                    
                    <Container fluid>                        
                        <p id="preview" className="lead" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}></p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default () =>
    <Markdown />