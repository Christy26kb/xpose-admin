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
    <View style={{width:300,height:150}}>
     <TouchableOpacity>
          <View>
          <Image source={{uri: 'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/8976488_fpx.tif?bgc=255,255,255&wid=224&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg'}}
                  style={{width: 60, height: 60}} />
          </View>
            <View>
                <Text style={styles.text}>ORDER-ID: {this.props.item.order.oid}</Text>
                <Text style={styles.text}>STATUS: {this.props.item.order.status}</Text>
                <Text style={styles.text}>TOTAL AMOUT: ${this.props.item.order.totalp}</Text>
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

