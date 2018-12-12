import React from "react"
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

const data = [{ "id": "No doping allegations", "data": [{ "x": 2006, "y": -2341, "time": "39:01", "name": "Carlos Sastre", "country": "ESP", "doping": "" }, { "x": 2015, "y": -2363, "time": "39:23", "name": "Nairo Quintana", "country": "COL", "doping": "" }, { "x": 2008, "y": -2372, "time": "39:32", "name": "Carlos Sastre", "country": "ESP", "doping": "" }, { "x": 1994, "y": -2377, "time": "39:37", "name": "Vladimir Poulnikov", "country": "UKR", "doping": "" }, { "x": 2004, "y": -2380, "time": "39:40", "name": "Giuseppe Guerini", "country": "ITA", "doping": "" }, { "x": 2006, "y": -2387, "time": "39:47", "name": "Denis Menchov", "country": "RUS", "doping": "" }, { "x": 2013, "y": -2390, "time": "39:50", "name": "Nairo Quintana", "country": "COL", "doping": "" }] }, { "id": "Riders with doping allegations", "data": [{ "x": 1995, "y": -2210, "time": "36:50", "name": "Marco Pantani", "country": "ITA", "doping": "Alleged drug use during 1995 due to high hematocrit levels" }, { "x": 1997, "y": -2215, "time": "36:55", "name": "Marco Pantani", "country": "ITA", "doping": "Alleged drug use during 1997 due to high hermatocrit levels" }, { "x": 1994, "y": -2235, "time": "37:15", "name": "Marco Pantani", "country": "ITA", "doping": "Alleged drug use during 1994 due to high hermatocrit levels" }, { "x": 2004, "y": -2256, "time": "37:36", "name": "Lance Armstrong", "country": "USA", "doping": "2004 Tour de France title stripped by UCI in 2012" }, { "x": 1997, "y": -2262, "time": "37:42", "name": "Jan Ullrich", "country": "GER", "doping": "Confessed later in his career to doping" }, { "x": 2001, "y": -2285, "time": "38:05", "name": "Lance Armstrong", "country": "USA", "doping": "2001 Tour de France title stripped by UCI in 2012" }, { "x": 1995, "y": -2294, "time": "38:14", "name": "Miguel Indurain", "country": "ESP", "doping": "1994 Failed test for salbutemol, not a banned drug at that time" }, { "x": 1995, "y": -2294, "time": "38:14", "name": "Alex Zülle", "country": "SUI", "doping": "Confessed in 1998 to taking EPO" }, { "x": 1995, "y": -2296, "time": "38:16", "name": "Bjarne Riis", "country": "DEN", "doping": "Alleged drug use during 1995 due to high hermatrocite levels" }, { "x": 1997, "y": -2302, "time": "38:22", "name": "Richard Virenque", "country": "FRA", "doping": "In 2000 confessed to doping during his career" }, { "x": 2006, "y": -2316, "time": "38:36", "name": "Floyd Landis", "country": "USA", "doping": "Stripped of 2006 Tour de France title" }, { "x": 2006, "y": -2316, "time": "38:36", "name": "Andreas Klöden", "country": "GER", "doping": "Alleged use of illegal blood transfusions in 2006" }, { "x": 2004, "y": -2320, "time": "38:40", "name": "Jan Ullrich", "country": "GER", "doping": "Confessed later in his career to doping" }, { "x": 1995, "y": -2324, "time": "38:44", "name": "Laurent Madouas", "country": "FRA", "doping": "Tested positive for Salbutemol in 1994, suspended for 1 month" }, { "x": 1994, "y": -2335, "time": "38:55", "name": "Richard Virenque", "country": "FRA", "doping": "In 2000 confessed to doping during his career" }, { "x": 2003, "y": -2349, "time": "39:09", "name": "Iban Mayo", "country": "ESP", "doping": "Failed doping test in 2007 Tour de France" }, { "x": 2004, "y": -2352, "time": "39:12", "name": "Andreas Klöden", "country": "GER", "doping": "Alleged doping during 2006 Tour de France" }, { "x": 2004, "y": -2354, "time": "39:14", "name": "Jose Azevedo", "country": "POR", "doping": "Implicated in the Operación Puerto doping case" }, { "x": 2006, "y": -2355, "time": "39:15", "name": "Levi Leipheimer", "country": "USA", "doping": "Testified in 2012 to doping during his time with US Postal Service " }, { "x": 1997, "y": -2362, "time": "39:22", "name": "Francesco Casagrande", "country": "ITA", "doping": "Positive testosterone test in 1998" }, { "x": 1997, "y": -2363, "time": "39:23", "name": "Bjarne Riis", "country": "DEN", "doping": "Alleged drug use during 1995 due to high hermatrocite levels" }, { "x": 1994, "y": -2370, "time": "39:30", "name": "Miguel Indurain", "country": "ESP", "doping": "1994 Failed test for salbutemol, not a banned drug at that time" }, { "x": 1994, "y": -2370, "time": "39:30", "name": "Luc Leblanc", "country": "FRA", "doping": "Admitted to using epo and amphetimines throughout 1994 " }, { "x": 2004, "y": -2381, "time": "39:41", "name": "Santos Gonzalez", "country": "ESP", "doping": "High Hematocrit during 2005 season, removed by team management" }, { "x": 2004, "y": -2381, "time": "39:41", "name": "Vladimir Karpets", "country": "RUS", "doping": "Made payments to Ferrari, but no charges filed" }, { "x": 1995, "y": -2385, "time": "39:45", "name": "Fernando Escartin", "country": "ESP", "doping": "Implicated in Giardini Margherita Raid in 1998 as a 'victim' " }, { "x": 2006, "y": -2387, "time": "39:47", "name": "Michael Rasmussen", "country": "DEN", "doping": "Admitted to doping with multiple substances 1998-2010" }, { "x": 2006, "y": -2387, "time": "39:47", "name": "Pietro Caucchioli", "country": "ITA", "doping": "Associated with Mantova investigation, charges dropped" }] }]

