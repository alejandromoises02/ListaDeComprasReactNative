import React from "react";
import {Button, Text, View, Modal} from "react-native";
import {styles} from './ModalEliminar.styles'

export const ModalEliminar = ({modalVisible, seleccionado ,handleConfirmDelete}) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.container}>
        <View style={[styles.contenido]}>
          <Text style={styles.mensaje}>
            Quieres Eliminarlo?
          </Text>
          <Text style={styles.producto}>{seleccionado.value}</Text>
          <View>
            <Button onPress={handleConfirmDelete} title="ELIMINAR" color="#FC020F"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};


