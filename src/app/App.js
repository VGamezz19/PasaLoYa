import React, { Component } from 'react';
import { NetInfo, StyleSheet } from 'react-native';
import SocketIOClient from 'socket.io-client';

import InitAppLoad from './components/InitLoader/InitLoader'
import HomeView from './components/HomeView/HomeView'



export default class App extends Component {
    constructor(props) {
        super(props)
        this.socket = SocketIOClient('http://localhost:5000')
    }
    state = {
        finishLoader: false,
        data: [],
        login: true,
        netWork: true,
    }

    //Setters
    setEndLoader = () => this.setState({ finishLoader: true })
    setNetWork = type => this.setState({ netWork: type })

    //Simulated a Petition Fetch
    testPetitionFetch = () => {
        setTimeout(() => {
            this.setState({ data: ["Hola", "Data"] })
        }, 10000);
    }

    //=======================
    //Metodos REACT.

    componentDidMount() {

        handleFirstConnectivityChange = (isConnected) => {
            NetInfo.getConnectionInfo().then((connectionInfo) => {
                console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
                this.setNetWork(isConnected)
            });
        }
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            handleFirstConnectivityChange
        );
    }

    render() {
        return (
            this.state.finishLoader ? (
                <HomeView />
            ) : (
                    <InitAppLoad
                        netWork={this.state.netWork}
                        data={this.state.data}
                        onFetching={this.testPetitionFetch}
                        onEndLoader={this.setEndLoader} />
                )
        )
    }


}
// =============================
//Styles
const styles = StyleSheet.create({
    containerHello: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})
