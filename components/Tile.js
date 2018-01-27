import React from 'react';
import { 
  Image, 
  View, 
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    borderColor: '#F38231',
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'space-between',
    minWidth: 100,
    padding: 8,
  },
  text:{
    fontWeight: 'bold',
    marginTop: 10,
  }
});

export default class Tile extends React.Component {
  render() {
    let image = this.props.item.image;
    return(
        <View style={[styles.view,this.props.style]}>
            <Image source={this.props.item.image} />
            <Text style={styles.text}>{this.props.item.name}</Text>
        </View>
    );
  }
}