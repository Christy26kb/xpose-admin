import React, { Component } from "react";
import { Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View, Text, FlatList } from "react-native";
import { Container, Header, Content, Body, ListItem, List, Icon } from "native-base";
import { NavigationActions, StackNavigator } from "react-navigation";
import navback from "../assets/images/navback.png";
import DetailOrderTile from "../components/DetailOrderTile";

export default class S_Cscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderproducts: []
        };
    }

    /*componentWillMount() {
        //->Recieving data sent from CartScreen.
        let r_data = this.props.navigation.state.params;
        this.state = {
            orderproducts: r_data
        };
    }*/
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("Cart")}>
                        <Image source={navback} />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 60, color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Buy Now</Text>
                </Header>

                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={this.state.orderproducts}
                        renderItem={({ item }) => (
                            <ListItem>
                                <DetailOrderTile item={item} />
                            </ListItem>
                        )}
                        keyExtractor={(item) => item.pid}
                    />
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
        justifyContent: "flex-start",
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
    },
    welcomeContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: "contain",
        marginTop: 3,
        marginLeft: -10
    }
});
