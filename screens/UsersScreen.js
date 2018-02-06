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

import Gridi from '../components/Gridi';

export default class UsersScreen extends React.Component {
  static navigationOptions = {
    title: 'Users'
  };

  render() {

    return (
      <Container>
          <ScrollView>
         <Content style={{paddingTop: 30,backgroundColor:'white'}}>
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
            
            <Button style={{marginTop:30,marginLeft:20,marginRight:20,marginBottom:20}} full rounded success>
            <Text>Edit info</Text>
            </Button>
          </Form>
          </Content>
          </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  UContainer: {
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});