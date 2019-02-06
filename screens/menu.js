import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Screen1 extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
        <View
            style={styles.container}
        >
        <View style={styles.container3}>
          <Button
            onPress={()=> navigate('Screen1')}
            title="Start"
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
        backgroundColor: 'blue',
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
      }
});

export default Screen1;