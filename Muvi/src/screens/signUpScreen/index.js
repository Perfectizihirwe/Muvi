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
import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { useState } from "react";
import { auth } from "../../../firebase/firebase";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpComplete, setSignUpComplete] = useState(false);

  // function validateEmail(email) {
  //   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (email.match(regexEmail)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  const handleSignUp = () => {
    if (email === "" && password === "" && confirmPassword === "") {
      alert("Fill all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
          navigation.navigate("Login");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#26272b"} hidden={false} />
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <icons.Ionicons
            name="arrow-back-outline"
            size={scale(26)}
            color="#fed130"
          />
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
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.inputicon1}>
          <icons.MaterialCommunityIcons
            name="email-outline"
            size={scale(20)}
            color="#fed130"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputarea2}>
        <TextInput
          style={styles.input2}
          placeholder="Password"
          placeholderTextColor={"gray"}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.inputicon2}>
          <icons.Feather name="lock" size={scale(20)} color="#fed130" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputarea3}>
        <TextInput
          style={styles.input3}
          placeholder="Confirm Password"
          placeholderTextColor={"gray"}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity style={styles.inputicon3}>
          <icons.Feather name="lock" size={scale(20)} color="#fed130" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton1}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.text2}>
        <Text style={{ color: "#fff", fontSize: scale(13) }}>
          By signing up I accept
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#fed130", fontSize: scale(13) }}>
            {" "}
            terms of use{" "}
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: scale(13) }}>and </Text>
        <TouchableOpacity>
          <Text style={{ color: "#fed130", fontSize: scale(13) }}>
            privacy policy
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: scale(11),
          textAlign: "center",
          color: "#fff",
          margin: scale(5),
        }}
      >
        or simply sign up with
      </Text>
      <TouchableOpacity style={styles.signUpButton2}>
        <icons.AntDesign name="apple1" size={scale(16)} color="#fff" />
        <Text style={{ color: "#fff" }}> Sign Up with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton3}>
        <icons.AntDesign name="google" size={scale(16)} color="#fed130" />
        <Text> Sign Up with Google</Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Login", { email, password })}
        >
          <Text style={{ color: "#fed130" }}> Sign in</Text>
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
    marginVertical: "25@vs",
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
    marginHorizontal: "22@s",
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
  inputarea3: {
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
    flex: 5,
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
    flex: 5,
    height: "40@vs",
    backgroundColor: "#26272b",
    color: "#fff",
    minWidth: "100@s",
  },
  inputicon2: {
    flex: 1,
    marginLeft: "100@s",
  },
  input3: {
    flex: 5,
    height: "40@vs",
    backgroundColor: "#26272b",
    color: "#fff",
    minWidth: "100@s",
  },
  inputicon3: {
    flex: 1,
    paddingLeft: "100@s",
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
    marginHorizontal: "15@s",
    alignSelf: "center",
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
