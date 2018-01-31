import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Right,
  Left,
  Body,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { MonoText } from '../components/StyledText';
import Gridi from '../components/Gridi';

export default class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'Gallery'
  };

  render() {
    return (
        <Container>
          <Content>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
          </Grid>
          </Content>
        </Container>

        );
  }
}

const sty = StyleSheet.create({
  basecont: {
    paddingTop: 30,
    flex: 1,
  },
});
