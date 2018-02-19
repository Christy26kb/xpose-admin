import React ,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Body,
  ListItem,
  List,
  Icon,
} from 'native-base';

import {NavigationActions, StackNavigator} from 'react-navigation';

export default class S_Gscreen extends Component{
   

    navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
    }

    render(){
      return(
      <View>
        <Text>And THIS IS THE cart sub section BODY!!</Text>
      </View>
      );
    }
  }
