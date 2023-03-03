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
    <View style = {styles.caixa3}>
      <Text style = {styles.texto2}>Postagem Simples</Text>
    </View>
    <View style = {styles.caixa4}>
      <Text>Uma pequena frase que não diz nada !</Text>
    </View>
    <View style = {styles.caixa3}>
      <Text style = {styles.texto2}>Postagem Simples</Text>
    </View>
    <View style = {styles.caixa4}>
      <Text>Uma pequena frase que não diz nada !</Text>
    </View>
    <View style = {styles.caixa3}>
      <Text style = {styles.texto2}>Postagem Simples</Text>
    </View>
    <View style = {styles.caixa4}>
      <Text>Uma pequena frase que não diz nada !</Text>
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
    marginBottom: 60,
  },

  caixa2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom:40
  },

  caixa3: {
    backgroundColor: '#fff',
    alignItems:'flex-start',
    marginHorizontal: 15,
  },

  caixa4: {
    backgroundColor: '#fff',
    alignItems:'flex-start',
    marginHorizontal: 15,
    marginBottom:60
  },

  texto1: {
    fontWeight: 'bold',
    fontSize:35
  },

  texto2: {
    fontWeight:'bold',
    fontSize:20
  }
});
