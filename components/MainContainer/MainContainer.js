import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Lista} from '../Lista/Lista';
import {ModalEliminar} from '../ModalEliminar/ModalEliminar';
import {AddComponent} from '../AddComponent/AddComponent';
import {styles} from './MainContainer.styles'

export const MainContainer = () => {
  const [seleccionado, setSeleccionado] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [producto, setProducto] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [productList, setProductList] = useState([]);
  
  
  const handleChangeText = (entrada) => {
    setProducto(entrada)
    setMensajeError('');
  };

  const handleAddItem = () => {
    const found = productList.find(prod => prod.value === producto);
    if (producto && found == undefined) {
      setProductList([
        ...productList,
        {
          id: Math.random().toString(),
          value: producto,
        },
      ]);
      setProducto('');
      setMensajeError('');
    } else if(found !== undefined){
      setMensajeError('Producto Existente en la lista');
    }else {
      setMensajeError('Required');
    }
  }

  const handleConfirmDelete = () => {
    const id = seleccionado.id;
    setProductList(productList.filter(item => item.id !== id));
    setSeleccionado({});
    setModalVisible(false);
  }

  const handleModal = (id) => {
    setSeleccionado(productList.find(item => item.id === id));
    setModalVisible(true);
  }

  return (
    <View style={styles.screen}>
      <AddComponent handleChangeText={handleChangeText} producto={producto} handleAddItem={handleAddItem}/>
      <Text style={styles.mensajeError}>{mensajeError}</Text>
      <Lista productList={productList} handleModal={handleModal}/>
      <ModalEliminar modalVisible={modalVisible} seleccionado={seleccionado} handleConfirmDelete={handleConfirmDelete}/>
      <StatusBar style="auto" />
    </View>
  );
}

