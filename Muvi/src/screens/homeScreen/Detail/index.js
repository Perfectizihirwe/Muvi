import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Modal,
    Touchable,
    TouchableOpacity,
    Button,
  } from "react-native";
  import { Image } from "react-native";
  import * as icons from "@expo/vector-icons";
  import { UpdateId } from "../../../redux/actions";
  import { connect } from "react-redux";

 function DetailScreen({navigation}) {
    
    return (
          <ScrollView>
            <View
              style={{
                backgroundColor: "#26272b",
                width: "100%",
                height: "100%",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://i0.wp.com/keeping-it-reel.com/wp-content/uploads/2022/02/uncharted_ver2.jpg?w=509&ssl=1",
                }}
                style={{ width: "100%", height: 250 }}
                blurRadius={6}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{ position: "absolute", top: 20, left: 20 }}
              >
                <icons.Ionicons
                  name="arrow-back-outline"
                  size={26}
                  color="#fed130"
                />
              </TouchableOpacity>
              <Image
                source={{
                  uri: "https://keeping-it-reel.com/wp-content/uploads/2022/02/uncharted_ver2.jpg",
                }}
                style={{ position: "absolute", width: 150, height: 250, top: 80 }}
              />
              <Text
                style={{
                  color: "#fff",
                  paddingTop: 100,
                  fontSize: 20,
                  fontWeight: "900",
                }}
              >
                Uncharted
              </Text>
              <Text style={{ color: "grey", paddingTop: 5 }}>2h 45min</Text>
              <Text style={{ color: "grey", paddingTop: 5 }}>
                Adventour Romantic Thriller
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  height: 40,
                  minWidth: 340,
                  backgroundColor: "#fed130",
                  marginHorizontal: 20,
                  marginVertical: 15,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <icons.Feather name="play" size={16} color="black" />
                <Text style={{ paddingHorizontal: 5 }}>Play</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    height: 40,
                    width: 150,
                    backgroundColor: "#26272b",
                    borderWidth: 1,
                    borderColor: "#000",
                    marginHorizontal: 20,
                    marginVertical: 15,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <icons.AntDesign name="plus" size={16} color="#fed130" />
                  <Text style={{ paddingHorizontal: 5, color: "#fff" }}>
                    My List
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    height: 40,
                    width: 150,
                    backgroundColor: "#26272b",
                    marginHorizontal: 20,
                    marginVertical: 15,
                    borderWidth: 1,
                    borderColor: "#000",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <icons.Feather name="download" size={16} color="#fed130" />
                  <Text style={{ paddingHorizontal: 5, color: "#fff" }}>
                    Download
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{color: "#fff", marginHorizontal: 35,}}>Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.</Text>
              <Text style={{color: "grey", marginHorizontal: 35, marginVertical: 10}}>Cast: Tom Holland, Mark Wahlberg, Antonio Banderas, Sophia Ali, Tati Gabrielle, Steven Waddington, Pingi Moli, Tiernan Jones, Rudy Pankow, Jesús Evita, Georgia Goodman, Diarmaid Murtagh, Joseph Balderrama, Serena Posadino, Alana Boden, Jonathan Failla, Anthony Thomas, Peter Seaton-Clark</Text>
              
            </View>
          </ScrollView>
    );
  }

  const mapState = ((state)=>({detail: state.movieDetail}));

  export default connect (mapState, {UpdateId: UpdateId})(DetailScreen)
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  