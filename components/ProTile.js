import React from "react";
import { Image, View, TouchableOpacity, Alert, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Icon, H3, H2, H1 } from "native-base";

export default class ProTile extends React.Component {
    _handleTap = () => {
        this.props._handleTileNavigation("S_Gscreen", this.props.item);
    };
    render() {
        return (
            <TouchableOpacity onPress={this._handleTap}>
                <View>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: this.props.item.imguri }} style={{ width: 125, height: 125, resizeMode: "contain" }} />
                    </View>
                    <View>
                        <Text style={styles.proinfo}>{this.props.item.name}</Text>
                        <Text style={styles.priinfo}>${this.props.item.price}</Text>
                        <TouchableWithoutFeedback>
                            <Icon active name="hand" style={styles.iconpos} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </TouchableOpacity>
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
        color: "black"
    }
});
