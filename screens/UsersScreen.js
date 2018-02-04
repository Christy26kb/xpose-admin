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
      <Container style={{paddingTop: 30}}>
         <Content>
           <ScrollView>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input autoCorrect={false}
              autoCapitalize="none"
              />
              <Icon active name='person' />
            </Item>

            <Item stackedLabel>
              <Label>Password</Label>
              <Input secureTextEntry = {true}
              autoCorrect = {false}
              autoCapitalize = "none"
               />
              <Icon active name='lock' />
            </Item>

            <Item stackedLabel>
              <Label>Email</Label>
              <Input />
              <Icon active name='mail' />
            </Item>

            <Item stackedLabel >
              <Label>Mobile No</Label>
              <Input />
              <Icon active name='logo-whatsapp' />
            </Item>

            <Item stackedLabel >
              <Label>Address</Label>
              <Input />
              <Icon active name='logo-whatsapp' />
            </Item>

            <Button rounded success style={{marginTop: 20}}>
                <Text>Submit</Text>
            </Button>

          </Form>
          </ScrollView>
          </Content>
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