import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>PRODUCTOS</Text>
      <Button title="Ir a Producto" onPress={() => navigation.navigate('Producto')} />
    </View>
  );
};

export default Products;
