import { StyleSheet, Button, View, Text } from 'react-native';

export default function HomeScreen ({navigation}) {
  return (
    <View style={styles.container}>
        <Text>homescreen</Text>
      <Button
      onPress={() => navigation.navigate("Search")} 
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
