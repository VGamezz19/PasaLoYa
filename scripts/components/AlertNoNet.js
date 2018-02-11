import React from 'react';
import { StyleSheet, Alert, View } from 'react-native';

export default class AlertNoNet extends React.Component {
    render() {
        const showAlert = Alert.alert(
            'Somthing Error...',
            "You don't have NetWork",
            [
                { text: 'Try again ...', onPress: () =>  console.warn("ok") },
            ],
            { cancelable: false }
        )
        return (<View>
            {showAlert}
        </View>)
    }

}