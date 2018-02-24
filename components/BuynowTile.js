import React from "react";
import { Image, View, TouchableOpacity, Alert, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, Dimensions, Picker } from "react-native";
import { Icon, Button, Footer, FooterTab } from "native-base";

export default class BuynowTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: "1" };
    }
    /*_handleTap = () =>{
    this.props._handleTileNavigation(this.props.item.name, {});
  }*/
    render() {
        return (
            <View style={{ width: 500, height: 150 }}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Image source={{ uri: this.props.item.imguri }} style={{ width: 100, height: 100 }} />
                    </TouchableOpacity>
                    <View style={{ marginVertical: 20, marginHorizontal: 50 }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>PRODUCT-ID: {this.props.item.pid}</Text>
                            <Text style={styles.text}>NAME: {this.props.item.name}</Text>
                            <Text style={styles.text}>PRICE: ${this.props.item.price}</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 3 }}>
                            <Text style={styles.text}>Qty :</Text>
                            <Picker
                                style={{ width: 40, height: 25, backgroundColor: "#EFF1F2", marginLeft: 20, marginTop: 3 }}
                                mode="dropdown"
                                itemStyle={{ backgroundColor: "grey", height: 10, width: 20 }}
                                selectedValue={this.props.item.quantity}
                                enabled={false}
                                onValueChange={(itemValue, itemIndex) => this.setState({ quantity: itemValue })}
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                            </Picker>
                        </View>
                    </View>
                </View>
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
        color: "grey",
        fontSize: 14,
        marginTop: 5
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
        marginBottom: 30,
        marginLeft: 125
    }
});
