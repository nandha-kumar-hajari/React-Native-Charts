import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import {
    PieChart,
} from "react-native-chart-kit";

export default function PieGraph(props) {

    const width = Dimensions.get('window').width -40
    const height = 200

    const data = [
        {
            name: "Seoul",
            population: 21500000,
            color: "#A3DA8D",
            legendFontColor: "#7F7F7F",
            legendFontSize: 13
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#406882",
            legendFontColor: "#7F7F7F",
            legendFontSize: 13
        },
        {
            name: "Beijing",
            population: 527612,
            color: "#F58840",
            legendFontColor: "#7F7F7F",
            legendFontSize: 13
        },
        {
            name: "New York",
            population: 8538000,
            color: "#98BAE7",
            legendFontColor: "#7F7F7F",
            legendFontSize: 13
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "#F3ED9E",
            legendFontColor: "#7F7F7F",
            legendFontSize: 13
        }
    ];

    return (
        <PieChart
            data={props.data?props.data:data}
            height={props.height?props.height:height}
            width={props.width?props.width:width}
            chartConfig={{
              
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                ...props.chartConfig
                
            }}
            
            backgroundColor={"transparent"}

            accessor="population"
            // style={graphStyle}
            style={{
                borderRadius: 16
            }}
        />
    );
}
