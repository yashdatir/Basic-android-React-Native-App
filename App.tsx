import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'900'}}>Welcome Yash Datir</Text>
      <Text style={{color:'red'}}>This is Android | IOS</Text>
      <Button title="Click" onPress={()=>Alert.alert('Hello World')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:'40%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
