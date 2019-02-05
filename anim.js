import React from 'react';
import { StyleSheet, Button, View, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import { Animated } from 'react-native';

export default class Anim extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      progress: new Animated.Value(0)
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View
          style={styles.container}
        >
            <View style={styles.container5}>
                <Button
                    onPress={()=> navigate('Screen1')}
                    title="<--"
                    color="#841584"
                />
          </View>
          <View style={styles.container3}>
            <Button
              onPress={()=> this.animation.play()}
              title="Start Start Start Start Start Start"
              color="#841584"
            />
          </View>
          <View style={styles.container4}>
            <Button
              onPress={()=> this.animation.reset()}
              title="Reset Reset Reset Reset Reset Reset Reset "
              color="#841584"
            />
          </View>
          <LottieView
            loop
            source={require('./animacoes/3828-spending.json')}
            ref={animation => {
              this.animation = animation;
            }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    transform: [{ rotate: '90deg'}],
    backgroundColor: '#f47a42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    zIndex: 999,
    top: -100,
    left: -150,
    height: 100,
    width: 100,
    backgroundColor:'#42f46e'
  },
  container4:{
    zIndex: 999,
    top: -200,
    left: 150,
    height: 100,
    width: 100,
    backgroundColor:'#e83333'
  },
  container5:{
    zIndex: 999,
    top: 100,
    left: -320,
    height: 100,
    width: 100,
    backgroundColor:'#e83333'
  },
});
