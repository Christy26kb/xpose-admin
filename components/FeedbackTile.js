import React from "react";
import { Image, View, TouchableOpacity, Alert, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, Dimensions } from "react-native";
import { Icon, Button } from "native-base";
import rmv from "../assets/images/rmv.png";
import feedback from "../assets/images/feedback.png";

export default class FeedbackTile extends React.Component {
    removeFeedback = () => () => {
        var feedid = this.props.item.id;
        //Removing entry from wishlist of 'user1'(it will be dynamic) with finded custom key.
        var user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
        }
        firebase
            .database()
            .ref("/feedbacks")
            .child("users")
            .child(uid)
            .child(feedid)
            .remove(function(error) {
                if (error) {
                    alert(error);
                }
            });
    };
    render() {
        return (
            <View style={{ marginBottom: 25, marginHorizontal: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "center", marginRight: 30 }}>
                    <Image source={feedback} />
                    <View style={{ backgroundColor: "#ECEFF1", borderRadius: 15, width: 270 }}>
                        <Text style={{ marginBottom: 20, marginLeft: 15, marginTop: 20, fontSize: 16, color: "grey" }}>{this.props.item.message}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text style={{ marginTop: 5, fontSize: 16, color: "grey" }}>{this.props.item.date}</Text>
                    <TouchableOpacity onPress={this.removeFeedback().bind()}>
                        <Image source={rmv} style={{ marginLeft: 180, height: 35, width: 35 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
