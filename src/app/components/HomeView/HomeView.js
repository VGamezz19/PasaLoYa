import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeView extends Component {
    constructor(props){
        super(props)
        this.socket = this.props.socket

        this.socket.on('afterTest', ({message}) => {
            this.lastTest(message)
        })
    }
    lastTest = (message) => console.warn(message)
    
    componentDidMount(){
        this.socket.emit('test')
       //console.warn(this.props.socket)
    }
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
