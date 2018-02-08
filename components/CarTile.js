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
import {   Icon, Button } from 'native-base';


export default class CarTile extends React.Component {
  /*_handleTap = () =>{
    this.props._handleTileNavigation(this.props.item.name, {});
  }*/
  render() {
    return(
    <View style={{width:300,height:150}}>
        <TouchableOpacity>
          <View>
          <Image source={{uri:this.props.item.product.imguri}}
                  style={{width: 70, height: 70}} />
          </View>
            <View>
                <Text style={styles.text}>PRODUCT-ID: {this.props.item.product.pid}</Text>
                <Text style={styles.text}>NAME: {this.props.item.product.name}</Text>
                <Text style={styles.text}>PRICE: ${this.props.item.product.price}</Text>
                <TouchableWithoutFeedback>
                <Icon active name='hand' style={styles.iconpos}/>
                </TouchableWithoutFeedback>
            </View>
      </TouchableOpacity>
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
    marginTop: 3,
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

