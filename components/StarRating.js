
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
      <View>
       <TextInput  
          style={{alignItems:'center',width:300,marginTop:200,height: 300,backgroundColor: 'lightyellow', fontSize: 20}}  
          placeholder="Type here to translate!"  
          onChangeText={(text) => this.setState({text})}  
        />  
      <Text style={{fontSize: 50}}>  
          {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}   */}
      </Text>
      <StarRating style={{padding:100}}
        disabled={false}
        maxStars={5}
        fullStarColor={'gold'}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
      <Button style={{padding:200}} title="SUBMIT FEEDBACK"/>
      </View>
    );
  }
}

export default GeneralStarExample

