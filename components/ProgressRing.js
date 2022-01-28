import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { ProgressChart } from 'react-native-chart-kit'
export default function ProgressRing(props) {
    const screenWidth = Dimensions.get("window").width;


    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };
    return (
        <ProgressChart
            data={props.data ? props.data : data}
            width={props.width ? props.width : screenWidth}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={{
                backgroundColor: '#022173',
                backgroundGradientFrom: '#022173',
                backgroundGradientTo: '#1b3fa0',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                ...props.chartConfig
            
            }}
            style={{
                marginVertical: 8,
                borderRadius: 16, ...props.style
            }}
            hideLegend={false}
        />
    );
}
