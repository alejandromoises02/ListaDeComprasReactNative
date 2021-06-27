import React from "react";
import {
  TextInput,
  Button,
  View,
} from "react-native";
import { styles } from "./AddComponent.styles";


export const AddComponent = ({ handleChangeText, producto, handleAddItem }) => {
  return (
      <View style={styles.entrada}>
        <TextInput
          placeholder="Ingrese un Producto"
          style={styles.input}
          onChangeText={handleChangeText}
          value={producto}
        />
        <Button title="Agregar" color="#01E611" onPress={handleAddItem} />
      </View>
  );
};
