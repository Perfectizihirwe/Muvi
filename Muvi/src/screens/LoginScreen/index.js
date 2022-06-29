import {
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as icons from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#26272b"} hidden={false} />
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <icons.Ionicons name="arrow-back-outline" size={26} color="#fed130" />
        </TouchableOpacity>
        <Text style={styles.topBarText}>Login</Text>
      </View>
      <View style={styles.logoArea}>
        <Image
          style={styles.logoAreaImage}
          source={require("../../../assets/images/logo1.png")}
        />
        <Text style={styles.logoAreaText}>Muvi</Text>
      </View>
      <Text style={styles.text1}>
        Please login to enjoy more benefits and we won't let you go
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
      <TouchableOpacity style={{ marginLeft:225, marginVertical: 20}}>
          <Text style={{ color: "#fed130", fontSize: 13 }}> Forgot Password? </Text>
        </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MainNavigation")}
        style={styles.signUpButton1}
      >
        <Text>Get Started</Text></TouchableOpacity>
        
      
      <Text
        style={{ fontSize: 11, textAlign: "center", color: "#fff", margin: 5 }}
      >
        or simply sign up with
      </Text>
      <TouchableOpacity style={styles.signUpButton2}>
        <icons.AntDesign name="apple1" size={16} color="#fff" />
        <Text style={{ color: "#fff" }}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton3}>
        <icons.AntDesign name="google" size={16} color="#fed130" />
        <Text>Login with Google</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text style={{ color: "#fff" }}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={{ color: "#fed130" }}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
  topBar: {
    marginTop: "30@vs",
    marginHorizontal: "20@s",
    flexDirection: "row",
    alignItems: "center",
  },
  topBarText: {
    color: "#fff",
    fontSize: "20@s",
    fontWeight: "bold",
    paddingLeft: "10@s",
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
    color: "#fff",
    marginHorizontal: "40@s",
    textAlign: "center",
  },
  inputarea1: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderWidth: "1@s",
    marginHorizontal: "20@s",
    borderTopColor: "#26272b",
    borderLeftColor: "#26272b",
    borderRightColor: "#26272b",
    alignItems: "center",
    marginTop: "10@vs",
  },
  inputarea2: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderWidth: "1@s",
    marginHorizontal: "20@s",
    borderTopColor: "#26272b",
    borderLeftColor: "#26272b",
    borderRightColor: "#26272b",
    alignItems: "center",
    marginTop: "10@vs",
  },

  input1: {
    flex:5,
    height: "40@vs",
    backgroundColor: "#26272b",
    color: "#fff",
    minWidth: "100@s",
  },
  inputicon1: {
    flex: 1,
    marginLeft: "100@s",
  },
  input2: {
    flex:5,
    height: "40@vs",
    backgroundColor: "#26272b",
    color: "#fff",
    minWidth: "100@s",
  },
  inputicon2: {
    flex: 1,
    marginLeft: "100@s",
  },

  signUpButton1: {
    height: "40@vs",
    backgroundColor: "#fed130",
    margin: "20@s",
    borderRadius: "5@s",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    flexDirection: "row",
    marginHorizontal: "25@s",
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
