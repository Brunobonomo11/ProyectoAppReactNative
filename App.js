import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

const App = () => {

  const addTask = () => {
    console.log("Se acaba de iniciar el Viaje")
  }
  
    return (
      <View style={styles.container}>
        <TextInput placeholder='Ingrese su nombre de usuario' style={styles.inputUser} />
        <TextInput placeholder='Ingrese su contraseña' style={styles.inputUser} />
        <Button style={styles.botonInicio} title='INICIAR SESION' />
      <View style={styles.containerTitulo}>
                    <Text style={styles.titulo}>INICIO</Text>
                    <Text style={styles.titulo}>VIAJES</Text>
                    <Text style={styles.titulo}>TARIFAS</Text>
                    <Text style={styles.titulo}>SOBRE NOSOTROS</Text>
                    <Text style={styles.titulo}>CONTACTO</Text>
      </View>
      <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text style={styles.textPasajero}>
                Pasajero 1
            </Text>
            <Button color="#E8F227" style={styles.botonViaje} title='Iniciar Viaje' onPress={addTask} />
          </View>
          <View style={styles.box}>
            <Text style={styles.textPasajero}>
                Pasajero 2
            </Text>
            <Button color="#E8F227" style={styles.botonViaje} title='Iniciar Viaje' onPress={addTask} />
          </View>
          <View style={styles.box}>
            <Text style={styles.textPasajero}>
                Pasajero 3
            </Text>
            <Button color="#E8F227" style={styles.botonViaje} title='Iniciar Viaje' onPress={addTask} />
          </View>
          <View style={styles.box}>
            <Text style={styles.textPasajero}>
                Pasajero 4
            </Text>
            <Button color="#E8F227" style={styles.botonViaje} title='Iniciar Viaje' onPress={addTask} />
          </View>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FF58',
    paddingTop: 50,
  },
  titulo: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#000'
  },
  inputUser: {
    borderWidth:2, 
    margin:10, 
    paddingVertical:5, 
    paddingHorizontal:10
  },
  containerTitulo: {
    display: 'flex',
    alignItems: 'start'
  },
  boxContainer: {
    backgroundColor: '#525350',
    alignItems: 'center',
    gap: 25,
    padding: 10,
    marginTop: 15
  },
  box: {
    backgroundColor: '#000',
    flexDirection: 'row',
    padding: 35
  },
  textPasajero: {
    width: '70%',
    color: '#fff',
    alignItems: 'center',
    marginTop: 8
  },
  botonViaje: {
    color: '#fff',
    backgroundColor: '#000',
  }
});

export default App
