import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeView extends Component {
    constructor(props) {
        super(props)
    }
    lastTest = (message) => console.warn(message)

    render() {
        return (
            <View style={[styles.containerHello]}>
                <Text style={{ fontSize: 40 }}>
                    Hello Penes SU
                </Text>
            </View> 
        )
    }
}
//===============================
//Styles
const styles = StyleSheet.create({
    containerHello: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})
