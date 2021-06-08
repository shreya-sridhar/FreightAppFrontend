
import StarRating from 'react-native-star-rating';
// import { yellow100 } from "react-native-paper/lib/typescript/styles/colors";
import React from 'react'
import {View,TextInput,Text,Button} from 'react-native'

class GeneralStarExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
      text:""
    });
  }

  render() {
    return (
      <View style = {{margin:50}}>
       <TextInput  
          style={{alignItems:'center',width:300,marginTop:100,height: 300, fontSize: 20}}  
          placeholder="Did you enjoy your ride? Tell us!"  
          onChangeText={(text) => this.setState({text})}  
        />  
      <Text style={{fontSize: 50}}>  
          {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}   */}
      </Text>
      <StarRating
        disabled={false}
        maxStars={5}
        fullStarColor={'gold'}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
      <Button style={{margin:100}} title="SUBMIT FEEDBACK"/>
      </View>
    );
  }
}

export default GeneralStarExample

