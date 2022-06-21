import { StyleSheet, Button, View, Text, StatusBar } from 'react-native';

export default function SignUp({navigation}) {
  return (
    
    <View style={styles.container}>
      <StatusBar backgroundColor={"#26272b"}/>
        <Text>Signup screen</Text>
      <Button
      onPress={() => navigation.navigate("Login")} 
      title="Move to"
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26272b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
