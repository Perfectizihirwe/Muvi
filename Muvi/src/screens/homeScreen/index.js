import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import BottomTabView from "../../navigation/home.navigation";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={"#202123"} hidden={false} />
      <View style={styles.topbar}>
        <View style={styles.logoArea}>
          <Image
            style={styles.logoAreaImage}
            source={require("../../../assets/images/logo1.png")}
          />
          <Text style={styles.logoAreaText}>Muvi</Text>
        </View>
      </View>
      <BottomTabView style={{backgroundColor: 'red'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    backgroundColor: "#202123",
    maxHeight: 100,
  },
  logoArea: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  logoAreaImage: {
    width: "20%",
    height: "150%",
  },
  logoAreaText: {
    fontSize: 27,
    color: "#fff",
    fontWeight: "bold",
  },
});
