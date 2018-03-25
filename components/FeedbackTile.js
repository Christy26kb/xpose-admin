import React from "react";
import { Image, View, TouchableOpacity, Alert, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, Dimensions } from "react-native";
import { Icon, Button } from "native-base";
import rmv from "../assets/images/rmv.png";
import feedback from "../assets/images/feedback.png";

export default class FeedbackTile extends React.Component {
    render() {
        return (
            <View style={{ marginBottom: 25, marginHorizontal: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "center", marginRight: 30 }}>
                    <Image source={feedback} />
                    <View style={{ marginLeft: 10, backgroundColor: "#ECEFF1", borderRadius: 15, width: 270 }}>
                        <Text style={{ marginBottom: 20, marginLeft: 15, marginTop: 20, fontSize: 16, color: "grey" }}>{this.props.item.message}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text style={{ marginTop: 5, fontSize: 16, color: "grey" }}>{this.props.item.date}</Text>
                </View>
            </View>
        );
    }
}
