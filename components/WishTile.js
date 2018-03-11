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

    //TODO:Need attention for triggering the updation function inside the parent component.
    /*updateWishlistState(id) {
        console.log("passed id 1", id);
        //inform parent's state about the removal  happened here and passes the id.
        this.props.updateWishlistState(id);
    }*/

    removeFromWishlist = () => () => {
        //console.log("check", this.props.item.pid);
        var productid = this.props.item.pid;
        //Removing entry from wishlist of 'user1'(it will be dynamic) with finded custom key.
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
        }
        firebase
            .database()
            .ref("/wishlists")
            .child(uid)
            .child(productid)
            .remove(function(error) {
                if (error) {
                    alert(error);
                } else {
                    alert("Removed from wishlist successfully");
                    //TODO:Force parent component to re-render after removal,from child.
                    //call function from parent passed via props.
                    //this.props.updateWishlistState(this.props.item.pid).bind();
                }
            });
    };

    addToCart = () => () => {
        //console.log("check", this.props.navigation.state.params);
        var productid = this.props.item.pid;
        var cartentry = {
            pid: productid,
            quantity: "1"
        };
        //Adding new entry to carts of 'user1'(it will be dynamic) with finded custom key.
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
        }
        firebase
            .database()
            .ref("/carts")
            .child(uid)
            .child(cartentry.pid)
            .set(cartentry, function(error) {
                if (error) {
                    alert(error);
                } else {
                    alert("Added to Cart successfully");
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
                    <TouchableOpacity onPress={this.addToCart().bind()}>
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
