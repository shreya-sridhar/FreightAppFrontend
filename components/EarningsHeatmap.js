import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit'
  
const commitsData = [
    { date: '2017-01-02', count: 1 },
    { date: '2017-01-03', count: 2 },
    { date: '2017-01-04', count: 3 },
    { date: '2017-01-05', count: 4 },
    { date: '2017-01-06', count: 5 },
    { date: '2017-01-30', count: 2 },
    { date: '2017-01-31', count: 3 },
    { date: '2017-03-01', count: 2 },
    { date: '2017-04-02', count: 4 },
    { date: '2017-03-05', count: 2 },
    { date: '2017-02-30', count: 4 }
  ]

  const chartConfigs = [
    // {
    //   backgroundColor: '#000000',
    //   backgroundGradientFrom: '#1E2923',
    //   backgroundGradientTo: '#08130D',
    //   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    //   style: {
    //     borderRadius: 16
    //   }
    // },
    // {
    //   backgroundColor: '#022173',
    //   backgroundGradientFrom: '#022173',
    //   backgroundGradientTo: '#1b3fa0',
    //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //   style: {
    //     borderRadius: 16
    //   }
    // },
    // {
    //   backgroundColor: '#ffffff',
    //   backgroundGradientFrom: '#ffffff',
    //   backgroundGradientTo: '#ffffff',
    //   color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
    // },
    // {
    //   backgroundColor: '#26872a',
    //   backgroundGradientFrom: '#43a047',
    //   backgroundGradientTo: '#66bb6a',
    //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //   style: {
    //     borderRadius: 16
    //   }
    // },
    // {
    //   backgroundColor: '#000000',
    //   backgroundGradientFrom: '#000000',
    //   backgroundGradientTo: '#000000',
    //   color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
    // }, {
    //   backgroundColor: '#0091EA',
    //   backgroundGradientFrom: '#0091EA',
    //   backgroundGradientTo: '#0091EA',
    //   color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
    // },
    // {
    //   backgroundColor: '#e26a00',
    //   backgroundGradientFrom: '#fb8c00',
    //   backgroundGradientTo: '#ffa726',
    //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //   style: {
    //     borderRadius: 16
    //   }
    // },
    // {
    //   backgroundColor: '#b90602',
    //   backgroundGradientFrom: '#e53935',
    //   backgroundGradientTo: '#ef5350',
    //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //   style: {
    //     borderRadius: 16
    //   }
    // },
    // {
    //   backgroundColor: '#ff3e03',
    //   backgroundGradientFrom: '#ff3e03',
    //   backgroundGradientTo: '#ff3e03',
    //   color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
    // }
  ]

<ContributionGraph
  values={commitsData}
  chartConfig={chartConfig}
/>

