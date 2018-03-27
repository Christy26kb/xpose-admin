import React, { Component } from "react";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    FlatList,
    Modal,
    Button,
    ActivityIndicator,
    Dimensions
} from "react-native";

import { Container, Header, Content, Right, Left, Body, ListItem, List, Icon } from "native-base";
//library for creating grid layouts..
import { NavigationActions, StackNavigator } from "react-navigation";
import * as firebase from "firebase";
import menu from "../assets/images/menu.png";
import searchw from "../assets/images/searchw.png";
import add from "../assets/images/add.png";
import searchback from "../assets/images/searchback.png";
import searchclear from "../assets/images/searchclear.png";
import { MonoText } from "../components/StyledText";
import ProTile from "../components/ProTile";

export default class GalleryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchmodalv: false,
            products: [],
            orgproducts: [],
            isLoading: true,
            isEmpty: false,
            searchText: ""
        };
    }

    searchModalState = (val) => () => {
        this.setState({ searchmodalv: val });
    };

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    _handleTileNavigation = (pageName, propsObject) => {
        this.navigate(pageName, propsObject);
    };

    searchProducts = (p1) => () => {
        const data = this.state.products;
        var updated = [];
        updated = data.filter(function(product) {
            let s1 = product.name.toLowerCase();
            let s2 = p1.toLowerCase();
            if (s1 == s2) {
                return product;
            }
        });
        this.setState({ products: updated });
        //console.log("filtered data", updated);
    };

    componentWillMount() {
        return firebase
            .database()
            .ref("/products/")
            .on("value", (data) => {
                /*data.forEach(function(Snapshot) {
                    var childkey = Snapshot.key;
                    console.log("productsvalue", childkey);
                    // ...
                });*/
                if (data.val() != undefined) {
                    this.setState({
                        products: Object.values(data.val()),
                        orgproducts: Object.values(data.val()),
                        isLoading: false
                        //console.log("datas", Object.values(data.val()));
                    });
                } else {
                    this.setState({ products: [], orgproducts: [], isEmpty: true });
                }
            });
    }

    render() {
        this.navigate = this.props.navigation.navigate;
        const width = Dimensions.get("window").width;
        const height = Dimensions.get("window").height;
        const loader = <ActivityIndicator size="large" color="#0097A7" />;
        const dataview = (
            <FlatList
                data={this.state.products}
                horizontal={false}
                numColumns={2}
                initialNumToRender={1}
                renderItem={({ item }) => (
                    <ListItem>
                        <ProTile item={item} _handleTileNavigation={this._handleTileNavigation.bind(this)} />
                    </ListItem>
                )}
                keyExtractor={(item) => item.pid}
            />
        );
        const empty = <Text style={{ marginHorizontal: width / 3.5, marginVertical: height / 4, fontSize: 16, color: "grey" }}>No Products on Showcase!</Text>;
        const networkerror = <Text>Check your internet connection</Text>;

        return (
            <View style={styles.container}>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("DrawerOpen")}>
                        <Image source={menu} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.searchModalState(true).bind()}>
                        <Image source={searchw} style={{ height: 35, width: 35, marginHorizontal: width / 4 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.navigateToScreen("Entry")}>
                        <Image source={add} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                </Header>

                <Modal
                    visible={this.state.searchmodalv}
                    animationType={"fade"}
                    onRequestClose={this.searchModalState(false).bind()}
                    transparent={true}
                    hardwareAccelerated={true}
                >
                    <Header style={{ backgroundColor: "white" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity onPress={this.searchModalState(false).bind()}>
                                <Image source={searchback} style={{ height: 25, width: 25 }} />
                            </TouchableOpacity>
                            <TextInput
                                placeholder="Search by product name"
                                value={this.state.searchText}
                                onChangeText={(searchText) => this.setState({ searchText })}
                                onSubmitEditing={this.searchProducts(this.state.searchText).bind()}
                                underlineColorAndroid="transparent"
                                style={{ marginLeft: 20, width: width / 1.5 }}
                            />
                            <TouchableOpacity onPress={(searchText) => this.setState({ searchText: "", products: this.state.orgproducts })}>
                                <Image source={searchclear} style={{ height: 25, width: 25 }} />
                            </TouchableOpacity>
                        </View>
                    </Header>
                </Modal>
                <Text style={{ marginHorizontal: width / 2.5, marginVertical: 10, fontSize: 14, color: "grey" }}>My Stock</Text>
                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    {this.state.isLoading ? loader : dataview}
                    {this.state.isEmpty ? empty : null}
                </ScrollView>
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
        //make it to the specific element which need to be positioned.
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
        paddingTop: 20,
        alignItems: "center"
    }
});
