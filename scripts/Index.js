import React from 'react';
import { Animated, NetInfo, Text, View, StyleSheet } from 'react-native';
import InitAppLoad from './components/InitAppLoad'

export default class Index extends React.Component {
    state = {
        finishLoader: false,
        data: [],
        login: true,
        netWork: true,
    }

    //Setters
    setEndLoader = () => this.setState({ finishLoader: true })
    setNetWork = type => this.setState({ netWork: type })
    setDataFetch = resData => this.setState({ data: resData })

    //Simulated a Petition Fetch
    testPetitionFetch = () => {
        setTimeout(() => {
            console.warn("Execute SetTimeout")

                this.setDataFetch(["Hola", "Data"])

        }, 10000);
    }

    //=======================
    //Metodos REACT.Component
    componentWillMount() {
        this.testPetitionFetch()
    }
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
        if (this.state.finishLoader) {
            return (<View
                style={[styles.containerHello]}>
                <Text style={{ fontSize: 40 }}>
                    Hello World...
                    </Text>
            </View>)
        }

        return (<InitAppLoad
            netWork={this.state.netWork}
            data={this.state.data}
            onFetching={this.testPetitionFetch}
            onEndLoader={this.setEndLoader} />)
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
