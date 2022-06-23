import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as icons from "@expo/vector-icons";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#26272b"} hidden={false} />
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <icons.Ionicons name="arrow-back-outline" size={26} color="#fed130" />
        </TouchableOpacity>
        <Text style={styles.topBarText}>Register</Text>
      </View>
      <View style={styles.logoArea}>
        <Image
          style={styles.logoAreaImage}
          source={require("../../../assets/images/logo1.png")}
        />
        <Text style={styles.logoAreaText}>Muvi</Text>
      </View>
      <Text style={styles.text1}>
        Sign up to discover all our movies and enjoy our features
      </Text>
      <View style={styles.inputarea1}>
        <TextInput
          style={styles.input1}
          placeholder="Email Address"
          placeholderTextColor={"gray"}
        />
        <TouchableOpacity style={styles.inputicon1}>
          <icons.MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="#fed130"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputarea2}>
        <TextInput
          style={styles.input2}
          placeholder="Password"
          placeholderTextColor={"gray"}
        />
        <TouchableOpacity style={styles.inputicon2}>
          <icons.Feather name="lock" size={20} color="#fed130" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputarea3}>
        <TextInput
          style={styles.input3}
          placeholder="Confirm Password"
          placeholderTextColor={"gray"}
        />
        <TouchableOpacity style={styles.inputicon3}>
          <icons.Feather name="lock" size={20} color="#fed130" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("MainNavigation")}
        style={styles.signUpButton1}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.text2}>
        <Text style={{ color: "#fff", fontSize: 13 }}>
          By signing up I accept
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#fed130", fontSize: 13 }}> terms of use </Text>
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 13 }}>and </Text>
        <TouchableOpacity>
          <Text style={{ color: "#fed130", fontSize: 13 }}>privacy policy</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{ fontSize: 11, textAlign: "center", color: "#fff", margin: 5 }}
      >
        or simply sign up with
      </Text>
      <TouchableOpacity style={styles.signUpButton2}>
        <icons.AntDesign name="apple1" size={16} color="#fff" />
        <Text style={{ color: "#fff" }}>Sign Up with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton3}>
        <icons.AntDesign name="google" size={16} color="#fed130" />
        <Text>Sign Up with Google</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
  topBar: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  topBarText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
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
  text1: {
    color: "#fff",
    marginHorizontal: 20,
    textAlign: "center",
  },
  inputarea1: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderWidth: 0.5,
    marginHorizontal: 20,
    borderTopColor: "#26272b",
    borderLeftColor: "#26272b",
    borderRightColor: "#26272b",
    alignItems: "center",
    marginTop: 10,
  },
  inputarea2: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderWidth: 0.5,
    marginHorizontal: 20,
    borderTopColor: "#26272b",
    borderLeftColor: "#26272b",
    borderRightColor: "#26272b",
    alignItems: "center",
    marginTop: 10,
  },
  inputarea3: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderWidth: 0.5,
    marginHorizontal: 20,
    borderTopColor: "#26272b",
    borderLeftColor: "#26272b",
    borderRightColor: "#26272b",
    alignItems: "center",
    marginTop: 10,
  },
  input1: {
    flex:5,
    height: 40,
    backgroundColor: "#26272b",
    color: "#fff",
    minWidth: 100,
  },
  inputicon1: {
    flex: 1,
    marginLeft: 100,
  },
  input2: {
    flex:5,
    height: 40,
    backgroundColor: "#26272b",
    color: "#fff",
    minWidth: 100,
  },
  inputicon2: {
    flex: 1,
    marginLeft: 100,
  },
  input3: {
    flex:5,
    height: 40,
    backgroundColor: "#26272b",
    color: "#fff",
    minWidth: 100,
  },
  inputicon3: {
    flex: 1,
    paddingLeft: 100,
  },
  signUpButton1: {
    height: 40,
    backgroundColor: "#fed130",
    margin: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    flexDirection: "row",
    marginHorizontal: 25,
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
