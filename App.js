import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';

import icon from './assets/icon.png';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
            <Text 
            style={{
              color: 'white', 
              fontSize: 30, 
              marginTop: 0}}>
              Mi aplicacion Metacritic
            </Text>
      <Image source={{uri: "https://w7.pngwing.com/pngs/409/654/png-transparent-new-super-mario-bros-2-new-super-mario-bros-2-super-mario-super-mario-bros-hand-nintendo.png"}} style={{width: 200, height: 250, marginTop: 45}}/>
      
      <Pressable
      style={{
        width: 150,
        height: 50,
        backgroundColor: 'white',
        color: 'black',
        padding: 10,
        marginTop: 45,
        borderRadius: 10,
        alignItems: 'center',
      }}> 
        <Text
        style={{
          fontSize: 20,
        }}
        >Iniciar sesión</Text>
      </Pressable>
        


      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
