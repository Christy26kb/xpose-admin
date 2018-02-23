import React from "react";
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { Container, Header, Content, Right, Left, Body, ListItem, List } from "native-base";

import { NavigationActions } from "react-navigation";
import navback from "../assets/images/navback.png";

import { MonoText } from "../components/StyledText";
import OrdTile from "../components/OrdTile";

export default class OrdersScreen extends React.Component {
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

    render() {
        this.navigate = this.props.navigation.navigate;
        return (
            <View style={styles.container}>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("Gallery")}>
                        <Image source={navback} />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 60, color: "#FFF", fontSize: 16, fontWeight: "bold" }}>My Orders</Text>
                </Header>

                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={[
                            {
                                order: {
                                    status: "Processing",
                                    totalp: 3145,
                                    oid: "*12455"
                                }
                            },
                            {
                                order: {
                                    status: "Processing",
                                    totalp: 1545,
                                    oid: "*21112"
                                }
                            },
                            {
                                order: {
                                    status: "Processing",
                                    totalp: 1645,
                                    oid: "*37365"
                                }
                            }
                        ]}
                        renderItem={({ item }) => (
                            <ListItem>
                                <OrdTile item={item} _handleTileNavigation={this._handleTileNavigation.bind(this)} />
                            </ListItem>
                        )}
                        keyExtractor={(item) => item.order.oid}
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
    },
    getStartedContainer: {
        alignItems: "center",
        marginHorizontal: 10
    },
    homeScreenFilename: {
        marginVertical: 7
    },
    codeHighlightText: {
        color: "rgba(96,100,109, 0.8)"
    },
    codeHighlightContainer: {
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 3,
        paddingHorizontal: 4
    },
    getStartedText: {
        fontSize: 17,
        color: "rgba(96,100,109, 1)",
        lineHeight: 24,
        textAlign: "center"
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
    },
    tabBarInfoText: {
        fontSize: 17,
        color: "rgba(96,100,109, 1)",
        textAlign: "center"
    },
    navigationFilename: {
        marginTop: 5
    },
    helpContainer: {
        marginTop: 15,
        alignItems: "center"
    },
    helpLink: {
        paddingVertical: 15
    },
    helpLinkText: {
        fontSize: 14,
        color: "#2e78b7"
    }
});
