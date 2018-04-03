import React from "react";
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, Dimensions, ActivityIndicator, View, FlatList } from "react-native";
import { Container, Header, Content, Right, Left, Body, ListItem, List } from "native-base";

import { NavigationActions } from "react-navigation";
import navback from "../assets/images/navback.png";
import { MonoText } from "../components/StyledText";
import FeedUserTile from "../components/FeedUserTile";

export default class UsersFeedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersdat: [],
            isLoading: true,
            isEmpty: false
        };
    }
    static navigationOptions = {
        title: "Orders"
    };

    _handleTileNavigation = (pageName, propsObject) => {
        this.navigate(pageName, propsObject);
    };

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    fetchUsersData = () => {
        var f = 0;
        var update = [];
        return firebase
            .database()
            .ref("/feedbacks")
            .child("users")
            .on("value", (data) => {
                if (data.val() != undefined) {
                    data.forEach(function(Snapshot) {
                        var c = Snapshot.key;
                        firebase
                            .database()
                            .ref("/users/" + c)
                            .on("value", (dat) => {
                                if (dat.val() != undefined) {
                                    var x = dat.val();
                                    update.push(x);
                                }
                            });
                    });

                    this.setState({ usersdat: update, isLoading: false });
                } else {
                    this.setState({ usersdat: [], isEmpty: true, isLoading: false });
                }
            });
    };

    componentWillMount() {
        this.fetchUsersData();
    }

    render() {
        //console.log("usersdata3", this.state.usersdat);
        this.navigate = this.props.navigation.navigate;
        const width = Dimensions.get("window").width;
        const height = Dimensions.get("window").height;
        const dataview = (
            <FlatList
                data={this.state.usersdat}
                initialNumToRender={2}
                renderItem={({ item }) => (
                    <ListItem>
                        <FeedUserTile item={item} _handleTileNavigation={this._handleTileNavigation.bind(this)} />
                    </ListItem>
                )}
                keyExtractor={(item) => item.uid}
            />
        );
        const loader = <ActivityIndicator size="large" color="#009688" />;
        const empty = <Text style={{ marginHorizontal: width / 4, marginVertical: height / 4, fontSize: 16, color: "grey" }}>No feedbacks from users!</Text>;
        const networkerror = <Text>Check your internet connection</Text>;
        return (
            <View style={styles.container}>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("Gallery")}>
                        <Image source={navback} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 60, color: "#FFF", fontSize: 16, fontWeight: "bold" }} />
                </Header>
                <Text style={{ marginHorizontal: width - 230, marginVertical: 10, fontSize: 14, color: "grey" }}>User's feedbacks list</Text>
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
    },
    welcomeContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20
    },

    tabBarInfoContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3
            },
            android: {
                elevation: 20
            }
        }),
        alignItems: "center",
        backgroundColor: "#fbfbfb",
        paddingVertical: 20
    }
});