export default () =>
    <div style={{ height: 500 + 'px' }}>
        <ResponsiveScatterPlot
            data={data}
            reverse={true}
            margin={{
                "top": 10,
                "right": 10,
                "bottom": 50,
                "left": 50
            }}
            xScale={{
                "type": "linear",
                "min": "auto",
                "max": "auto"
            }}
            yScale={{
                "type": "linear",
                "min": "auto",
                "max": "auto"
            }}
            colors="set2"
            axisBottom={{
                "orient": "bottom",
                "tickRotation": -90
            }}
            axisLeft={{
                "orient": "left",
                "legend": "Time in Minutes",
                "legendPosition": "middle",
                "legendOffset": -45,
                // with formatted values
                "format": e => { return (Math.floor(e/60)+':'+('0'+e%60).slice(-2)).slice(1) }
            }}
            symbolSize={15}
            tooltip={e => {
                return (
                    <div style={{ alignItems: 'center', fontSize: '16px' }}>
                        <strong>{e.name}:</strong> {e.country}
                        <br />
                        <strong>Year:</strong> {e.x}
                        <br />
                        <strong>Time:</strong> {e.time}
                        <br />
                        {e.doping}                
                    </div>
                )
            }}
            legends={[
                {
                    "anchor": "top-right",
                    "direction": "column",
                    "translateX": -75,
                    "itemWidth": 100,
                    "itemHeight": 12,
                    "itemsSpacing": 5,
                    "itemTextColor": "#999",
                    "symbolSize": 12,
                    "symbolShape": "circle",
                    "effects": [
                        {
                            "on": "hover",
                            "style": {
                                "itemTextColor": "#000"
                            }
                        }
                    ]
                }
            ]}
        />
    </div>