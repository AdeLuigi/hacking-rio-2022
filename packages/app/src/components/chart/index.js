import React from "react";

import { ResponsiveRadialBar } from '@nivo/radial-bar';
import "./style.css";

const ChartRadial = (props) => {
    return (
        <div className="radial-bar-content">
            <h3>{props.legend}</h3>
            <ResponsiveRadialBar
                data={props.data}
                valueFormat=">-.2f"
                padding={0.4}
                cornerRadius={2}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
            />
        </div>

    )
}

export default ChartRadial;