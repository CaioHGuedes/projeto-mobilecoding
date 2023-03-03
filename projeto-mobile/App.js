import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View>
    <View style={styles.caixa1}>
      <StatusBar style="auto" />
      <Text style = {styles.texto1}>Título da Aplicação</Text>
    </View>
    <View style ={styles.caixa2}>
      <Text>Um texto corrido,Um texto corrido,Um texto corrido,Um texto corrido,Um texto corrido,Um texto corrido,Um texto corrido,Um texto corrido,Um texto corrido,Um texto corrido,Um texto corrido,</Text>
    </View>
  </View>  
    
  );
}

const styles = StyleSheet.create({
  caixa1: {
   // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'flex-start',
    marginTop: 40,
    marginBottom: 40,
  },

  caixa2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 35
  },

  texto1: {
    fontWeight: 'bold',
    fontSize:35
  }
});
