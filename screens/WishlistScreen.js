import React from "react";
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";

import { ListItem, List, Header } from "native-base";

import { NavigationActions } from "react-navigation";
import navback from "../assets/images/navback.png";
import Home from "../screens/HomeScreen";

import { MonoText } from "../components/StyledText";
import WishTile from "../components/WishTile";

export default class WishlistScreen extends React.Component {
    static navigationOptions = {
        title: "Wishlist"
    };

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
                    <TouchableOpacity onPress={this.navigateToScreen("Home")}>
                        <Image source={navback} />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 60, color: "#FFF", fontSize: 16, fontWeight: "bold" }}>My Wishlist</Text>
                </Header>

                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={[
                            {
                                product: {
                                    name: "Adidas",
                                    price: 345,
                                    pid: "#1",
                                    imguri: "https://content.adidas.co.in/static/Product-DB0591/Men_RUNNING_SHOES_LOW_DB0591_1.jpg.plp"
                                }
                            },
                            {
                                product: {
                                    name: "FILA",
                                    price: 545,
                                    pid: "#2",
                                    imguri: "https://images-na.ssl-images-amazon.com/images/I/81e2cND9baL._UY395_.jpg"
                                }
                            },
                            {
                                product: {
                                    name: "Nike",
                                    price: 645,
                                    pid: "#3",
                                    imguri:
                                        "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/8976488_fpx.tif?bgc=255,255,255&wid=224&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"
                                }
                            },
                            {
                                product: {
                                    name: "Puma",
                                    price: 745,
                                    pid: "#4",
                                    imguri:
                                        "http://www.dancesculpture.co.nz/images/dancesculpture.co.nz/puma-yellow-slippers-A-flip-flops-black-white-dark-grey-men-s-slippers-A-flip-flops-49PV.jpg"
                                }
                            },
                            {
                                product: {
                                    name: "Titan",
                                    price: 845,
                                    pid: "#5",
                                    imguri: "http://www.titanworld.com/sites/default/files/titan-edge-men-ceramic-watch-1696nc01-%28straight%29.png"
                                }
                            },
                            {
                                product: {
                                    name: "Hushpuppies",
                                    price: 445,
                                    pid: "#6",
                                    imguri: "https://n3.sdlcdn.com/imgs/f/0/c/Hush-Puppies-Formal-Shoes-SDL572080594-1-6b77d.jpeg"
                                }
                            }
                        ]}
                        renderItem={({ item }) => (
                            <ListItem>
                                <WishTile item={item} />
                            </ListItem>
                        )}
                        keyExtractor={(item) => item.product.pid}
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
