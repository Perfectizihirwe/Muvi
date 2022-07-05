import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { searchAnything } from "../../redux/actions/search.actions";
import * as icons from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import SearchComponent from "../../components/search.results";

export default function SearchScreen(props) {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  const { search_results, searching_done } = useSelector(
    (state) => state.Search
  );

  const pressSearch = () => {
    dispatch(searchAnything(keyword));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#202123"} hidden={false} />
      <View style={styles.inputarea}>
        <TextInput
          style={styles.input}
          placeholder="Search any movie or actor"
          placeholderTextColor={"gray"}
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
        />
      </View>
      <TouchableOpacity 
      value={keyword}
      onChangeText={(text) => setKeyword(text)}
      onPress={pressSearch}
      style={styles.searchicon}>
        <icons.Feather name="search" size={25} color="gray" />
      </TouchableOpacity>
      {searching_done ? <ScrollView vertical showsHorizontalScrollIndicator={false}>
        {search_results?.map((search, index) => {
          return (
            <SearchComponent
              key={index}
              searchImage={search.backdrop_path}
              searchTitle={search.original_name}
              searchDate={search.overview}
              navigation={() => {
                props.navigation.navigate("DetailScreen", search);
              }}
            />
          );
        })}
      </ScrollView>
     : <View>
        <Image
          style={styles.image}
          source={require("../../../assets/images/search.jpg")}
        />
        <Text style={styles.title}>Search any movie</Text>
        <Text style={styles.text}>
          Explore our libraries and enjoy movies with your family
        </Text>
      </View>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
  inputarea: {
    minHeight: 70,
    backgroundColor: "#202123",
  },
  input: {
    flexDirection: "column",
    backgroundColor: "#26272b",
    color: "#fff",
    minHeight: 40,
    borderRadius: 8,
    marginVertical: 15,
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  searchicon: {
    position: "absolute",
    top: 22,
    left: 360,
  },
  image: {
    maxWidth: 400,
    maxHeight: 300,
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#fff",
    marginTop: -30,
  },
  text: {
    color: "gray",
    fontSize: 15,
    textAlign: "center",
    marginHorizontal: 70,
  },
});
