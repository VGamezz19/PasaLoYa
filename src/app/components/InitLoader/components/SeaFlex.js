import React from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

export default class SeaFlex extends React.Component {
  state = {
    seaFlex1: new Animated.Value(1),
    seaFlex2: new Animated.Value(1),
    seaFlex3: new Animated.Value(1),
    countLoader: 0
  }
  componentDidMount() {

    this.runAnimation();
  }

  runAnimation() {
    this.state.countLoader++;

    Animated.sequence([
      Animated.timing(
        this.state.seaFlex1,
        {
          toValue: 8,
          duration: 1000,
        }
      ),
      Animated.timing(
        this.state.seaFlex1,
        {
          toValue: 1,
          duration: 1000,
        }
      ),
      Animated.timing(
        this.state.seaFlex3,
        {
          toValue: 5,
          duration: 1000,
        }
      ),
      Animated.timing(
        this.state.seaFlex3,
        {
          toValue: 1,
          duration: 1000,
        }
      )
    ]).start(() => {
      if (!this.props.canFinish) return this.runAnimation()

      return this.finishAnimation()
    })
  }

  finishAnimation() {
    Animated.sequence([
      Animated.timing(
        this.state.seaFlex3,
        {
          toValue: 0,
          duration: 1000,
        }
      ),
      Animated.timing(
        this.state.seaFlex2,
        {
          toValue: 0,
          duration: 1000,
        }
      ),
      Animated.timing(
        this.state.seaFlex1,
        {
          toValue: 0,
          duration: 1000,
        }
      )
    ]).start(() => this.props.callBackFinish())
  }

  render() {
    let { seaFlex1 } = this.state;
    let { seaFlex2 } = this.state;
    let { seaFlex3 } = this.state;
    let { seaFlex4 } = this.state;

    return (
      <View style={[styles.containerLoader]}>

        <Animated.View style={{ justifyContent: 'flex-start', backgroundColor: 'powderblue', flex: seaFlex1, opacity: seaFlex1 }}>
          {this.props.children}
        </Animated.View>
        <Animated.View style={{ backgroundColor: 'skyblue', flex: seaFlex2, opacity: seaFlex2 }} />
        <Animated.View style={{ backgroundColor: 'steelblue', flex: seaFlex3, opacity: seaFlex3 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLoader: {
    flex: 1,
    flexDirection: 'column'
  }
})
