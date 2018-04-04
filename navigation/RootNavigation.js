import { Notifications } from "expo";
import React from "react";
import { DrawerNavigator } from "react-navigation";

import Sidebar from "../components/Sidebar.js";
import registerForPushNotificationsAsync from "../api/registerForPushNotificationsAsync";

import GalleryScreen from "../screens/GalleryScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ShopinfoScreen from "../screens/ShopinfoScreen";
import UserauthScreen from "../screens/UserauthScreen";
import FeedbacksScreen from "../screens/FeedbacksScreen";
import UsersFeedScreen from "../screens/UsersFeedScreen";
import stockEntryScreen from "../screens/stockEntryScreen";
import S_Gscreen from "../screens/S_Gscreen";
import S_Oscreen from "../screens/S_Oscreen";
import S_Uscreen from "../screens/S_Uscreen";

const RootStackNavigator = DrawerNavigator(
    /**
     * Note to Christy: Any new page you need to add, import on top and then specify it in this below list like I have specified Gallery.
     */
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
        Log: {
            screen: UserauthScreen
        },
        Feedbacks: {
            screen: FeedbacksScreen
        },
        UsersFeedScreen: {
            screen: UsersFeedScreen
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
        contentComponent: Sidebar,
        drawerWidth: 280
    }
);

export default class RootNavigator extends React.Component {
    componentDidMount() {
        this._notificationSubscription = this._registerForPushNotifications();
    }

    componentWillUnmount() {
        this._notificationSubscription && this._notificationSubscription.remove();
    }

    render() {
        return <RootStackNavigator />;
    }

    _registerForPushNotifications() {
        // Send our push token over to our backend so we can receive notifications
        // You can comment the following line out if you want to stop receiving
        // a notification every time you open the app. Check out the source
        // for this function in api/registerForPushNotificationsAsync.js
        registerForPushNotificationsAsync();

        // Watch for incoming notifications
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = ({ origin, data }) => {
        console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
    };
}
