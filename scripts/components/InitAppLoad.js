import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlertNoNet from './AlertNoNet'
import SeaFlex from './Loader/SeaFlex'

export default class InitAppLoad extends React.Component {
  onEndLoader = () => this.props.onEndLoader
  
  render() {
    if (!this.props.netWork) {
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