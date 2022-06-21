import { StyleSheet, Button, View, Text } from 'react-native';

export default function MoreScreen ({navigation}) {
  return (
    <View style={styles.container}>
        <Text>morescreen</Text>
      <Button
      onPress={() => navigation.navigate("Home")} 
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
