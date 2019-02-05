import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Animated } from 'react-native';
import teste from '../animacoes/1370-confetti.json'

class Screen1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      progress: new Animated.Value(0)
    }
  }
    render() {
      const { navigate } = this.props.navigation;
      return(
        <View
          style={styles.container}
        >
            <View style={styles.btnMenu}>
                <Button
                    onPress={()=> navigate('Menu')}
                    title="<- Menu"
                    color="#841584"
                />
            </View>
            <View style={styles.btnBack}>
                <Button
                    onPress={()=> navigate('Screen2')}
                    title="<--"
                    color="#841584"
                />
            </View>
            <View style={styles.playAnim}>
                <Button
                onPress={()=> this.animation.play()}
                title="Start Start Start Start Start Start"
                color="#841584"
                />
            </View>
            <View style={styles.reset}>
                <Button
                onPress={()=> this.animation.reset()}
                title="Reset Reset Reset Reset Reset Reset Reset "
                color="#841584"
                />
            </View>
            <LottieView loop source={teste}
                ref={animation => {
                this.animation = animation;
                }}
            />
            <View style={styles.btnNext}>
                <Button
                    onPress={()=> navigate('Screen2')}
                    title="-->"
                    color="#841584"
                />
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      transform: [{ rotate: '90deg'}],
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    playAnim: {
      zIndex: 999,
      top: -100,
      left: -150,
      height: 100,
      width: 100,
      backgroundColor:'#42f46e'
    },
    reset:{
      zIndex: 999,
      top: -200,
      left: 150,
      height: 100,
      width: 100,
      backgroundColor:'#e83333'
    },
    btnMenu:{
      zIndex: 999,
      top: 50,
      left: -320,
      height: 100,
      width: 100,
      backgroundColor:'blue'
    },
    btnBack:{
      zIndex: 999,
      top: 100,
      left: -320,
      height: 100,
      width: 100,
      backgroundColor:'#e83333'
    },
    btnNext: {
      zIndex: 999,
      top: -200,
      left: 320,
      height: 100,
      width: 100,
      backgroundColor:'green'
    }
  });
  
  export default Screen1;