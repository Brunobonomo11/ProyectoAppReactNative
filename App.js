import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenidos a nuestra primera App !</Text>
        <Text style={styles.titulo}>Creamos nuestro primer proyecto con React Native</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9783B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    textTransform: 'uppercase',
    fontSize: 15,
    color: '#FFFFFF'
  }
});

export default App
