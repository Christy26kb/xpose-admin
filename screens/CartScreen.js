import React from "react";
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Modal, Button } from "react-native";

import { ListItem, List, Header, Picker, Footer, FooterTab } from "native-base";

import { NavigationActions } from "react-navigation";
import * as firebase from "firebase";
import navback from "../assets/images/navback.png";
import Home from "../screens/HomeScreen";

import { MonoText } from "../components/StyledText";
import CarTile from "../components/CarTile";

export default class CartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addressmodalv: false,
            cartproducts: []
        };
    }
    static navigationOptions = {
        title: "Cart"
    };

    componentDidMount() {
        return (
            firebase
                .database()
                //TODO:user1 is actually a dynamic key that need to be fetched from actual user.
                .ref("/carts/user1")
                .orderByKey()
                .on("child_added", (data) => {
                    //console.log("cart", data.key);
                    firebase
                        .database()
                        .ref("/products/" + data.key)
                        .on("value", (dat) => {
                            this.state.cartproducts.push(dat.val());
                            this.setState({ cartproducts: this.state.cartproducts });
                        });
                })
        );
    }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };
    _handleTileNavigation = (pageName, propsObject) => {
        this.navigate(pageName, propsObject);
    };
    addressModalState = (val) => () => {
        this.setState({ addressmodalv: val });
    };

    //VIM:Function that listen for changes in child and update current state.
    updateCartState(childItemValue, childItemPid) {
        // this.setState({});
        console.log("im from parent. And my state is: ", this.state);
        var products = this.state.cartproducts;
        var updatedProducts = products.map((product) => {
            if (product.pid == childItemPid) {
                product.quantity = childItemValue;
            } else {
                product.quantity = 1;
            }
            return product;
        });
        /*console.log("childItemValue", childItemValue);
        console.log("childItemPid", childItemPid);
        console.log("updateProduct:", updatedProducts);*/
        this.setState({
            cartproducts: updatedProducts
        });
    }

    render() {
        this.navigate = this.props.navigation.navigate;
        return (
            <View style={styles.container}>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("Gallery")}>
                        <Image source={navback} />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 60, color: "#FFF", fontSize: 16, fontWeight: "bold" }}>My Cart</Text>
                </Header>

                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={this.state.cartproducts}
                        initialNumToRender={1}
                        renderItem={({ item }) => (
                            <ListItem>
                                <CarTile item={item} updateCartState={this.updateCartState.bind(this)} />
                            </ListItem>
                        )}
                        keyExtractor={(item) => item.pid}
                    />
                </ScrollView>

                <Footer style={{ height: 50, borderTopWidth: 0.5, borderTopColor: "#0097A7" }}>
                    <FooterTab style={{ backgroundColor: "#FFF", borderRightWidth: 0.5, borderRightColor: "#0097A7" }}>
                        <TouchableOpacity>
                            <Text style={{ alignSelf: "center", marginVertical: 10, marginHorizontal: 20, color: "#17B7C7", fontSize: 20, fontWeight: "bold" }}>
                                Rs.
                            </Text>
                        </TouchableOpacity>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: "#FFF" }}>
                        <TouchableOpacity onPress={this.addressModalState(true).bind()}>
                            <Text style={{ alignSelf: "center", marginVertical: 10, marginHorizontal: 20, color: "#17B7C7", fontSize: 20, fontWeight: "bold" }}>
                                ORDER NOW
                            </Text>
                        </TouchableOpacity>
                    </FooterTab>
                </Footer>

                <Modal
                    visible={this.state.addressmodalv}
                    animationType={"fade"}
                    onRequestClose={this.addressModalState(false).bind()}
                    transparent={true}
                    hardwareAccelerated={true}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text>This is content inside of Address modal component</Text>
                            <Button onPress={this.addressModalState(false).bind()} title="Close modal" />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headeri: {
        backgroundColor: "#0097A7",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "grey"
    },
    innerContainer: {
        alignItems: "center"
    },
    developmentModeText: {
        marginBottom: 20,
        color: "rgba(0,0,0,0.4)",
        fontSize: 14,
        lineHeight: 19,
        textAlign: "center"
    },
    contentContainer: {
        //padding:10,
    }
});
