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
import { Container, Header, Content, Form, Item, Input, Label , Icon , Button } from 'native-base';
import { WebBrowser } from 'expo';

import {NavigationActions} from 'react-navigation';
import navback from '../assets/images/navback.png';
import Home from '../screens/HomeScreen';

import Gridi from '../components/Gridi';

export default class UsersScreen extends React.Component {
  static navigationOptions = {
    title: 'Users'
  };

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }


  render() {

    return (
      <Container>
        <Header style={styles.headeri}>
        <TouchableOpacity onPress={this.navigateToScreen('Home')}>
        <Image source={navback}/>
        </TouchableOpacity>
        </Header>
          <Content>
          <ScrollView>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input disabled autoCorrect={false}
              autoCapitalize="none"
              />
              <Icon active name='person' />
            </Item>

            <Item stackedLabel>
              <Label>Password</Label>
              <Input disabled secureTextEntry = {true}
              autoCorrect = {false}
              autoCapitalize = "none"
               />
              <Icon active name='lock' />
            </Item>

            <Item stackedLabel>
              <Label>Email</Label>
              <Input disabled  />
              <Icon active name='mail' />
            </Item>

            <Item stackedLabel >
              <Label>Mobile No</Label>
              <Input disabled  />
              <Icon active name='logo-whatsapp' />
            </Item>

            <Item stackedLabel >
              <Label>Address</Label>
              <Input/>
              <Icon active name='logo-whatsapp' />
            </Item>
            
            <Button 
            style={{marginTop:30,marginLeft:20,marginRight:20,marginBottom:20,backgroundColor:'#0097A7'}}
             full rounded success>
            <Text style={{color:'white'}}>Edit info</Text>
            </Button>
          </Form>
          </ScrollView>
          </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headeri:{
    backgroundColor:'#0097A7',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 20,
    flex: 1,
    alignItems:'center',
    paddingRight:18,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});