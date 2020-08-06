import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DiceScreen from '../screens/DiceScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Dashboard: DashboardScreen,
  Dice: {
    screen: DiceScreen},
  Login: {
    screen: LoginScreen
    // navigationOptions: {               -- to hide the header of a single screen
    //     headerShown: false,
    // }
  },
  Register: RegistrationScreen
},
{
    headerMode:"none",
}
);

export default createAppContainer(AppNavigator);