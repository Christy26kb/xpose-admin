# xpose #

## How to setup inspect element feature to analyse the DOM and it's styles (like we do in chrome devtools)? ##

You need to install React Native Debugger to do this. You can refer to this URL for the steps involved: https://www.gravitywell.co.uk/latest/rd/posts/react-native-debugger-expo-awesome/

The article above requires you to install React Native Debugger using the following step:
> brew update && brew cask install react-native-debugger

If the command above works, you're lucky and continue the steps mentioned in the article. But if you get some error like this -

> Error: The /usr/local directory is not writable.
> Even if this directory was writable when you installed Homebrew, other
> software may change permissions on this directory. Some versions of the
> "InstantOn" component of Airfoil are known to do this.

> You should probably change the ownership and permissions of /usr/local
> back to your user account.
>  sudo chown -R $(whoami):admin /usr/local

Follow these methods one by one:

1. Refer to this URL: https://github.com/Homebrew/brew/issues/476
2. If method 1 doesnt work, try this url: https://stackoverflow.com/a/47335586 -- This will definitely work since it completely reinstalls homebrew.

* Note: Beware, method 2 deletes and installs your homebrew and will take plenty of time and bandwidth. So be cautious.

Now run this command > brew update && brew cask install react-native-debugger

Now that React Native Debugger is installed, you continue follow the first article.

