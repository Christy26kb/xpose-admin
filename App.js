import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import UserauthScreen from './screens/UserauthScreen'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    login:false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {

              if(!this.state.login)
              {
                return <UserauthScreen />

              }
              else
              {
                return (
                  <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                    <RootNavigation />
                  </View>
                );
              }
            }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/gallery.png'),
        require('./assets/images/search.png'),
        require('./assets/images/search2.png'),
        require('./assets/images/cart.png'),
        require('./assets/images/users.png'),
        require('./assets/images/orders.png'),
        require('./assets/images/menu.png'),
        require('./assets/images/navback.png'),
        require('./assets/images/searchw.png'),
      ]),
      Expo.Font.loadAsync({
        
      // Fonts can be loaded here        
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    //..check if the login data loaded asyn from asynstorage and set the state login:{true/false}..

    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
