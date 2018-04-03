import React from "react";
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, Dimensions, ActivityIndicator, View, FlatList } from "react-native";
import { Container, Header, Content, Right, Left, Body, ListItem, List } from "native-base";

import { NavigationActions } from "react-navigation";
import navback from "../assets/images/navback.png";
import { MonoText } from "../components/StyledText";
import OrdTile from "../components/OrdTile";

export default class OrdersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ordersdat: [],
            isLoading: true,
            isEmpty: false
        };
    }
    static navigationOptions = {
        title: "Orders"
    };

    _handleTileNavigation = (pageName, propsObject) => {
        //passing multiple params using navigate.
        var userid = this.props.navigation.state.params;
        this.navigate(pageName, { order: propsObject, user: userid });
    };

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };
    componentWillMount() {
        //TODO:'Userid' will be a dynamic key obtained from S_Uscreen.
        var user = this.props.navigation.state.params;
        return firebase
            .database()
            .ref("/orders")
            .child("users")
            .child(user.uid)
            .child("order")
            .on("value", (data) => {
                if (data.val() != undefined) {
                    this.setState({
                        ordersdat: Object.values(data.val()),
                        isLoading: false
                    });
                } else {
                    this.setState({ ordersdat: [], isEmpty: true, isLoading: false });
                }
            });
    }

    render() {
        const userdata = this.props.navigation.state.params;
        this.navigate = this.props.navigation.navigate;
        const width = Dimensions.get("window").width;
        const height = Dimensions.get("window").height;
        const dataview = (
            <FlatList
                data={this.state.ordersdat}
                initialNumToRender={2}
                renderItem={({ item }) => (
                    <ListItem>
                        <OrdTile item={item} userdata={userdata} _handleTileNavigation={this._handleTileNavigation.bind(this)} />
                    </ListItem>
                )}
                keyExtractor={(item) => item.oid}
            />
        );
        const loader = <ActivityIndicator size="large" color="#009688" />;
        const empty = <Text style={{ marginHorizontal: width / 4, marginVertical: height / 4, fontSize: 16, color: "grey" }}>Currently no orders!</Text>;
        const networkerror = <Text>Check your internet connection</Text>;
        return (
            <View style={styles.container}>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("S_Uscreen")}>
                        <Image source={navback} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                </Header>
                <Text style={{ marginHorizontal: width - 220, marginVertical: 10, fontSize: 14, color: "grey" }}> User's orders list</Text>
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
        backgroundColor: "#009688",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    contentContainer: {
        paddingTop: 20,
        alignItems: "center"
    }
});
