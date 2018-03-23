import React from "react";
import { Image, View, TouchableOpacity, Alert, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, Modal } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Icon, Button } from "native-base";

export default class UsersTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _handleTap = () => {
        this.props._handleTileNavigation("Orders", this.props.item);
    };

    render() {
        return (
            <View style={{ width: 300, height: 200 }}>
                <TouchableOpacity onPress={this._handleTap}>
                    <View>
                        <Text style={styles.text}>Name: {this.props.item.name}</Text>
                        <Text style={styles.text}>Email: {this.props.item.email}</Text>
                        <Text style={styles.text}>Phone: {this.props.item.phone}</Text>
                        <Text style={styles.text}>Address: {this.props.item.address}</Text>
                        <Text style={styles.iconpos}> > </Text>
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
    but: {
        backgroundColor: "white",
        width: 60,
        height: 35,
        marginTop: 10,
        marginHorizontal: 30,
        marginBottom: 10
    },
    text: {
        fontSize: 15,
        color: "grey",
        marginTop: 10,
        marginLeft: 10
    },
    base: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconpos: {
        position: "absolute",
        top: 40,
        right: 20,
        color: "grey",
        fontSize: 30
    }
});
