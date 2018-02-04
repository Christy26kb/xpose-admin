import React from 'react';
import { 
  Image, 
  View, 
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';


const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    borderColor: '#BDBDBD',
    borderRadius: 6,
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


export default class ProTile extends React.Component {
  /*_handleTap = () =>{
    this.props._handleTileNavigation(this.props.item.name, {});
  }*/
  render() {
    return(
      <TouchableOpacity>
        <View>
          <Card>
              <CardItem header>
                <Text>{this.props.item.email}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    By binding the onPressItem handler, the props will remain === and PureComponent will prevent wasteful re-renders unless the actual id, selected, or title props change, even if the components rendered in MyListItem did not have such optimizations.
                    By passing extraData to FlatList we make sure.
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>Price:$645</Text>
              </CardItem>
          </Card>
        </View>
      </TouchableOpacity>
    );
  }
}