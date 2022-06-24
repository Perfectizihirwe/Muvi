import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";
import * as icons from "@expo/vector-icons";

export default function PopularComponent (props) {

    const { popImage, popTitle, popDetails} = props;

    
    return( 
            <TouchableOpacity >
            <Image style={styles.image} source={{ uri:`https://image.tmdb.org/t/p/w500/${popImage}`}} />
            {/* <icons.MaterialIcons style={styles.icon} name="hd" size={24} color="#fed130" /> */}
            <Text style={styles.title} numberOfLines={1}>{popTitle}</Text>
            <View style={styles.description}>
                <Text style={styles.details} numberOfLines={2}>{popDetails}</Text>
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
    },
    title: {
        color: "#fff",
        fontSize: 13,
        marginTop: 10,
        maxWidth: 100,
        marginLeft: 17,
    },
    details: {
        color: "#797a7a",
        fontSize: 10,
        maxWidth: 100,
        marginLeft: 10,
        marginTop: -5,
    },
    description: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
    },
    icon: {
        position: "absolute",
        width: 40,
        height: 40,
        top: 55,
        left: 20,
    },
});