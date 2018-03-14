import React from "react";
import { Image, View, TouchableOpacity, Alert, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, Dimensions } from "react-native";
import { Icon, Button } from "native-base";
import rmv from "../assets/images/rmv.png";
import feedback from "../assets/images/feedback.png";

export default class FeedbackTile extends React.Component {
    render() {
        return (
            <View style={{ marginHorizontal: 30 }}>
                <View style={{ flexDirection: "row", marginRight: 30 }}>
                    <Image source={feedback} />
                    <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 16, color: "grey" }}>
                        This is a good
                        productlkhfwflkhsflishaflisahfsldifhsFILHSFILSDHFSIDFHADSIOFHDSfhsfkusdgfkusdfgdsfgsdufgsf\GFJASFGADSJFGASDJFGSADJADSGFJHADGFJHFGSADHFGASDJFGSADFJGSDFFLIDSHFSIDFHSDIFHsfioHFOIsf
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginTop: 5, fontSize: 16, color: "grey" }}>14/03/2018</Text>
                    <Image source={rmv} style={{ marginLeft: 150, height: 35, width: 35 }} />
                </View>
            </View>
        );
    }
}
