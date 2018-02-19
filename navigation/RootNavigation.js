import { Notifications } from 'expo';
import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import Sidebar from '../components/Sidebar.js';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import SearchScreen from '../screens/SearchScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CartScreen from '../screens/CartScreen';
import BagScreen from '../screens/BagScreen';
import UsersScreen from '../screens/UsersScreen';
import UserauthScreen from '../screens/UserauthScreen';
import DummyScreen from '../screens/DummyScreen';
import S_Gscreen from '../screens/S_Gscreen';
import S_Oscreen from '../screens/S_Oscreen';
import S_Cscreen from '../screens/S_Cscreen';
import S_Uscreen from '../screens/S_Uscreen';


const RootStackNavigator = DrawerNavigator(
  /**
   * Note to Christy: Any new page you need to add, import on top and then specify it in this below list like I have specified Gallery.
   */
  {
    Home: {
      screen: HomeScreen,
    },
    Gallery: {
      screen: GalleryScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Orders: {
      screen: OrdersScreen,
    },
    Cart: {
      screen: CartScreen,
    },
    Bag: {
      screen:BagScreen,
    },
    Users: {
      screen: UsersScreen,
    },
    Log:{
      screen: UserauthScreen,
    },
    Demo:{
      screen: DummyScreen,
    },
    //...starting of sub screens.....
    S_Gscreen:{
      screen:S_Gscreen,
    },
    S_Oscreen:{
      screen:S_Oscreen,
    },
    S_Cscreen:{
      screen:S_Cscreen,
    },
    S_Uscreen:{
      screen:S_Uscreen,
    },
  },
  {
    contentComponent: Sidebar,
    drawerWidth: 280
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
