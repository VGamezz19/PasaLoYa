import React from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import InitAppLoad from './components/InitAppLoad'

export default class Index extends React.Component {
    state = {
        finishLoader: false,
        data: [],
        login: null
    }

    endLoader = () => {
        this.setState({
            finishLoader: true
        })
    }
    
    //NetWork
    //NoNoetWork
    //Login
    //NoLogin
    //Data
    //NoData
    
    //Simulated a Petition Fetch
    testPetitionFetch = () => {
        setTimeout(() => {
            if(this.state.login) {
                this.setState({ data: ["hola"] })
            }   
        }, 1000);
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
            valueData={this.state.data}
            onFetching={this.testPetitionFetch}
            onEndLoader={this.endLoader} />)
    }
}

const styles = StyleSheet.create({
    containerHello: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})
