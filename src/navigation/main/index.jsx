import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, Products, Product } from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categorias">
      <Stack.Screen name="Categorias" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name="Productos" component={Products} />
      <Stack.Screen name="Producto" component={Product} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
