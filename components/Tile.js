import React from 'react';
import { 
  Image, 
  View, 
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    borderColor: 'grey',
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'space-between',
    minWidth: 120,
    padding: 8,
    height: 110
  },
  text:{
    fontWeight: 'bold',
    marginTop: 10,
  }
});

export default class Tile extends React.Component {
  _handleTap = () =>{
    Alert.alert('Tap catched!');
  }
  render() {
    let image = this.props.item.image;
    return(
        <View style={[styles.view,this.props.style]}>
        <TouchableOpacity onPress={this._handleTap} >
            <Image source={this.props.item.image} />
            <Text style={styles.text}>{this.props.item.name}</Text>
        </TouchableOpacity>
        </View>
    );
  }
}