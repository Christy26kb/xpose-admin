import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Container, Header, Content, Form, Item, Input, Label , Icon , Button } from 'native-base';

import { TabNavigator } from 'react-navigation';
import { MonoText } from '../components/StyledText';

export default class UserauthSreen extends React.Component {
  static navigationOptions = {
    title: 'Log',
  };
  render() {
    return <LStabnav />;
  }
  
}
//here begins the actual login page model..
class LoginScreen extends Component{
  render() {
    return(
        <Container>
        <Content  style={{backgroundColor:'white'}}>
          <Form>
          <Item floatingLabel>
              <Label>Mobile no</Label>
              <Input autoCorrect={false}
              autoCapitalize="none"
              />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry = {true}
              autoCorrect = {false}
              autoCapitalize = "none"
               />
              
            </Item>

            <Button style={{marginTop:50,marginLeft:20,marginRight:20,backgroundColor:'#0097A7'}} full rounded success>
            <Text style={{color:'white'}}>Sign in</Text>
            </Button>

            <Text style={{textAlign:'center',marginTop:40}}>OR</Text>

            <View style={{flex:1,flexDirection:'row',justifyContent:'center',marginTop:50}}>

            <Button square style={{backgroundColor:'#0097A7',marginRight:20}}>
            <Icon name='logo-facebook' style={{color:'white'}} />
            </Button>
            <Button square style={{backgroundColor:'#0097A7',marginLeft:20}}>
            <Icon active name='logo-google' style={{color:'white'}}/>
            </Button>

            </View>
          </Form>
          </Content>
        </Container>
    );
  }
}


class SignupScreen extends Component{
  render() {
    return(
      <Container>
        <Content  style={{backgroundColor:'white'}}>
          <Form>
          <Item floatingLabel>
              <Label>Mobile no</Label>
              <Input autoCorrect={false}
              autoCapitalize="none"
              />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry = {true}
              autoCorrect = {false}
              autoCapitalize = "none"
               />
            </Item>

            <Item floatingLabel>
              <Label>Email</Label>
              <Input autoCorrect={false}
              autoCapitalize="none"
              />
            </Item>

            <Button style={{marginTop:50,marginLeft:20,marginRight:20,backgroundColor:'#0097A7'}} full rounded success>
            <Text style={{color:'white'}}>Sign Up</Text>
            </Button>

          </Form>
          </Content>
        </Container>
    );
  }
}


const LStabnav = TabNavigator(
  {
    Login:{
      screen:LoginScreen,
    },

    Signup:{
      screen:SignupScreen,
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled:true,

  }

);
