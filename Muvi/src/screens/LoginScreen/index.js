import { StyleSheet, Button, View, Text } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Login screen</Text>
      <Button 
      onPress={() => navigation.navigate("MainNavigation")} 
      title="Move to"
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
