import React from "react";
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput, Modal } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button } from "native-base";

import { NavigationActions } from "react-navigation";
import navback from "../assets/images/navback.png";
import logout from "../assets/images/logout.png";

export default class ShopinfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            address: "",
            prompt: false
        };
    }
    static navigationOptions = {
        title: "Users"
    };

    promptState = (val) => () => {
        this.setState({ prompt: val });
    };

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    componentWillMount() {
        //TODO:'User1' will be a dynamic key obtained from user.
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
            return firebase
                .database()
                .ref("/shop")
                .child(uid)
                .on("value", (data) => {
                    if (data.val() != undefined) {
                        this.setState({
                            name: data.val().name,
                            phone: data.val().phone,
                            email: data.val().email,
                            address: data.val().address
                        });
                    } else {
                        this.setState({
                            email: user.email
                        });
                    }
                });
        }
    }

    updateUserData = () => () => {
        var u = firebase.auth().currentUser;
        var shopinfo = {
            uid: u.uid,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address
        };
        return firebase
            .database()
            .ref("/shop")
            .child(u.uid)
            .set(shopinfo, function(error) {
                if (error) {
                    alert(error);
                } else {
                    alert("Details Updated successfully");
                }
            });
    };

    signoutuser = () => () => {
        firebase
            .auth()
            .signOut()
            .then(function() {
                // Sign-out successful.
                alert("Signed out");
            })
            .catch(function(error) {
                // An error happened.
                alert(error);
            });

        this.setState({ prompt: false });
    };

    render() {
        const width = Dimensions.get("window").width;
        return (
            <Container>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("Gallery")}>
                        <Image source={navback} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: width / 5.5, color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Shop Details</Text>
                    <TouchableOpacity onPress={this.promptState(true).bind()}>
                        <Image source={logout} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </Header>
                <Content>
                    <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                        <Item style={styles.inputstyle} stackedLabel>
                            <Label>Shop Name</Label>
                            <Input autoCorrect={false} autoCapitalize="none" onChangeText={(name) => this.setState({ name })} value={this.state.name} />
                        </Item>
                        <Item style={styles.inputstyle} stackedLabel>
                            <Label>Email</Label>
                            <Input disabled value={this.state.email} />
                        </Item>
                        <Item style={styles.inputstyle} stackedLabel>
                            <Label>Mobile No</Label>
                            <Input
                                keyboardType="numeric"
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={(phone) => this.setState({ phone })}
                                value={this.state.phone}
                            />
                        </Item>
                        <Item style={styles.inputstyle} stackedLabel>
                            <Label>Address</Label>
                            <Input
                                style={{ height: 100 }}
                                multiline={true}
                                numberOfLines={30}
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={(address) => this.setState({ address })}
                                value={this.state.address}
                            />
                        </Item>

                        <Button
                            onPress={this.updateUserData().bind()}
                            style={{ marginTop: 30, marginLeft: 20, marginRight: 20, marginBottom: 20, backgroundColor: "#009688" }}
                            full
                            rounded
                            success
                        >
                            <Text style={{ color: "white" }}>Update</Text>
                        </Button>
                    </ScrollView>
                </Content>
                <Modal
                    visible={this.state.prompt}
                    animationType={"fade"}
                    onRequestClose={this.promptState(false).bind()}
                    transparent={true}
                    hardwareAccelerated={true}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text style={{ color: "white", fontSize: 15 }}>Are you sure to Logout!</Text>
                            <View style={{ flexDirection: "row", marginTop: 20 }}>
                                <Button style={styles.but} onPress={this.signoutuser().bind()}>
                                    <Text style={{ marginHorizontal: 18 }}>Yes</Text>
                                </Button>
                                <Button style={styles.but} onPress={this.promptState(false).bind()}>
                                    <Text style={{ marginHorizontal: 18 }}>No</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    headeri: {
        backgroundColor: "#009688",
        flexDirection: "row",
        alignItems: "center"
    },
    but: {
        backgroundColor: "white",
        width: 60,
        height: 35,
        marginTop: 10,
        marginHorizontal: 30,
        marginBottom: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center"
    },
    innerContainer: {
        alignItems: "center",
        backgroundColor: "#009688",
        marginHorizontal: 30
    },
    developmentModeText: {
        marginBottom: 20,
        color: "rgba(0,0,0,0.4)",
        fontSize: 14,
        lineHeight: 19,
        textAlign: "center"
    },
    inputstyle: {
        marginTop: 20,
        width: 250
    },
    contentContainer: {
        padding: 20,
        flex: 1,
        alignItems: "center",
        paddingTop: 30
    }
});
