import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawBoard from './components/DrawBoard'

export default class HomeView extends Component {
    constructor(props) {
        super(props)
    }
    lastTest = (message) => console.warn(message)

    render() {
        return (
            <View style={[styles.containerHome]}>
                <View style={[styles.contentHead]}>
                    <Text style={{ fontSize: 40 }}>
                        Hello Penes SU
                    </Text>
                </View>
                <View style={[styles.contentBoard]}> 
                    <DrawBoard />
                </View>
            </View>

        )
    }
}
//===============================
//Styles
const styles = StyleSheet.create({
    containerHome: {
        flex: 5,
        flexDirection: 'column'
    },
    contentHead: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBoard: {
        flex:4
    }
})
