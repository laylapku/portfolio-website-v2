import React from 'react'
import { withFauxDOM } from 'react-faux-dom'
import * as d3 from 'd3'
import * as topojson from 'topojson'

const MAP_URL = 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json';
const EDUCATION_URL = 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json';
const w = 1000;
const h = .6 * w;
const marginBottom = 50;

// tooltip
const tooltip = d3.select('body').append('div')
    .attr('id', 'tooltip')
    .style('opacity', 0)
    .style('display', 'none');

// legend settings
const legendRectLocationY = 50;
const legendRectLocationX = [650, 850];
const legendRectHeight = 15;

// d3.geoPath()
const path = d3.geoPath();

// d3-scale-chromatic for colors
const colorScale = d3.scaleThreshold()
    .range(d3.schemeBlues[9]);

class Choropleth extends React.Component {
    componentDidMount() {
        Promise.all([d3.json(MAP_URL), d3.json(EDUCATION_URL)]).then(([dataMap, dataEdu]) => {
            const faux = this.props.connectFauxDOM('svg', 'chart')
            // create canvas
            const svg = d3.select(faux)
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 " + w + " " + (h + marginBottom));
            // map colors to data range
            const minPercentBachelors = d3.min(dataEdu.map(d => d.bachelorsOrHigher));
            const maxPercentBachelors = d3.max(dataEdu.map(d => d.bachelorsOrHigher));
            colorScale.domain(d3.range(minPercentBachelors, maxPercentBachelors, (maxPercentBachelors - minPercentBachelors) / 8));
            // load county geo data
            const counties = topojson.feature(dataMap, dataMap.objects.counties).features;
            // drawing
            svg.append("g")
                .selectAll("path")
                .data(counties)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("fill", d => {
                    return colorScale(dataEdu.find(obj => obj.fips === d.id).bachelorsOrHigher)
                })
                // mousever tooltip
                .on('mouseover', d => {
                    tooltip
                        .html(() => {
                            var match = dataEdu.find(obj => obj.fips === d.id);
                            return match.area_name + ', ' + match.state + ': ' + match.bachelorsOrHigher + '%';
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

            // draw legend

            const legendX = d3.scaleLinear()
                .range(legendRectLocationX)
                .domain([minPercentBachelors, maxPercentBachelors]);

            const legend = svg.append("g")

            legend.selectAll("rect")
                .data(colorScale.range().map(d => {
                    d = colorScale.invertExtent(d);
                    if (d[0] == null) d[0] = legendX.domain()[0];
                    if (d[1] == null) d[1] = legendX.domain()[1];
                    return d;
                }))
                .enter()
                .append("rect")
                .attr("height", legendRectHeight)
                .attr("x", d => legendX(d[0]))
                .attr("y", legendRectLocationY)
                .attr("width", d => legendX(d[1]) - legendX(d[0]))
                .attr("fill", d => colorScale(d[0]))

            // legend axis

            const legendAxis = d3.axisBottom(legendX)
                .tickValues(colorScale.domain())
                .tickFormat((d) => Math.round(d) + '%')
                .tickSize(15)
                .tickPadding(5)

            svg.append("g")
                .attr("transform", "translate(" + 0 + "," + legendRectLocationY + ")")
                .call(legendAxis)
        });
    }
    render() {
        return <div id="choropleth">{this.props.chart}</div>
    }
}

Choropleth.defaultProps = {
    chart: 'Loading...'
}

export default withFauxDOM(Choropleth)