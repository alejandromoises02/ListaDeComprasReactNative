import React from "react";
import { StyleSheet, Button, Text, View, FlatList } from "react-native";
import {styles} from './Lista.styles'

export const Lista = ( {productList, handleModal} ) => {
  return (
    <FlatList
      data={productList}
      renderItem={(data) => {
        return (
          <View style={[styles.card]}>
            <Text style={[styles.product]}>{data.item.value}</Text>
            <Button style={[styles.button]} title="Eliminar" color="#FC020F" onPress={() => handleModal(data.item.id)}/>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};


