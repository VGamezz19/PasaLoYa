import React, {Component} from 'react';
import { StyleSheet, Alert, View } from 'react-native';

export default class AlertNoNet extends Component {
    
    render() {
        const showAlert = Alert.alert(
            'No net work detected',
            "You don't have NetWork. Please check it.",
            [{ text: 'Try', onPress: () =>  console.log("ok") }],
            { cancelable: false }
        )
        return {showAlert}
    }
}