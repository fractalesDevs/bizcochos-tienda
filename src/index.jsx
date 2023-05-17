import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

import { Products } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });
  if (!loaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
}
