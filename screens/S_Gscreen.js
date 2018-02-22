import React, { Component } from "react";
import { Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View, Text, FlatList, Picker } from "react-native";

import { Container, Header, Footer, FooterTab, Content, Body, ListItem, List, Icon, H3, H1, H2 } from "native-base";

import { NavigationActions, StackNavigator } from "react-navigation";
import nike from "../assets/images/nikexx.jpg";
import navback from "../assets/images/navback.png";
import movcart from "../assets/images/movcart.png";
import movbag from "../assets/images/movbag.png";

export default class S_Gscreen extends Component {
    constructor(props) {
        super(props);
        this.state = { quantity: "1" };
    }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    //Need a multilevel func like 'handleTap'.... to pass and use instance(object) of actual data and process...
    //..Replace image in view with image slider component....

    render() {
        const data = this.props.navigation.state.params;
        return (
            <Container>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("Gallery")}>
                        <Image source={navback} />
                    </TouchableOpacity>
                </Header>

                <ScrollView contentContainerStyle={styles.baseContainer}>
                    <View style={{ flex: 2 }}>
                        <Image source={{ uri: data.imguri }} style={{ width: 300, height: 223, resizeMode: "contain" }} />
                    </View>

                    <View style={{ flexWrap: "nowrap", padding: 20, borderBottomWidth: 0.8, borderBottomColor: "grey" }}>
                        <H3 style={{ marginTop: 15, color: "grey" }}>{data.name}</H3>
                        <H3 style={{ marginTop: 15, color: "grey" }}>{data.price}</H3>
                        <H3 style={{ marginTop: 15, color: "grey" }}>In stock:- Available</H3>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <H3 style={{ color: "grey" }}>Qty :</H3>
                            <Picker
                                style={{ width: 40, height: 25, backgroundColor: "#EFF1F2", marginLeft: 20 }}
                                mode="dropdown"
                                itemStyle={{ backgroundColor: "grey", height: 10, width: 20 }}
                                selectedValue={this.state.quantity}
                                onValueChange={(itemValue, itemIndex) => this.setState({ quantity: itemValue })}
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                            </Picker>
                        </View>
                    </View>

                    <View style={{ padding: 2, marginLeft: 15 }}>
                        <H3 style={{ marginTop: 10, color: "grey" }}>Description</H3>
                        <Text style={{ marginTop: 10, color: "grey", fontSize: 14 }}>{data.description}</Text>
                    </View>
                </ScrollView>

                <Footer style={{ height: 50, borderTopWidth: 0.5, borderTopColor: "#0097A7" }}>
                    <FooterTab style={{ backgroundColor: "#FFF", borderRightWidth: 0.5, borderRightColor: "#0097A7" }}>
                        <TouchableOpacity onPress={this.navigateToScreen("S_Cscreen")}>
                            <Text style={{ alignSelf: "center", marginVertical: 10, marginHorizontal: 20, color: "#17B7C7", fontSize: 20, fontWeight: "bold" }}>
                                ORDER NOW
                            </Text>
                        </TouchableOpacity>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: "#FFF" }}>
                        <TouchableOpacity>
                            <Image style={{ marginLeft: 15 }} source={movcart} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ marginRight: 15 }} source={movbag} />
                        </TouchableOpacity>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    headeri: {
        backgroundColor: "#0097A7",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    baseContainer: {
        padding: 20,
        flexDirection: "column"
    }
});
