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
  Right,
  Left,
  Body,
  ListItem,
  List,
  Icon,
} from 'native-base';
//library for creating grid layouts..
import { Col, Row, Grid } from 'react-native-easy-grid';
import {NavigationActions, StackNavigator} from 'react-navigation';
import menu from '../assets/images/menu.png';
import searchw from '../assets/images/searchw.png';

import { MonoText } from '../components/StyledText';
import ProTile from '../components/ProTile';


export default class GalleryScreen extends React.Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>

      <Header style={styles.headeri}>
      <TouchableOpacity onPress={this.navigateToScreen('DrawerOpen')}>
      <Image source={menu}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.navigateToScreen('S_Gscreen')}>
      <Image source={searchw} style={{marginHorizontal:70}}/>
      </TouchableOpacity>
      </Header>

      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <List>
            <FlatList 
            data={[
              {
              product:{
              name:'Adidas',
              price:345,
              pid:'#1',
              imguri:'https://content.adidas.co.in/static/Product-DB0591/Men_RUNNING_SHOES_LOW_DB0591_1.jpg.plp',
            }
            },
              {
              product:{
              name:'FILA',
              price:545,
              pid:'#2',
              imguri:'https://images-na.ssl-images-amazon.com/images/I/81e2cND9baL._UY395_.jpg',
            }
            },
              {
              product:{
              name:'Nike',
              price:645,
              pid:'#3',
              imguri:'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/8976488_fpx.tif?bgc=255,255,255&wid=224&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg',
            }
            },
              {
              product:{
              name:'Puma',
              price:745,
              pid:'#4',
              imguri:'http://www.dancesculpture.co.nz/images/dancesculpture.co.nz/puma-yellow-slippers-A-flip-flops-black-white-dark-grey-men-s-slippers-A-flip-flops-49PV.jpg',
            }
            },
            {
              product:{
              name:'Titan',
              price:845,
              pid:'#5',
              imguri:'http://www.titanworld.com/sites/default/files/titan-edge-men-ceramic-watch-1696nc01-%28straight%29.png',
            }
            },
              {
              product:{
              name:'Hushpuppies',
              price:445,
              pid:'#6',
              imguri:'https://n3.sdlcdn.com/imgs/f/0/c/Hush-Puppies-Formal-Shoes-SDL572080594-1-6b77d.jpeg',
            }
            },
          ]}
             horizontal={false}
             numColumns={2}
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
  headeri:{
    backgroundColor:'#0097A7',
    flexDirection:'row',
    //make it to the specific element which need to be positioned...
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
    //need a small attention!
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
