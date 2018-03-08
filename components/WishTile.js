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

    removeFromWishlist = () => () => {
        //console.log("check", this.props.item.pid);
        var productid = this.props.item.pid;
        var a;
        //Finding product key to enter into Wishlists as a custom key for each user.
        firebase
            .database()
            .ref("/products/")
            .orderByChild("pid")
            .equalTo(productid)
            .on("value", (dat) => {
                a = Object.keys(dat.val());
                //console.log("keyfinder", a[0]);
                if (a) {
                    //Removing entry from wishlist of 'user1'(it will be dynamic) with finded custom key.
                    firebase
                        .database()
                        .ref("/wishlists")
                        .child("user1")
                        .child(a[0])
                        .remove(function(error) {
                            if (error) {
                                alert(error);
                            } else {
                                alert("Removed from wishlist successfully");
                            }
                        });
                }
            });
    };

    render() {
        return (
            <View style={{ width: 500, height: 200 }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Image source={{ uri: this.props.item.imguri }} style={{ width: 125, height: 125 }} />
                    </TouchableOpacity>
                    <View style={{ marginVertical: 20, marginHorizontal: 50 }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>PRODUCT-ID: {this.props.item.pid}</Text>
                            <Text style={styles.text}>NAME: {this.props.item.name}</Text>
                            <Text style={styles.text}>PRICE: ${this.props.item.price}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", marginRight: 50 }}>
                    <TouchableOpacity>
                        <Image source={movcart} style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.removeFromWishlist().bind()}>
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
