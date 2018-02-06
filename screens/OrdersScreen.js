import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Gridi from '../components/Gridi';

export default class OrdersScreen extends React.Component {
  static navigationOptions = {
    title: 'Orders'
  };

  render() {
    return (
      <View>
        <Text>And THIS IS THE Orders BODY!!</Text>
      </View>
    );
  }

  _/*handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };*/
}