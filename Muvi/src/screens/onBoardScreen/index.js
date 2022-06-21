import { StyleSheet, TouchableOpacity, View, Text, ImageBackground, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

function OnBoardScreen ({navigation}) {
  const RenderItem = ({ item }) => {
    return(
        <View>
        <StatusBar backgroundColor={"#26272b"} />
        <ImageBackground style={styles.backImage} source={item.image}>
        <Text style={styles.introTitle}>{item.title}</Text>
        <Text style={styles.introText}>{item.text}</Text>
        <TouchableOpacity 
              onPress={() => navigation.navigate("SignUp")}
              style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>        
        </TouchableOpacity> 
        </ImageBackground>
        </View>
    );
  };


  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        showDoneButton={false}
        showNextButton={false}
        showPrevButton={false}
        showSkipButton={false}
        dotStyle={styles.slidingDots}
        activeDotStyle={styles.slidingDotsActive}
        />
    </>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  backImage: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
  },
  introTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 80,
    marginHorizontal: 20,
    lineHeight: 35,
  },
  introText: {
    fontSize: 15,
    color: '#fff',
    marginVertical: 20,
    marginHorizontal: 20,
    lineHeight: 25,
  },
  button: {
    top: 170,
    left: 3,
    backgroundColor: '#fed130',
    height: 40,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidingDots: {
    marginBottom: 350,
    backgroundColor: 'gray',
    width: 20,
    height: 5,
    left: -110,
  },
  slidingDotsActive: {
    marginBottom: 350,   
    backgroundColor: "#fed130",
    width: 30,
    height: 5,
    left: -110,
  },
});

const slides = [
  {
    key: "s1",
    title: "Enjoy your favourite movie anywhere",
    text: "Browse through our collections and discover hundreds of movies and series that you'll love",
    image: require("../../../assets/images/slide1.jpg")
  },
  {
    key: "s2",
    title: "Enjoy your favourite movie anywhere",
    text: "Browse through our collections and discover hundreds of movies and series that you'll love",
    image: require("../../../assets/images/slide2.png")
  },
  {
    key: "s3",
    title: "Enjoy your favourite movie anywhere",
    text: "Browse through our collections and discover hundreds of movies and series that you'll love",
    image: require("../../../assets/images/slide3.png")
  },
];