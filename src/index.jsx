import { View } from 'react-native';

import { Products } from './screens/index';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
}
