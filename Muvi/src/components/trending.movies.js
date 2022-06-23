import React from "react";
import {Text, View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from "react-native";
import * as icons from "@expo/vector-icons";

export default function TrendingComponent (props) {

    const { imageLink, title, date} = props;

    
    return( 
            <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 16}} style={styles.image} source={{ uri:`https://image.tmdb.org/t/p/w500/${imageLink}`}}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.description}>
                <icons.MaterialIcons name="hd" size={24} color="#fed130" />
                <Text style={styles.date}>{date}</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    image: {
        borderRadius: 10,
        minHeight: 200,
        minWidth: 370,
        marginLeft: 15,
    },
    title: {
        color: "#fff",
        fontSize: 17,
        marginTop: 140,
        marginLeft: 10,
    },
    date: {
        color: "#fff",
    },
    description: {
        flexDirection: 'row',
        marginLeft: 10,
    },
});