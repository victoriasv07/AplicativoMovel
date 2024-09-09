import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';
import React, {useState} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  
  
  const [texto, setTexto] = useState('Texto inicial');
  const handleClick = () => {
    setTexto('Novo texto');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        {texto}
      </Text>
        
      <Button 
        onPress={handleClick}
        title='Press me' />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
