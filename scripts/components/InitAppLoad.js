import React from 'react';
import { StyleSheet, Text } from 'react-native';
import SeaFlex from './Loader/SeaFlex'

export default class InitialAppLoad extends React.Component {
  
  onEndLoader = () => this.props.onEndLoader

  componentDidMount() {
    this.props.onFetching()
  }
  
  render() {
    return (
      
      <SeaFlex valueData = {this.props.valueData} onEndLoader={this.props.onEndLoader}>
        <Text style={[styles.elementHeaderLoaderText]}>PasaLoYa!</Text>
      </SeaFlex>
    )
  }
}

const styles = StyleSheet.create({
  elementHeaderLoaderText: {
    alignSelf: 'center',
    padding: 35,
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold'
  }
})