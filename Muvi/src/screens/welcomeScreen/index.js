import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as icons from "@expo/vector-icons";
import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("../../../assets/images/welcome_background.png")}
      >
        <View style={styles.logoArea}>
          <Image
            style={styles.logoAreaImage}
            source={require("../../../assets/images/logo1.png")}
          />
          <Text style={styles.logoAreaText}>Muvi</Text>
        </View>
        <Text style={styles.text1}>Welcome To Muvi</Text>
        <Text style={styles.text2}>
          Look back and reflect on your memories and growth over time.
        </Text>
        <TouchableOpacity style={styles.signUpButton2}>
          <icons.AntDesign name="apple1" size={scale(16)} color="#fff" />
          <Text style={{ color: "#fff" }}>Sign Up with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton3}>
          <icons.AntDesign name="google" size={scale(16)} color="#fed130" />
          <Text>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={styles.signUpButton1}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: verticalScale(15),
          }}
        >
          <Text style={{ color: "#fff" }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#fed130" }}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  logoArea: {
    flexDirection: "row",
    marginVertical: "40@vs",
    marginHorizontal: "20@s",
    alignItems: "center",
    justifyContent: "center",
  },
  logoAreaImage: {
    width: "20%",
    height: "150%",
  },
  logoAreaText: {
    fontSize: "27@s",
    color: "#fff",
    fontWeight: "bold",
  },
  text1: {
    fontSize: "20@s",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: "200@vs",
  },
  text2: {
    fontSize: "15@s",
    textAlign: "center",
    color: "#fff",
    marginHorizontal: "15@s",
  },
  signUpButton1: {
    height: "40@vs",
    backgroundColor: "#fed130",
    margin: "20@s",
    borderRadius: "5@s",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton2: {
    flexDirection: "row",
    height: "40@vs",
    backgroundColor: "#000",
    marginHorizontal: "20@s",
    marginTop: "10@vs",
    borderRadius: "5@s",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton3: {
    flexDirection: "row",
    height: "40@vs",
    backgroundColor: "#fff",
    marginHorizontal: "20@s",
    marginTop: "10@vs",
    borderRadius: "5@s",
    justifyContent: "center",
    alignItems: "center",
  },
});
