import createStackNavigator from 'react-navigation-stack'
import createAppContainer from 'react-navigation'
import Home from '../pages/home.js'
import Main from '../pages/main.js'

const screens = {
    Home:{
        screen: Home
    },
    Main: {
        screen: Main
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

