import {
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import BottomTabView from "../../navigation/home.navigation";
import { ScaledSheet } from "react-native-size-matters";

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
      <BottomTabView/>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    backgroundColor: "#202123",
    minHeight: "40@vs",
  },
  logoArea: {
    flexDirection: "row",
    marginVertical: "20@s",
    marginHorizontal: "0@s",
    alignItems: "center",
    justifyContent: "center",
  },
  logoAreaImage: {
    width: "90@s",
    height: "60@vs",
  },
  logoAreaText: {
    fontSize: "30@s",
    color: "#fff",
    fontWeight: "bold",
  },
});
