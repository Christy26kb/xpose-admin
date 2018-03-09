import React from "react";
import { Image, View, TouchableOpacity, Alert, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Icon } from "native-base";

export default class ProTile extends React.Component {
    _handleTap = () => {
        this.props._handleTileNavigation("S_Oscreen", this.props.item);
    };
    render() {
        return (
            <View style={{ width: 300, height: 150 }}>
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
