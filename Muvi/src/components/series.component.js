import React from "react";
import { useSelector } from "react-redux";
import {Text, View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from "react-native";
import * as icons from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";

export default function SeriesComponent (props) {

    const { seriesImage, seriesTitle, seriesDate} = props;
    const {series_loading} = useSelector((state) => state.LatestSeries)


    
    return( 
            <TouchableOpacity>
            <ImageBackground imageStyle={{ borderRadius: 16}} style={styles.image} source={{ uri:`https://image.tmdb.org/t/p/w500${seriesImage}`}}>
            <Text style={styles.title}>{seriesTitle}</Text>
            <View style={styles.description}>
                <icons.MaterialIcons name="hd" size={24} color="#fed130" />
                <Text style={styles.date} numberOfLines={1}>{seriesDate}</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
    );

};

const styles = ScaledSheet.create({
    image: {
        borderRadius: "10@s",
        minHeight: "200@vs",
        maxWidth: "320@s",
        marginHorizontal: "15@s",
        marginVertical: "10@vs",
    },
    title: {
        color: "#fff",
        fontSize: "15@s",
        marginTop: "135@vs",
        marginLeft: "10@s",
    },
    date: {
        color: "#fff",
        fontSize: '12@s',
        alignSelf: 'center',
        maxWidth: "300@s",
    },
    description: {
        flexDirection: 'row',
        marginLeft: "10@s",
    },
});