import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlertNoNet from './AlertNoNet'
import SeaFlex from './Loader/SeaFlex'

export default class InitAppLoad extends React.Component {
  state = {
    netWorkStatus : true
  }
  onEndLoader = () => this.props.onEndLoader

  
  componentWillReceiveProps(nextProps) {
    this.setState({netWorkStatus: nextProps.netWork})
  }
  
  render() {
    console.warn("Props.NetWork -->",this.state)
    if (!this.state.netWorkStatus) {
      return <AlertNoNet />
    } else {
      return (
        <SeaFlex data={this.props.data} onEndLoader={this.props.onEndLoader}>
          <Text style={[styles.elementHeaderLoaderText]}>PasaLoYa!</Text>
        </SeaFlex>
      )
    }
  }
}

//===============================
//Styles
const styles = StyleSheet.create({
  elementHeaderLoaderText: {
    alignSelf: 'center',
    padding: 35,
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold'
  }
})