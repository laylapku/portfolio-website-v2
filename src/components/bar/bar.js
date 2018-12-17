import React from 'react'
import { withFauxDOM } from 'react-faux-dom'
import * as d3 from 'd3'

const DATA_URL = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"
const w = 800;
const h = .5 * w;
const margin = {
    top: 10,
    right: 10,
    bottom: 30,
    left: 75
}

class Bar extends React.Component {
    componentDidMount() {
        d3.json(DATA_URL).then(res => {
            const data = res.data;

            //scaleTime with new Date
            const xScale = d3.scaleTime()
                .domain([d3.min(data, (d) => new Date(d[0])), d3.max(data, (d) => new Date(d[0]))])
                .range([margin.left, w - margin.right]);
            const yScale = d3.scaleLinear()
                .domain([0, d3.max(data, (d) => d[1])])
                .range([h - margin.top, margin.bottom]);

            const faux = this.props.connectFauxDOM('svg', 'chart')
            // create canvas
            const svg = d3.select(faux)
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 " + w + " " + h);
            // tooltip
            const tooltip = d3.select('body').append('div')
                .attr('id', 'tooltip')
                .style('opacity', 0)
                .style('display', 'none');
            // drawing
            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", (d) => xScale(new Date(d[0]))) // Scale with new Date
                .attr("y", (d) => yScale(d[1]) + margin.top - margin.bottom)
                .attr("width", w / (data.length) - 1)
                .attr("height", (d) => h - yScale(d[1]))
                .attr("fill", "steelblue")
                // mousever tooltip
                .on('mouseover', d => {
                    tooltip
                        .html(() => {
                            return d[0] + "<br />$" + d[1].toLocaleString('en') + "B";
                        })
                        .transition()
                        .duration(100)
                        .style('opacity', 0.8)
                        .style('display', 'block')
                        .style('top', d3.event.pageY + 'px')

                    // get viewport width
                    var vW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                    // determine tooltip direction (left or right)
                    if (d3.event.pageX <= vW / 2) {
                        tooltip
                            .style('left', d3.event.pageX + 'px')
                            .style('right', null);
                    }
                    else {
                        tooltip
                            .style('right', vW - d3.event.pageX + 'px')
                            .style('left', null);
                    }
                })
                .on('mouseout', () => {
                    tooltip
                        .transition()
                        .duration(200)
                        .style('opacity', 0)
                        .style('display', 'none');
                });

            // draw axes
            const xAxis = d3.axisBottom(xScale);
            const yAxis = d3.axisLeft(yScale);
            svg.append("g")
                .attr("transform", "translate(0," + (h + margin.top - margin.bottom) + ")")
                .call(xAxis);
            svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + (-margin.bottom + margin.top) + ")")
                .call(yAxis);
            
            // texts
            svg.append('text')
                .attr('transform', 'rotate(-90)')
                .attr('x', -275)
                .attr('y', 25)
                .text('US GDP in $ Billions');
        })
    }
    render() {
        return <div id="bar">{this.props.chart}</div>
    }
}

Bar.defaultProps = {
    chart: 'Loading...'
}

export default withFauxDOM(Bar)