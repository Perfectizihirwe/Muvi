import React from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";
import * as icons from "@expo/vector-icons";
import {ScaledSheet} from 'react-native-size-matters'

export default function PopularComponent (props,navigation) {

    const { popImage, popTitle, popDetails} = props;

    
    return( 
            <TouchableOpacity onPress={props.navigation}>
            <Image style={styles.image} source={{ uri:`https://image.tmdb.org/t/p/w500/${popImage}`}} />
            {/* <icons.MaterialIcons style={styles.icon} name="hd" size={24} color="#fed130" /> */}
            <Text style={styles.title} numberOfLines={1}>{popTitle}</Text>
            <View style={styles.description}>
                <Text style={styles.details} numberOfLines={2}>{popDetails}</Text>
            </View>
            </TouchableOpacity>
    );

};

const styles = ScaledSheet.create({
    image: {
        borderRadius: "6@s",
        height: "80@vs",
        width: "90@s",
        marginLeft: "15@s",
    },
    title: {
        color: "#fff",
        fontSize: "12@s",
        marginTop: "10@vs",
        maxWidth: "90@s",
        marginLeft: "14@s",
    },
    details: {
        color: "#797a7a",
        fontSize: "10@s",
        maxWidth: "90@s",
        marginLeft: "6@s",
        marginTop: "-5@vs",
    },
    description: {
        flexDirection: 'row',
        marginLeft: "10@s",
        marginTop: "5@vs",
    },
    icon: {
        position: "absolute",
        width: "40@s",
        height: "40@vs",
        top: "55@vs",
        left: "20@s",
    },
});