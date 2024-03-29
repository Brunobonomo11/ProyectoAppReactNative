import { useState } from 'react';
import uuid from 'react-native-uuid';
import { StyleSheet, Text, TextInput, View, Button, FlatList, Modal} from 'react-native';

const App = () => {

      const [modalVisible, setModalVisible] = useState(false)
      const [newProduct, setNewProduct] = useState({
        title: "",
        categoria: ""
      })

      const [product, setProduct] = useState([])

      const addProduct = () =>{
        console.log(newProduct)
        setProduct([...product, setProduct])
        
        setNewProduct({
          title:"",
          categoria:"",
          id: ""
        })
      }

      const onHandlerTitle = (t) =>{
        const id = uuid.v4()
        setNewProduct({...newProduct, title:t,id})
      }

      const onHandlerCategoria = (t) => {
        setNewProduct({...newProduct, categoria:t})
      }

      const deleteTask = (id) => {
        setProduct(product.filter(product => product.id != id))
      }
  
      return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput value={newProduct.title} onChangeText={onHandlerTitle} placeholder='Ingresar Producto' style={styles.input}/>
                <TextInput value={newProduct.categoria} onChangeText={onHandlerCategoria} placeholder='Ingresar Categoria' style={styles.input}/>
                <Button color="#FFC09F" title='Buscar Producto' onPress={addProduct}/>
            </View>
              <View style={styles.packContainer}>
                <View style={styles.pack}>
                    <Text style={styles.textPack}>Smartwatch</Text>
                    <Button color="#FFC09F" title='Ver Más' />
                </View>
                <View style={styles.pack}>
                    <Text style={styles.textPack}>Auriculares</Text>
                    <Button color="#FFC09F" title='Ver Más' />
                </View>
                <View style={styles.pack}>
                    <Text style={styles.textPack}>Celulares</Text>
                    <Button color="#FFC09F" title='Ver Más' />
                </View>
                <View style={styles.pack}>
                    <Text style={styles.textPack}>Parlantes</Text>
                    <Button color="#FFC09F" title='Ver Más' />
                </View>
                <View style={styles.pack}>
                    <Text style={styles.textPack}>Teclados</Text>
                    <Button color="#FFC09F" title='Ver Más' />
                </View>
                <View style={styles.pack}>
                    <Text style={styles.textPack}>Pantallas / Monitores</Text>
                    <Button color="#FFC09F" title='Ver Más' />
                </View>
                {
                  product.map(product => (<View key={product.id} style={styles.pack}>
                                            <Text style={styles.textPack}>{product.title}</Text>
                                            <Button color="#FFC09F" title='Eliminar' />
                                          </View> ) 
                              )
                }
                <FlatList 
                data={product}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                  <View style={styles.pack}>
                  <Text style={styles.textPack}>{item.title}</Text>
                  <Button color="#FFC09F" title='Ver Más' onPress={() => deleteTask(item)} />
                </View>
                )}
                />
                <Modal
                    visible={modalVisible}
                >
                <View>
                    <Text>Estas Seguro de eliminar este producto ?</Text>
                    <Button title='si' onPress={() => console.log("Eliminado")} />
                    <Button title='no' onPress={() => setModalVisible(false)} />
                </View>
                </Modal>
              </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8AC6D0",
        flex: 1,
        paddingTop: 30
      },
    inputContainer: {
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 15
    },
    input: {
        width: 250,
        borderBottomWidth: 2,
        borderColor: "white",
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 10
      },
    text: {
        fontSize: 16
    },
    packContainer: {
        alignItems: "center",
        gap: 25,
        padding: 10
    },
    pack: {
        backgroundColor: "#554971",
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        borderRadius: 5
    },
    textPack: {
        width: "70%",
        color: "white",
        fontSize: 13
    }
});

export default App
