import React, { Component } from 'react';
import { NetInfo, StyleSheet } from 'react-native';

import checkNet from './config/NetWork'
import InitLoader from './components/InitLoader/InitLoader'
import HomeView from './components/HomeView/HomeView'


export default class App extends Component {
    constructor(props) {
        super(props)
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

    componentDidMount() {
        checkNet.call(this)
    }

    render() {
        return (
            this.state.finishLoader ? (
                <HomeView />
            ) : (
                    <InitLoader
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
