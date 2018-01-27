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
    borderRadius: 2,
    borderWidth: 2,
    justifyContent: 'space-between',
    padding: 8,
  },
  text:{
    fontWeight: 'bold'
  }
});

export default class Tile extends React.Component {
  render() {
    return(
        <View style={styles.view}>
            <Image source={require('../assets/images/robot-dev.png')} />
            <Text style={styles.text}>{this.props.text}</Text>
        </View>
    );
  }
}

