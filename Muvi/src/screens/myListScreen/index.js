import { StyleSheet, Button, View, Text } from 'react-native';

export default function MyListScreen ({navigation}) {
  return (
    <View style={styles.container}>
        <Text>mylistscreen</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
