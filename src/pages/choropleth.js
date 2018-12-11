import React from 'react'
import {withFauxDOM} from 'react-faux-dom'
import * as d3 from 'd3'
import * as topojson from 'topojson'

const MAP_URL = 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json';
const EDUCATION_URL = 'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json';
const w = 1000;
const h = 600;

// d3.geoPath()
const path = d3.geoPath();
// d3-scale-chromatic for colors
const colorScale = d3.scaleThreshold()
    .range(d3.schemeBlues[9]);

class Choropleth extends React.Component {
    componentDidMount() {
        Promise.all([d3.json(MAP_URL), d3.json(EDUCATION_URL)]).then(([dataMap, dataEdu]) => {
            const faux = this.props.connectFauxDOM('div', 'chart')
            // create canvas
            const svg = d3.select(faux).append("svg")
                .attr("width", w)
                .attr("height", h);
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
                .attr("fill", e => {
                    return colorScale(dataEdu.find(obj => obj.fips === e.id).bachelorsOrHigher)
                })
        });
    }
    render() {
        return <div>{this.props.chart}</div>
    }
}
export default withFauxDOM(Choropleth)