import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as icons from "@expo/vector-icons";

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
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#fff', marginTop: 250}}>Welcome To Muvi</Text>
        <Text style={{fontSize: 15, textAlign: 'center', color: '#fff', marginHorizontal: 15}}>Look back and reflect on your memories and growth over time.</Text>
        <TouchableOpacity style={styles.signUpButton2}>
          <icons.AntDesign name="apple1" size={16} color="#fff" />
          <Text style={{ color: "#fff" }}>Sign Up with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton3}>
          <icons.AntDesign name="google" size={16} color="#fed130" />
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
            marginTop: 15,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  logoArea: {
    flexDirection: "row",
    marginVertical: 40,
    marginHorizontal: 20,
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
  signUpButton1: {
    height: 40,
    backgroundColor: "#fed130",
    margin: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton2: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#000",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton3: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
