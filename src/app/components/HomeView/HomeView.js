import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeView extends Component {

    //this.socket = SocketIOClient('http://localhost:3000')
    render() {
        return (
            <View style={[styles.containerHello]}>
                <Text style={{ fontSize: 40 }}>
                    Hello World...
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
