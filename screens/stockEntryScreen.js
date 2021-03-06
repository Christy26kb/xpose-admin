import React, { Component } from "react";
import { Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View, Text, BackHandler, TextInput, FlatList, Picker } from "react-native";
import { ImagePicker } from "expo";
import { Container, Header, Content, Body, ListItem, Button, List, Icon, Textarea, Label, H3 } from "native-base";
import { NavigationActions, StackNavigator } from "react-navigation";
import navback from "../assets/images/navback.png";
export default class stockEntryScreen extends Component {
    constructor(props) {
        super(props);
        //VIM TODO: use a random unique number generator to generate unique orderid.
        var rand1 = require("unique-random")(6000, 10000);
        var rand2 = require("unique-random")(300, 800);
        var productid = rand1() * rand2();

        this.state = {
            imgbase64: null,
            id: productid,
            imguri: "",
            name: "",
            price: "",
            category: "",
            stock: "true",
            desc: "Good product with decent quality and an affordable price range."
        };
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressAndroid);
    }

    onBackButtonPressAndroid = () => {
        return true;
    };

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

    _handleTileNavigation = (pageName, propsObject) => {
        this.navigate(pageName, propsObject);
    };

    //TODO:Replace image in view with image slider component.

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: "Images",
            allowsEditing: false,
            base64: true
        });


        if (!result.cancelled) {
            this.setState({ imguri: result.uri, imgbase64: result.base64 });
        }
    };

    _uploadProductData = () => () => {
        //Encoded image data base64.
        var imagedata = this.state.imgbase64;
        var pricee = parseInt(this.state.price);
        //Data for product details entry.
        var pid = this.state.id;
        var name = this.state.name;
        var price = pricee;
        var category = this.state.category;
        var instock = this.state.stock == "true" ? true : false;
        var description = this.state.desc;
        var quantity = 1;

        //Validation check if all fields are filled.
        if (pid && name && price && category && description && imagedata) {
            let base64Img = `data:image/jpg;base64,${imagedata}`;
            //Add your cloud name
            let apiUrl = "https://api.cloudinary.com/v1_1/duxoefybk/image/upload";
            let data = {
                file: base64Img,
                upload_preset: "zcl3dtbz"
            };
            fetch(apiUrl, {
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json"
                },
                method: "POST"
            })
                .then((r) => {
                    let data = r._bodyText;
                    let downloaduri = JSON.parse(data).secure_url;

                    //Structuring the data need to be uploaded.
                    var productentry = {
                        pid: pid,
                        imguri: downloaduri,
                        name: name,
                        price: pricee,
                        category: category,
                        instock: instock,
                        description: description,
                        quantity: quantity
                    };

                    //Uploading whole data to firebase.
                    firebase
                        .database()
                        .ref("/products")
                        .child(pid)
                        .set(productentry, function (error) {
                            if (error) {
                                alert(error);
                            } else {
                                alert("Product entered successfully");
                            }
                        });
                })
                .catch((err) => console.log(err));
        } else {
            alert("Empty fields!");
        }
    };

    render() {
        this.navigate = this.props.navigation.navigate;
        //Recieving selected product data from GalleryScreen.

        return (
            <Container>
                <Header style={styles.headeri}>
                    <TouchableOpacity onPress={this.navigateToScreen("Gallery")}>
                        <Image source={navback} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 60, color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Stock Entry</Text>
                </Header>

                <ScrollView contentContainerStyle={styles.baseContainer}>
                    <View style={{ flex: 2 }}>
                        {this.state.imguri ? <Image source={{ uri: this.state.imguri }} style={{ width: 300, height: 223, resizeMode: "contain" }} /> : null}
                    </View>

                    <View style={{ flexWrap: "nowrap", padding: 20 }}>
                        <Button style={{ height: 30, width: 220, backgroundColor: "#009688" }} onPress={this._pickImage}>
                            <Text style={{ color: "white", marginHorizontal: 10 }}>Pick an image from camera roll</Text>
                        </Button>
                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>ID</Label>
                        <TextInput
                            underlineColorAndroid="transparent"
                            editable={false}
                            onChangeText={(id) => this.setState({ id })}
                            style={{ marginTop: 10, width: 250, height: 35, borderColor: "grey", borderWidth: 0.8 }}
                            value={this.state.id.toString()}
                        />
                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>Name</Label>
                        <TextInput
                            underlineColorAndroid="transparent"
                            style={{ marginTop: 10, width: 250, height: 35, borderColor: "grey", borderWidth: 0.8 }}
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name}
                        />

                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>Price</Label>
                        <TextInput
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            style={{ marginTop: 10, width: 250, height: 35, borderColor: "grey", borderWidth: 0.8 }}
                            value={this.state.price}
                            onChangeText={(price) => this.setState({ price })}
                        />
                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>Category</Label>
                        <TextInput
                            underlineColorAndroid="transparent"
                            style={{ marginTop: 10, width: 250, height: 35, borderColor: "grey", borderWidth: 0.8 }}
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(category) => this.setState({ category })}
                            value={this.state.category}
                        />
                        <View style={{ flexDirection: "row", marginTop: 30 }}>
                            <Text style={{ fontSize: 16, color: "grey" }}>Available :</Text>
                            <Picker
                                style={{ width: 120, height: 30, backgroundColor: "#EFF1F2", marginLeft: 20 }}
                                mode="dropdown"
                                itemStyle={{ backgroundColor: "grey", height: 10, width: 20 }}
                                selectedValue={this.state.stock}
                                enabled={true}
                                onValueChange={(itemValue, itemIndex) => this.setState({ stock: itemValue })}
                            >
                                <Picker.Item label="In-stock" value="true" />
                                <Picker.Item label="Out of stock" value="false" />
                            </Picker>
                        </View>
                        <Label style={{ fontSize: 16, color: "grey", marginTop: 20 }}>Description</Label>
                        <Textarea
                            value={this.state.desc}
                            autoCorrect={true}
                            style={{ marginTop: 20, width: 270, height: 230, backgroundColor: "#ECEFF1" }}
                            onChangeText={(desc) => this.setState({ desc })}
                        />
                    </View>
                    <Button
                        onPress={this._uploadProductData().bind()}
                        style={{ marginTop: 30, marginLeft: 20, marginRight: 20, marginBottom: 20, backgroundColor: "#009688" }}
                        full
                        rounded
                        success
                    >
                        <Text style={{ color: "white" }}>Add</Text>
                    </Button>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    headeri: {
        backgroundColor: "#009688",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    inputstyle: {
        marginTop: 20,
        width: 250
    },
    baseContainer: {
        padding: 20,
        flexDirection: "column"
    }
});
