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
    Dimensions,
    Picker
} from "react-native";
import { Icon, Button, Footer, FooterTab } from "native-base";
import movbag from "../assets/images/movbag.png";
import rmv from "../assets/images/rmv.png";

export default class CarTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: "1" };
    }

    _handleTap = () => {
        this.props._handleTileNavigation("S_Gscreen", this.props.item);
    };

    fetchStart() {
        this.props.fetchCartData();
    }

    updateCartState(itemValue, itemIndex) {
        //inform parent's state about the updation happened here
        //VIM:Call to the parent function reporting changes.
        this.props.updateCartState(itemValue, this.props.item.pid);
        //update this component's state here
        this.setState({
            quantity: itemValue
        });
    }

    addToWishlist = () => () => {
        //console.log("check", this.props.navigation.state.params);
        var productid = this.props.item.pid;
        var wishlistentry = {
            pid: productid
        };
        //Adding new entry to wishlist of 'user1'(it will be dynamic) with finded custom key.
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
        }
        firebase
            .database()
            .ref("/wishlists")
            .child(uid)
            .child(wishlistentry.pid)
            .set(wishlistentry, function(error) {
                if (error) {
                    alert(error);
                } else {
                    alert("Added to wishlist successfully");
                }
            });
    };

    removeFromCart = () => () => {
        //console.log("check", this.props.item.pid);
        var rproductid = this.props.item.pid;
        //Removing entry from wishlist of 'user1'(it will be dynamic) with finded custom key.
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
        }
        firebase
            .database()
            .ref("/carts")
            .child(uid)
            .child(rproductid)
            .remove(function(error) {
                if (error) {
                    alert(error);
                }
            });
        //TODO:Force parent component to re-render after removal,from child.
        //call function from parent passed via props.
        this.fetchStart();
    };

    render() {
        return (
            <View style={{ width: 500, height: 200 }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={this._handleTap}>
                        <Image source={{ uri: this.props.item.imguri }} style={{ width: 125, height: 125, marginTop: 10 }} />
                    </TouchableOpacity>
                    <View style={{ marginVertical: 20, marginHorizontal: 50 }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>PRODUCT-ID: {this.props.item.pid}</Text>
                            <Text style={styles.text}>NAME: {this.props.item.name}</Text>
                            <Text style={styles.text}>PRICE: ${this.props.item.price}</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 3 }}>
                            <Text style={styles.text}>Qty :</Text>
                            <Picker
                                style={{ width: 40, height: 25, backgroundColor: "#EFF1F2", marginLeft: 20, marginTop: 3 }}
                                mode="dropdown"
                                itemStyle={{ backgroundColor: "grey", height: 10, width: 20 }}
                                selectedValue={this.state.quantity}
                                onValueChange={this.updateCartState.bind(this)}
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", marginRight: 50 }}>
                    <TouchableOpacity onPress={this.addToWishlist().bind()}>
                        <Image source={movbag} style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.removeFromCart().bind()}>
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
        marginTop: 3
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
