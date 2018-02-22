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
  Footer,
  FooterTab,
  Content,
  Body,
  ListItem,
  List,
  Icon,
  H3,
  H1,
  H2,
} from 'native-base';

import {NavigationActions, StackNavigator} from 'react-navigation';
import nike from '../assets/images/nikexx.jpg';
import navback from '../assets/images/navback.png';
import movcart from '../assets/images/movcart.png';
import movbag from '../assets/images/movbag.png';

export default class S_Gscreen extends Component{

    navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
    }

  //Need a multilevel func like 'handleTap'.... to pass and use instance(object) of actual data and process...
  //..Replace image in view with image slider component....

    render(){
      return(
      <Container>
        <Header style={styles.headeri}>
        <TouchableOpacity onPress={this.navigateToScreen('Gallery')}>
        <Image source={navback} />
        </TouchableOpacity>
        </Header>

        <ScrollView contentContainerStyle={styles.baseContainer}>
          <View style={{flex:2}}>
          <Image source={nike}
                  style={{width: 300, height: 223, resizeMode:'contain'}}>
          </Image>
            </View>

            <View style={{flexWrap:"nowrap",padding:20,borderBottomWidth:0.8,borderBottomColor:'grey'}}>
              <H3 style={{marginTop:15,color:'grey'}}>Nike Shoes</H3>
              <H3 style={{marginTop:15,color:'grey'}}>$1300</H3>
              <H3 style={{marginTop:15,color:'grey'}}>In stock:- Available</H3>
              </View>

              <View style={{padding:2,marginLeft:15}}>
              <H3 style={{marginTop:10,color:'grey'}}>Description</H3>
              <Text style={{marginTop:10,color:'grey',fontSize:14}}>
                This will install all the project dependencies.
                 This may take a while depending on your download speed, because it has to download a lot of dependencies. 
                Take a look at package.json if you want see the packages it needs to download.
                </Text>
              </View>  

        </ScrollView>  

        <Footer style={{height:50,borderTopWidth:0.5,borderTopColor:'#0097A7'}}>
        <FooterTab 
          style={{backgroundColor:'#FFF',borderRightWidth:0.5,borderRightColor:'#0097A7'}}>
          <TouchableOpacity onPress={this.navigateToScreen('S_Cscreen')}>
            <Text 
              style={{alignSelf:'center',marginVertical:10,marginHorizontal:20,color:'#17B7C7',fontSize:20,fontWeight:'bold'}}>
              ORDER NOW
            </Text>
            </TouchableOpacity>
        </FooterTab>
        <FooterTab style={{backgroundColor:'#FFF'}}>
        <TouchableOpacity >
        <Image style={{marginLeft:15}} source={movcart} />
        </TouchableOpacity>
        <TouchableOpacity >
        <Image style={{marginRight:15}} source={movbag} />
        </TouchableOpacity>
        </FooterTab>
        </Footer>

       </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    headeri:{
      backgroundColor:'#0097A7',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
  
    },
    baseContainer:{
      padding:20,
      flexDirection:"column",
    }
  });