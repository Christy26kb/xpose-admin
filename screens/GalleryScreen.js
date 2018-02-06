import React from 'react';
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
  Right,
  Left,
  Body,
  ListItem,
  List,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { MonoText } from '../components/StyledText';
import ProTile from '../components/ProTile';

export default class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'Gallery'
  };

  render() {
    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <List>
            <FlatList 
            data={[
              {
              product:{
              name:'Adidas',
              price:345,
              pid:'#1',
                      }
            },
              {
              product:{
              name:'FILA',
              price:545,
              pid:'#2',
            }
            },
              {
              product:{
              name:'Nike',
              price:645,
              pid:'#3',
            }
            },
            
          ]}
             renderItem={({ item }) =>(
                <ListItem>
                  <ProTile item={item}/>
                </ListItem>
            ) }
            keyExtractor={item=>item.product.pid}
            />
          </List>
      </ScrollView>
      </View>
        );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
