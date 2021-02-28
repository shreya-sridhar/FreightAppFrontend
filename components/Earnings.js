import React,{Component} from 'react'
import {View, TextInput, StyleSheet,SafeAreaView,Text,Button} from 'react-native';
import EarningsGraph from "C:/Users/shrey/FreightApp/components/EarningsGraph.js";
import EarningsTable from "C:/Users/shrey/FreightApp/components/EarningsTable.js";

export default class ExampleThree extends Component {
  render(){
    return(
      <>
        <EarningsGraph/>
        <EarningsTable/>
      </>
    )
  }
}
