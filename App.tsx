import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FieldCapture } from './src/features/FieldCapture';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <FieldCapture />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
