import { StyleSheet, Button, View, Text } from 'react-native';

export default function MyListScreen ({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={{color: "#fff", fontSize: 30}}>Mylistscreen</Text>
      <Button
      onPress={() => navigation.navigate("More")} 
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
