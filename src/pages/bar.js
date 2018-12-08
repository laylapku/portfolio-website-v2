import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import * as d3 from "d3";

const w = 1000;
const h = 500;
const padding = 50;

class BarChart extends React.Component {

    componentDidMount() {
        d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json").then((data) => {

            data = data.data;

            // define scale
            const xScale = d3.scaleTime()
                .domain([d3.min(data, (d) => new Date(d[0])), d3.max(data, (d) => new Date(d[0]))])
                .range([padding, w - padding]);

            const yScale = d3.scaleLinear()
                .domain([0, d3.max(data, (d) => d[1])])
                .range([h - padding, padding]);

            // create canvas
            const svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h)

            svg.append('text')
                .attr('x', 400)
                .attr('y', 40)
                .text('United States GDP')
                .attr('id', 'title');

            var tooltip = d3.select("div").append("UncontrolledTooltip")
                .attr("id", "tooltip")
                .attr("placement", "right")
                .attr("target", "UncontrolledTooltipExample")
                .html("Hello World!")

            // draw
            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", (d) => xScale(new Date(d[0])))
                .attr("y", (d) => yScale(d[1]))
                .attr("width", w / (data.length) - 1)
                .attr("height", (d) => h - yScale(d[1]) - padding)
                .attr("fill", "steelblue")
                .attr("data-gdp", (d) => d[1])
                .attr("data-date", (d, i) => d[0])
                .attr("id", "UncontrolledTooltipExample");

            // Generate Axes
            const xAxis = d3.axisBottom(xScale);            
            svg.append("g")
                .attr("transform", "translate(0," + (h - padding) + ")")
                .attr("id", "x-axis")
                .call(xAxis);
            
            svg.append('text')
                .attr('x', 500)
                .attr('y', 490)
                .text('More Information: http://www.bea.gov/national/pdf/nipaguid.pdf')
                .attr('id', 'title');
            
            const yAxis = d3.axisLeft(yScale);
            svg.append("g")
                .attr("transform", "translate(" + padding + ",0)")
                .attr("id", "y-axis")
                .call(yAxis);

            svg.append('text')
                .attr('transform', 'rotate(-90)')
                .attr('x', -250)
                .attr('y', 75)
                .text('Gross Domestic Product');
                
        });
    }

    render() {
        return <div></div>;
    }

}

export default () =>
    <BarChart />