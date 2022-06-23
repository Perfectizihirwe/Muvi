import { StyleSheet, Button, View, Text } from 'react-native';

export default function SearhScreen ({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={{color: "#fff", fontSize: 30}}>Searchscreen</Text>
      <Button
      onPress={() => navigation.navigate("MyList")} 
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
