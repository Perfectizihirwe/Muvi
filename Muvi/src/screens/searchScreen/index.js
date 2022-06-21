import { StyleSheet, Button, View, Text } from 'react-native';

export default function SearhScreen ({navigation}) {
  return (
    <View style={styles.container}>
        <Text>searchscreen</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
