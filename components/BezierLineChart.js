import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import {
    LineChart,
} from "react-native-chart-kit";
export default function BezierLineChart(props) {
    const horizontalLabelData = ["Jan","Feb","Mar","Apr"]
    const verticalValueData = [10,20,40,30,]
    return (
        <LineChart
            data={{
                labels: props.labels?props.labels:horizontalLabelData,
                datasets: [
                    {
                        data:
                            props.values?props.values:verticalValueData,

                    },

                ]
            }}
            width={props.width ? props.width : Dimensions.get("window").width} // from react-native
            height={props.height ? props.height : 220}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => props.color ? props.color : `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => props.labelColor ? props.labelColor : `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: props.dotRadius ? props.dotRadius : "6",
                    strokeWidth: props.strokeWidth ? props.strokeWidth : "2",
                    stroke: props.strokeColor ? props.strokeColor : "#ffa726"
                },
                ...props.chartConfig
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16, ...props.style
            }}
        />
    );
}
