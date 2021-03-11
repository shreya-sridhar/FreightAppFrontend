
'use strict';

import React, { Component } from 'react'
import {ScrollView,Text,Button} from 'react-native'
import QRCode from 'react-native-qrcode-svg';

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';

class HelloWorld extends Component {
  state = {
    text1: 'Description :',
    text2: 'Description :',
    text3: 'Description :',
    text4: 'Description :',
    text5: 'Description :',
    text6: 'Description :',
    text7: 'Description :',
    text8: 'Description :'
  };

  addItem = (item) => {
    console.log("adding item")
  fetch('https://radiant-meadow-46440.herokuapp.com/items/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({description:item,ride_id:this.props.route.params.ride_track_id}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })

  }

  
  render() {
    // console.log(this.props.route.params.ride_track_id,"ride track id")
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={{fontSize:20, marginTop:50}}> Enter Tracking Description </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text1) => this.setState({text1: text1})}
          value={this.state.text1}
        />
        <Button style={{alignItems:"inline",width:5}} title="+" onPress = {() => this.addItem(this.state.text1)}></Button>
          <QRCode
          value={this.state.text1}
          size={200}
          bgColor='purple'
          fgColor='white'/>
          <TextInput
          style={styles.input}
          onChangeText={(text2) => this.setState({text2: text2})}
          value={this.state.text2}
        /><Button style={{alignItems:"inline",width:5}} title="+" onPress = {this.addItem(this.state.text2)}></Button>
          <QRCode
          value={this.state.text2}
          size={200}
          bgColor='purple'
          fgColor='white'/>
          <TextInput
          style={styles.input}
          onChangeText={(text3) => this.setState({text3: text3})}
          value={this.state.text3}
        /><Button style={{alignItems:"inline",width:5}} title="+" onPress = {this.addItem(this.state.text3)}></Button>
          <QRCode
          value={this.state.text3}
          size={200}
          bgColor='purple'
          fgColor='white'/>
          <TextInput
          style={styles.input}
          onChangeText={(text4) => this.setState({text4: text4})}
          value={this.state.text4}
        /><Button style={{alignItems:"inline",width:5}} title="+" onPress = {this.addItem(this.state.text4)}></Button>
          <QRCode
          value={this.state.text4}
          size={200}
          bgColor='purple'
          fgColor='white'/>
          <TextInput
          style={styles.input}
          onChangeText={(text5) => this.setState({text5: text5})}
          value={this.state.text5}
        /><Button style={{alignItems:"inline",width:5}} title="+" onPress = {this.addItem(this.state.text5)}></Button>
          <QRCode
          value={this.state.text5}
          size={200}
          bgColor='purple'
          fgColor='white'/>
          <TextInput
          style={styles.input}
          onChangeText={(text6) => this.setState({text6: text6})}
          value={this.state.text6}
        /><Button style={{alignItems:"inline",width:5}} title="+" onPress = {this.addItem(this.state.text6)}></Button>
          <QRCode
          value={this.state.text6}
          size={200}
          bgColor='purple'
          fgColor='white'/>
          <TextInput
          style={styles.input}
          onChangeText={(text7) => this.setState({text7: text7})}
          value={this.state.text7}
        /><Button style={{alignItems:"inline",width:5}} title="+" onPress = {this.addItem(this.state.text7)}></Button>
          <QRCode
          value={this.state.text7}
          size={200}
          bgColor='purple'
          fgColor='white'/>
          <TextInput
          style={styles.input}
          onChangeText={(text8) => this.setState({text8: text8})}
          value={this.state.text8}
        /><Button style={{alignItems:"inline",width:5}} title="+" onPress = {this.addItem(this.state.text8)}></Button>
          <QRCode
          value={this.state.text8}
          size={200}
          bgColor='purple'
          fgColor='white'/>
          </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

module.exports = HelloWorld;


