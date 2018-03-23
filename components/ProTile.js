import React from "react";
import { Image, View, TouchableOpacity, Alert, StyleSheet, Text, TouchableHighlight, Modal, TouchableWithoutFeedback } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Icon, Button, H3, H2, H1 } from "native-base";
import rmvc from "../assets/images/rmvc.png";

export default class ProTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prompt: false
        };
    }

    promptState = (val) => () => {
        this.setState({ prompt: val });
    };

    _handleTap = () => {
        this.props._handleTileNavigation("S_Gscreen", this.props.item);
    };
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.promptState(true).bind()}>
                    <Image source={rmvc} style={{ height: 25, width: 25, marginBottom: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._handleTap}>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: this.props.item.imguri }} style={{ width: 125, height: 125, resizeMode: "contain" }} />
                    </View>
                    <View>
                        <Text style={styles.proinfo}>{this.props.item.name}</Text>
                        <Text style={styles.priinfo}>Rs. {this.props.item.price}</Text>
                        <TouchableWithoutFeedback>
                            <Icon active name="hand" style={styles.iconpos} />
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>

                <Modal
                    visible={this.state.prompt}
                    animationType={"fade"}
                    onRequestClose={this.promptState(false).bind()}
                    transparent={true}
                    hardwareAccelerated={true}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text style={{ color: "white", fontSize: 15 }}>Are you sure to remove the product!</Text>
                            <View style={{ flexDirection: "row", marginTop: 20 }}>
                                <Button style={styles.but}>
                                    <Text style={{ marginHorizontal: 18 }}>Yes</Text>
                                </Button>
                                <Button style={styles.but} onPress={this.promptState(false).bind()}>
                                    <Text style={{ marginHorizontal: 18 }}>No</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        borderColor: "#BDBDBD",
        borderRadius: 6,
        borderWidth: 2,
        justifyContent: "space-around",
        minWidth: 120,
        padding: 8,
        height: 110
    },
    text: {
        fontWeight: "bold",
        marginTop: 10
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
        backgroundColor: "#0097A7",
        marginHorizontal: 30
    },
    base: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    proinfo: {
        marginTop: 15,
        fontSize: 20,
        color: "grey"
    },
    priinfo: {
        marginTop: 15,
        color: "grey",
        fontSize: 16
    },
    iconpos: {
        position: "absolute",
        top: 40,
        right: 20,
        color: "grey"
    }
});
