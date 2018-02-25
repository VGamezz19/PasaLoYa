import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

export default class Login extends React.Component {
    render() {
        return (
            <View style = {styles.containerHome}>
              <LoginButton
                publishPermissions={["publish_actions"]}
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      alert("login has error: " + result.error);
                    } else if (result.isCancelled) {
                      alert("login is cancelled.");
                    } else {
                      AccessToken.getCurrentAccessToken().then(
                        (data) => {
                          alert(data.accessToken.toString())
                        }
                      )
                    }
                  }
                }
                onLogoutFinished={() => alert("logout.")}/>
            </View>
          );
    }
}
//===============================
//Styles
const styles = StyleSheet.create({
  containerHome: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
      flexDirection: 'column'
  }
})
