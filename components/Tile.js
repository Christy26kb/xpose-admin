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
    this.props._handleTileNavigation(this.props.item.name, {});
  }
  render() {
    return(
      <TouchableOpacity onPress={this._handleTap} >
        <View style={[styles.view,this.props.style]}>
            <Image source={this.props.item.image} />
            <Text style={styles.text}>{this.props.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}