import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

import BezierLineChart from '../components/BezierLineChart';
import NormalLineChart from '../components/NormalLineChart'
import ProgressRing from "../components/ProgressRing"
import BarGraph from "../components/BarGraph"
import PieGraph from "../components/PieGraph"


export default function Home() {
  const labelData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  const valuesData = [10, 20, 30, 40, 20, 60]
  const progressValueData = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };
  return (
    <ScrollView >
      <Text style={styles.heading}>React Native Charts</Text>
      <View style={styles.chartSurroudView}>
        <Text style={styles.title}>Bezier Line Chart</Text>
        <BezierLineChart
          labels={labelData}
          values={valuesData}
          width={350}
          height={240}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
          }}
          style={{ borderRadius: 16, paddingVertical: 5 }}
        />
      </View>

      <View style={styles.chartSurroudView}>
        <Text style={styles.title}>Line Chart</Text>
        <NormalLineChart
          labels={labelData}
          values={valuesData}
          strokeColor={'#83cb79'}
          width={350}
          height={240}
          chartConfig={{
            backgroundColor: '#7bb872',
            backgroundGradientFrom: '#517e4b',
            backgroundGradientTo: '#7ABD70',
          }}
          style={{ borderRadius: 16, paddingVertical: 5 }}
        />
      </View>

      <View style={styles.chartSurroudView}>
        <Text style={styles.title}>Bar Chart</Text>
        <BarGraph
          width={350}
          // height={500}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#434343',
            backgroundGradientTo: '#000000',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          withInnerLines={true}
          showValuesOnTopOfBars={true}
          labelStyle={{
            marginVertical: 20, color: '#fff'
          }}
          showBarTops={true}
        />
      </View>

      <View style={styles.chartSurroudView}>
        <Text style={styles.title}>Pie Chart</Text>
        <PieGraph
        // width={320}
        />
      </View>

      <View style={styles.chartSurroudView}>
        <Text style={styles.title}>Progress Ring</Text>

        <ProgressRing
          labels={labelData}
          values={progressValueData}
          strokeColor={'#83cb79'}
          width={350}
          height={240}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#009efd',
            backgroundGradientTo: '#2575fc',
          }}
          style={{ borderRadius: 16, paddingVertical: 5 }}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chartSurroudView: {
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  heading:{
    alignSelf: 'center', 
    fontSize: 23, 
    fontWeight: 'bold',
    marginVertical:10,
    color:'#1F1D36'
  },
  title: {
    color: '#142F43',
    fontSize: 18,
    fontWeight: 'bold'
  }
})