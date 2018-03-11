import React from "react";
import { Image, View, TouchableOpacity, Alert, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, Modal } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Icon, Button } from "native-base";

export default class ProTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prompt: false
        };
    }
    _handleTap = () => {
        this.props._handleTileNavigation("S_Oscreen", this.props.item);
    };
    promptState = (val) => () => {
        this.setState({ prompt: val });
    };
    removeOrder = () => () => {
        var orderid = this.props.item.oid;
        var flag = 0;
        firebase
            .database()
            .ref("/orders/users")
            .child("user1")
            .child("order")
            .child(orderid)
            .remove(function(error) {
                if (error) {
                    alert(error);
                } else {
                    firebase
                        .database()
                        .ref("/orders/user_order_products")
                        .child("user1")
                        .child(orderid)
                        .remove(function(error) {
                            if (error) {
                                alert(error);
                            } else {
                                alert("Order Cancelled successfully");
                                //Need attention here to close the prompt when order is removed.
                                flag = 1;
                            }
                        });
                }
            });

        if (flag) {
            this.setState({ prompt: false });
        }
    };
    render() {
        return (
            <View style={{ width: 300, height: 200 }}>
                <TouchableOpacity onPress={this._handleTap}>
                    <View>
                        <Text style={styles.text}>ORDER-ID: {this.props.item.oid}</Text>
                        <Text style={styles.text}>STATUS: {this.props.item.status}</Text>
                        <Text style={styles.text}>TOTAL AMOUT: ${this.props.item.total}</Text>
                        <Text style={styles.text}>Ordered Date: {this.props.item.date}</Text>
                        <TouchableWithoutFeedback>
                            <Icon active name="hand" style={styles.iconpos} />
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableOpacity>
                <Button
                    style={{ marginTop: 25, marginLeft: 10, backgroundColor: "white", borderRadius: 10, width: 100, height: 50 }}
                    onPress={this.promptState(true).bind()}
                >
                    <Text style={styles.text}>Cancel order</Text>
                </Button>

                <Modal
                    visible={this.state.prompt}
                    animationType={"slide"}
                    onRequestClose={this.promptState(false).bind()}
                    transparent={true}
                    hardwareAccelerated={true}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text style={{ color: "white", fontSize: 16 }}>Are you sure to cancel the order!</Text>
                            <View style={{ flexDirection: "row", marginTop: 20 }}>
                                <Button style={styles.but} onPress={this.removeOrder().bind()}>
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
        marginHorizontal: 40
    },
    text: {
        fontWeight: "bold",
        fontSize: 14,
        color: "grey",
        marginTop: 10,
        marginLeft: 10
    },
    base: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    proinfo: {
        marginTop: 15,
        fontWeight: "bold"
    },
    priinfo: {
        marginTop: 15
    },
    iconpos: {
        position: "absolute",
        top: 40,
        right: 20,
        color: "grey"
    }
});
