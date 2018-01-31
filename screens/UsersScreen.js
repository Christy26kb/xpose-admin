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
import { Container, Header, Content, Form, Item, Input, Label , Icon } from 'native-base';
import { WebBrowser } from 'expo';

import Gridi from '../components/Gridi';

export default class UsersScreen extends React.Component {
  static navigationOptions = {
    title: 'Users'
  };

  render() {
    const pass = {
      hidden: true,
    };

    return (
      <Container>
        <Content>
          <Form >
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
              <Icon active name='person' />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input />
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
          </Form>
        </Content>
      </Container>
    );
  }
}