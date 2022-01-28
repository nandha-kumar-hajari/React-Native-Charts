import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import {
    BarChart,
} from "react-native-chart-kit";


export default function BarGraph(props) {
    const screenWidth = Dimensions.get("window").width;

    const horizontalLabelData = ["Jan", "Feb", "Mar", "Apr"]
    const verticalValueData = [10, 20, 40, 30,]
    return (
        <BarChart
            width={props.width ? props.width : screenWidth}
            height={props.height ? props.height : 250}
            data={{
                labels: props.labels ? props.labels : horizontalLabelData,
                datasets: [
                    {
                        data: props.values ? props.values : verticalValueData
                    }
                ]

            }}
            withInnerLines={props.withInnerLines ? props.withInnerLines : true}
            chartConfig={{
                // height:100, 
                paddingTop:30,
                height:200,
              
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                ...props.chartConfig
            }}
            showValuesOnTopOfBars={props.showValuesOnTopOfBars ? props.showValuesOnTopOfBars : true}
            showBarTops={props.showBarTops ? props.showBarTops : false}
            labelStyle={{
                marginVertical: 10, color: '#fff',padding:10
            }}
            
            style={{
                
                marginVertical: 8,
                padding:20,
                borderRadius: 16, ...props.style
            }}
        />
    );
}
