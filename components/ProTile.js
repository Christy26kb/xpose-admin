import React from 'react';
import { 
  Image, 
  View, 
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Icon } from 'native-base';


export default class ProTile extends React.Component {
  /*_handleTap = () =>{
    this.props._handleTileNavigation(this.props.item.name, {});
  }*/
  render() {
    return(
    <View>
      <TouchableOpacity>
          <View style={{flex:1,alignItems:'stretch'}}>
          <Image source={{uri:this.props.item.product.imguri}}
                  style={{flex:1,width: 125, height: 125, resizeMode:'cover'}} />
          </View>
       </TouchableOpacity>
            <View>
              <Text style={styles.proinfo}>{this.props.item.product.name}</Text>
                <Text style={styles.priinfo}>${this.props.item.product.price}</Text>
                <TouchableWithoutFeedback>
                <Icon active name='hand' style={styles.iconpos}/>
                </TouchableWithoutFeedback>
            </View>
    </View>
   
    );
  }
}


const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    borderColor: '#BDBDBD',
    borderRadius: 6,
    borderWidth: 2,
    justifyContent: 'space-around',
    minWidth: 120,
    padding: 8,
    height: 110
  },
  text:{
    fontWeight: 'bold',
    marginTop: 10,
  },
  base:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  proinfo:{
    marginTop: 15,
    fontWeight:'bold'
  },
  priinfo:{
    marginTop:15
  },
  iconpos:{
    position: 'absolute',
    top: 40,
    right: 20,
    color:'black'
  },
});
