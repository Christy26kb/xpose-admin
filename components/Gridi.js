import React from 'react';
import Tile from '../components/Tile';

import imageGallery from '../assets/images/gallery.png';
import imageSearch from '../assets/images/search.png';
import imageOrders from '../assets/images/orders.png';
import imageCart from '../assets/images/cart.png';
import imageUsers from '../assets/images/users.png';
import imageSearch2 from '../assets/images/search2.png';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    gridView: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 0,
        flex: 1,
    },
    tileView: {
        margin: 15
    }
});

export default class Gridi extends React.Component {
  render() {
    const items = [
        { name: 'Gallery', image: imageGallery },
        { name: 'Search', image: imageSearch },
        { name: 'Orders', image: imageOrders },
        { name: 'Cart', image: imageCart },
        { name: 'Users', image: imageUsers },
        { name: 'Log', image: imageSearch2 }
    ];
    return(
        <View style={styles.gridView}>
            {
                items.map( (item, index) => {
                    return <Tile style={styles.tileView} key={index} item={item} _handleTileNavigation={this.props._handleTileNavigation}/>;
                })
            }
        </View>
    );
  }
}
