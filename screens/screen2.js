import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

class Screen2 extends React.Component {
    render() {
      return(
        <View style={styles.container}>
          <Text>teste</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      padding: 200
    }
  });
  
  export default Screen2;