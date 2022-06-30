import React ,{useEffect} from "react";
import {Text, View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from "react-native";
import * as icons from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";
import { getSingleDetails } from "../redux/actions";
import {connect} from "react-redux"


const TrendingComponent = (props,navigation) => {

    const { trendImage, trendTitle, trendDate} = props;
   

    return( 
            <TouchableOpacity onPress={props.navigation}>
            <ImageBackground imageStyle={{ borderRadius: 16}} style={styles.image} source={{ uri:`https://image.tmdb.org/t/p/w500/${trendImage}`}}>
            <Text style={styles.title}>{trendTitle}</Text>
            <View style={styles.description}>
                <icons.MaterialIcons name="hd" size={24} color="#fed130" />
                <Text style={styles.date}>{trendDate}</Text>
            </View>
            </ImageBackground>
            </TouchableOpacity>
    );

};

export default connect(null,{getSingleDetails:getSingleDetails}) (TrendingComponent);

const styles = ScaledSheet.create({
    image: {
        borderRadius: "10@s",
        minHeight: "200@vs",
        minWidth: "300@s",
        marginLeft: "15@s",
    },
    title: {
        color: "#fff",
        fontSize: "14@s",
        marginTop: "140@vs",
        marginLeft: "10@s",
    },
    date: {
        color: "#fff",
        fontSize: '12@s',
        alignSelf: 'center',
    },
    description: {
        flexDirection: 'row',
        marginLeft: "10@s",
    },
});