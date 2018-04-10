import React from "react";
import { Platform, StatusBar, StyleSheet, View, BackHandler, AsyncStorage } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import Sidebar from "./components/Sidebar.js";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import GalleryScreen from "./screens/GalleryScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ShopinfoScreen from "./screens/ShopinfoScreen";
import FeedbacksScreen from "./screens/FeedbacksScreen";
import UsersFeedScreen from "./screens/UsersFeedScreen";
import stockEntryScreen from "./screens/stockEntryScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import S_Gscreen from "./screens/S_Gscreen";
import S_Oscreen from "./screens/S_Oscreen";
import S_Uscreen from "./screens/S_Uscreen";

import * as firebase from "firebase";
//..Setting the necessary firebase config options
const firebaseconfig = {
    apiKey: "AIzaSyAiy6NBxiH3UebfQwAu0e2TJOrqCIYkSjk",
    authDomain: "xpose-8e518.firebaseapp.com",
    databaseURL: "https://xpose-8e518.firebaseio.com",
    projectId: "xpose-8e518",
    storageBucket: "xpose-8e518.appspot.com"
};

//..Initializing firebase with the config...
firebase.initializeApp(firebaseconfig);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
        this.state = {
            isLoadingComplete: false,
            login: false,
            routename: ""
        };
    }

    _createRootNavigator = (load) => {
        return DrawerNavigator(
            {
                Gallery: {
                    screen: GalleryScreen
                },
                Orders: {
                    screen: OrdersScreen
                },
                Entry: {
                    screen: stockEntryScreen
                },
                Shop: {
                    screen: ShopinfoScreen
                },
                Feedbacks: {
                    screen: FeedbacksScreen
                },
                UsersFeedScreen: {
                    screen: UsersFeedScreen
                },
                Login: {
                    screen: LoginScreen
                },
                Signup: {
                    screen: SignupScreen
                },
                //...starting of sub screens.....

                S_Gscreen: {
                    screen: S_Gscreen
                },
                S_Oscreen: {
                    screen: S_Oscreen
                },
                S_Uscreen: {
                    screen: S_Uscreen
                }
            },
            {
                initialRouteName: load,
                contentComponent: Sidebar,
                drawerWidth: 280
            }
        );
    };

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem("userToken");
        this.setState({ login: userToken == "true" ? true : false, routename: userToken == "true" ? "Gallery" : "Login" });
        console.log("App.js usertoken", userToken);
        console.log("App.js route", this.state.routename);
    };

    render() {
        const Layout = this._createRootNavigator(this.state.routename);
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinishLoading} />;
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                    {Platform.OS === "android" && <View style={styles.statusBarUnderlay} />}
                    <Layout />
                </View>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require("./assets/images/menu.png"),
                require("./assets/images/navback.png"),
                require("./assets/images/searchw.png"),
                require("./assets/images/feedback.png"),
                require("./assets/images/add.png"),
                require("./assets/images/rmvc.png"),
                require("./assets/images/searchback.png"),
                require("./assets/images/searchclear.png"),
                require("./assets/images/logout.png"),
                require("./assets/images/filter.png")
            ]),
            Expo.Font.loadAsync({
                // Fonts can be loaded here
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
                Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
            })
        ]);

        //.. Load data from asynstorage  for the  login state:{true/false}..
    };

    _handleLoadingError = (error) => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        //..set the login state according to asyncstorage....

        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: "rgba(0,0,0,0.2)"
    }
});
