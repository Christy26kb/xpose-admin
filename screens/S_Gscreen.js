import React, { Component } from "react";
import { Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View, Text, TextInput, FlatList, Picker } from "react-native";

import { Container, Header, Footer, FooterTab, Content, Body, ListItem, Button, List, Icon, Textarea, Label, H3 } from "native-base";

import { NavigationActions, StackNavigator } from "react-navigation";
import navback from "../assets/images/navback.png";
export default class S_Gscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            imguri: "",
            name: "",
            price: "",
            category: "",
            stock: "true",
            desc: ""
        };
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

    componentWillMount() {
        const productdata = this.props.navigation.state.params;

        this.setState({
            id: productdata.pid,
            imguri: productdata.imguri,
            name: productdata.name,
            price: productdata.price,
            category: productdata.category,
            stock: productdata.instock == true ? "true" : "false",
            desc: productdata.description
        });
    }

    updateProductDetails = () => () => {
        var editproduct = {
            pid: this.state.id,
            imguri: this.state.imguri,
            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            instock: this.state.stock == "true" ? true : false,
            description: this.state.desc
        };
        return firebase
            .database()
            .ref("/products")
            .child(this.state.id)
            .set(editproduct, function(error) {
                if (error) {
                    alert(error);
                } else {
                    alert("Details Updated successfully");
                }
            });
    };

    //TODO:Replace image in view with image slider component.

    render() {
        this.navigate = this.props.navigation.navigate;
        //Recieving selected product data from GalleryScreen.

        return (
            <Container>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("Gallery")}>
                        <Image source={navback} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 60, color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Edit Product Details</Text>
                </Header>

                <ScrollView contentContainerStyle={styles.baseContainer}>
                    <View style={{ flex: 2 }}>
                        <Image source={{ uri: this.state.imguri }} style={{ width: 300, height: 223, resizeMode: "contain" }} />
                    </View>

                    <View style={{ flexWrap: "nowrap", padding: 20 }}>
                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>ID</Label>
                        <TextInput
                            underlineColorAndroid="transparent"
                            editable={false}
                            style={{ marginTop: 10, width: 250, height: 35, borderColor: "grey", borderWidth: 0.8 }}
                            value={this.state.id.toString()}
                        />
                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>Name</Label>
                        <TextInput
                            underlineColorAndroid="transparent"
                            style={{ marginTop: 10, width: 250, height: 35, borderColor: "grey", borderWidth: 0.8 }}
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name}
                        />

                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>Price</Label>
                        <TextInput
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            style={{ marginTop: 10, width: 250, height: 35, borderColor: "grey", borderWidth: 0.8 }}
                            value={this.state.price.toString()}
                            onChangeText={(price) => this.setState({ price })}
                        />
                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>Category</Label>
                        <TextInput
                            underlineColorAndroid="transparent"
                            style={{ marginTop: 10, width: 250, height: 35, borderColor: "grey", borderWidth: 0.8 }}
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(category) => this.setState({ category })}
                            value={this.state.category}
                        />
                        <View style={{ flexDirection: "row", marginTop: 30 }}>
                            <Text style={{ fontSize: 16, color: "grey" }}>Available :</Text>
                            <Picker
                                style={{ width: 120, height: 30, backgroundColor: "#EFF1F2", marginLeft: 20 }}
                                mode="dropdown"
                                itemStyle={{ backgroundColor: "grey", height: 10, width: 20 }}
                                selectedValue={this.state.stock}
                                enabled={true}
                                onValueChange={(itemValue, itemIndex) => this.setState({ stock: itemValue })}
                            >
                                <Picker.Item label="In-stock" value="true" />
                                <Picker.Item label="Out of stock" value="false" />
                            </Picker>
                        </View>
                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>Description</Label>
                        <Textarea
                            value={this.state.desc}
                            autoCorrect={true}
                            style={{ marginTop: 20, width: 270, height: 230, backgroundColor: "#ECEFF1" }}
                            onChangeText={(desc) => this.setState({ desc })}
                        />
                    </View>
                    <Button
                        onPress={this.updateProductDetails().bind()}
                        style={{ marginTop: 30, marginLeft: 20, marginRight: 20, marginBottom: 20, backgroundColor: "#009688" }}
                        full
                        rounded
                        success
                    >
                        <Text style={{ color: "white" }}>Update</Text>
                    </Button>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    headeri: {
        backgroundColor: "#009688",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    inputstyle: {
        marginTop: 20,
        width: 250
    },
    baseContainer: {
        padding: 20,
        flexDirection: "column"
    }
});
