import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlertNoNet from './components/AlertNoNet'
import SeaFlex from './components/SeaFlex'

export default class InitLoader extends Component {
  onEndLoader = () => this.props.onEndLoader

  render() {
    console.warn(this.props.netWork)
    return (
      (!this.props.netWork) ? <AlertNoNet/> : 
        <SeaFlex data={this.props.data} onEndLoader={this.props.onEndLoader}>
          <Text style={[styles.elementHeaderLoaderText]}>PasaLoYa!</Text>
        </SeaFlex>
      
    )
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