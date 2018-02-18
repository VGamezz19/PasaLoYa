import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlertNoNet from './components/AlertNoNet'
import SeaFlex from './components/SeaFlex'

export default class InitLoader extends Component {
  //onEndLoader = () => this.props.onEndLoader

  componentDidMount() {
    this.props.onFetching()
  }
  
  render() {
    const netWork = this.props.netWork
    const reciveData = this.props.data.length < 1 ? false : true
    return (
      (!netWork) ? <AlertNoNet/> : 
        (<SeaFlex canFinish={this.props.data} callBackFinish={this.props.onEndLoader}>
          <Text style={[styles.elementHeaderLoaderText]}>PasaLoYa!</Text>
        </SeaFlex>)
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