import React from 'react'
import * as d3 from 'd3'
import { withFauxDOM } from 'react-faux-dom'

const w = 1000;
const h = 500;
const padding = 50;

class MyReactComponent extends React.Component {
    componentDidMount() {
        const faux = this.props.connectFauxDOM('div', 'chart')
        d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json").then((data) => {

            data = data.data;

            const xScale = d3.scaleTime()
                .domain([d3.min(data, (d) => new Date(d[0])), d3.max(data, (d) => new Date(d[0]))])
                .range([padding, w - padding]);

            const yScale = d3.scaleLinear()
                .domain([0, d3.max(data, (d) => d[1])])
                .range([h - padding, padding]);

            const svg = d3.select(faux)
                .append("svg")
                .attr("width", w)
                .attr("height", h)

            // draw
            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", (d) => xScale(new Date(d[0])))
                .attr("y", (d) => yScale(d[1]))
                .attr("width", w / (data.length) - 1)
                .attr("height", (d) => h - yScale(d[1]) - padding)
                .attr("fill", "steelblue")
        })
        this.props.animateFauxDOM(800)
    }

    render() {
        return (
            <div>
                <h2>Here is some fancy data:</h2>
                <div>
                    {this.props.chart}
                </div>
            </div>
        )
    }
}

MyReactComponent.defaultProps = {
    chart: 'loading'
}

export default withFauxDOM(MyReactComponent)