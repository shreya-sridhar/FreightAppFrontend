import React, { Component } from "react";
import { FlatList, Text, ScrollView,Dimensions, Button, View} from "react-native";
import { Card } from "react-native-elements";
import {CardTen} from "react-native-card-ui"
import { TouchableOpacity } from "react-native-gesture-handler";

export default class History extends Component {
    state = {
      rides: this.props.route.params.catId.rides.filter(ride => ride.customer.id === this.props.route.params.catId.user.id)
    };

     render() {
      console.log(this.props)
      console.log(this.props.route.params.catId.rides.filter(ride => ride.customer.id === this.props.route.params.catId.user.id))
      console.log(this.props.route.params.catId.rides.map(ride => ride.customer.id))
      return (<ScrollView>
        <Text style={{fontSize:20, textAlign:"center", marginTop:30}}>Ride History</Text>
      {this.state.rides.map((ride) => (
          <TouchableOpacity>
          <CardTen title={`${ride.pickup_location} ---> ${ride.drop_location}`}
          subTitle={ride.drop_location}
          price={ride.actual_bill}
          star={3}
          starsFor={ride.pickup_time}>
          </CardTen>
          <View style={{width:"100%",justifyContent: 'center',alignItems: 'center'}}>
          <Button style={{width:50,justifyContent: 'center',alignItems: 'center'}} onPress={() => this.props.navigation.navigate('BarCode',{ride_track_id:ride.id})} title="Add Tracking"/>
          </View>
          <View style={{width:"100%",justifyContent: 'center',alignItems: 'center'}}>
          <Button style={{justifyContent: 'center',alignItems: 'center'}} onPress={() => this.props.navigation.navigate('DeliveryCheck',{ride_track_id:ride.id})} title="Check Status"/>
          </View>
          </TouchableOpacity>
      ))}
      </ScrollView>);
    }
}



 




