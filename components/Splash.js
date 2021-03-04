import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}
            >
                <LottieView
                    source={require("C:/Users/shrey/FreightApp/assets/splash.json")}
                    height='100%'
                    autoPlay
                    loop={false}    
                    speed={1}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Login');
                    }}
                />
            </View>
        )
    }
}
