import React from "react";
import {
    Image,
    ImageBackground,
    View,
    TouchableOpacity,
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Dimensions
} from "react-native";
import { Icon, Button, Picker, Footer, FooterTab } from "native-base";
import movcart from "../assets/images/movcart.png";
import rmv from "../assets/images/rmv.png";

export default class WishTile extends React.Component {
    /*_handleTap = () =>{
    this.props._handleTileNavigation(this.props.item.name, {});
  }*/
    render() {
        return (
            <View style={{ width: 500, height: 200 }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Image source={{ uri: this.props.item.product.imguri }} style={{ width: 125, height: 125 }} />
                    </TouchableOpacity>
                    <View style={{ marginVertical: 20, marginHorizontal: 50 }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>PRODUCT-ID: {this.props.item.product.pid}</Text>
                            <Text style={styles.text}>NAME: {this.props.item.product.name}</Text>
                            <Text style={styles.text}>PRICE: ${this.props.item.product.price}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", marginRight: 50 }}>
                    <TouchableOpacity>
                        <Image source={movcart} style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={rmv} style={{}} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        borderColor: "#BDBDBD",
        borderRadius: 6,
        borderWidth: 2,
        justifyContent: "space-around",
        minWidth: 120,
        padding: 8,
        height: 110
    },
    text: {
        color: "grey",
        fontSize: 14,
        marginTop: 5
    },
    base: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    proinfo: {
        marginTop: 15,
        fontWeight: "bold"
    },
    priinfo: {
        marginTop: 15
    },
    iconpos: {
        marginBottom: 30,
        marginLeft: 125
    }
});
