// import React,{Component} from 'react'
// import {View, TextInput, StyleSheet,SafeAreaView,Text,Button} from 'react-native';
// import EarningsGraph from "C:/Users/shrey/FreightApp/components/EarningsGraph.js";
// import EarningsTable from "C:/Users/shrey/FreightApp/components/EarningsTable.js";
// import EarningsHeatmap from "C:/Users/shrey/FreightApp/components/EarningsHeatmap.js";

// export default class ExampleThree extends Component {
//   render(){
//     return(
//       <>
//         <EarningsGraph/>
//         <EarningsTable/>
//         <EarningsHeatmap/>
//       </>
//     )
//   }
// }



import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text, View } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'
import { data, contributionData, pieChartData, progressChartData } from 'C:/Users/shrey/FreightApp/assets/data1.js'
import 'babel-polyfill'

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  {
  //   backgroundGradientFrom: '#1E2923',
  // backgroundGradientFromOpacity: 0,
  // backgroundGradientTo: "#08130D",
  // backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
}
]

export default class App extends React.Component {
  renderTabBar() {
    return <StatusBar hidden/>
  }
  render() {
    const width = Dimensions.get('window').width
    const height = 220
    return (
      <ScrollableTabView renderTabBar={this.renderTabBar}>
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 16
          }
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          }
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor,
                paddingTop:100
              }}
            >
              <Text style={{color:"black",fontSize:15,justifyContent:"center",left:130}}>Weekly Spends</Text>
              <BarChart
                width={width}
                height={height}
                data={data}
                chartConfig={chartConfig}
                style={graphStyle}
              />

              <Text style={{color:"black",fontSize:15,justifyContent:"center",left:130}}>Spends Trends</Text>
              <ContributionGraph
                values={contributionData}
                width={width}
                height={height}
                endDate={new Date('2016-05-01')}
                numDays={105}
                chartConfig={chartConfig}
                style={graphStyle}
              />
            </ScrollView>
          )
        })}
      </ScrollableTabView>
    )
  }
}