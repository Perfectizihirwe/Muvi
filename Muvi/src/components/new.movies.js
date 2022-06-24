import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";
import * as icons from "@expo/vector-icons";

export default function NewMoviesComponent (props) {

    const { newImage, newTitle, newDate} = props;

    
    return( 
            <TouchableOpacity >
            <Image style={styles.image} source={{ uri:`https://image.tmdb.org/t/p/w500/${newImage}`}} />
            <icons.MaterialIcons style={styles.icon} name="hd" size={24} color="#fed130" />
            <Text style={styles.title} numberOfLines={1}>{newTitle}</Text>
            <View style={styles.description}>
                <Text style={styles.date} numberOfLines={1}>{newDate}</Text>
            </View>
            </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    image: {
        borderRadius: 6,
        height: 80,
        width: 110,
        marginLeft: 15,
        marginTop: 20,
    },
    title: {
        color: "#fff",
        fontSize: 13,
        marginTop: 10,
        maxWidth: 100,
        marginLeft: 17,
    },
    date: {
        color: "#fff",
        fontSize: 10,
        maxWidth: 100,
        marginLeft: 17,
        marginTop: 0,
        marginBottom: 20,
    },

    icon: {
        position: "absolute",
        width: 40,
        height: 40,
        top: 75,
        left: 20,
    },
});