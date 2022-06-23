import React, { useEffect } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { fetchTrendingMovies }  from "../../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import TrendingComponent from '../../../components/trending.movies';


export default function FeaturedScreen () {
    const dispatch = useDispatch();
    const  { trending_movies } = useSelector((state) => state.Trending);

    useEffect(()=>{
        dispatch(fetchTrendingMovies());
    }, []);

    console.log(trending_movies);

    return (
        <ScrollView style={{backgroundColor: "#26272b"}} showsVerticalScrollIndicator={false}>
           <View style={StyleSheet.trendingcontainer}>
             <Text style={styles.text1}>
                Trending this week
             </Text>
             <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginVertical: 15}}>
               {trending_movies?.map((movies, index) => {
                return (
                    <TrendingComponent 
                        key={index}
                        title={movies.title}
                        imageLink={movies.backdrop_path}
                        date={movies.release_date}
                    />
                );
             })} 
             </ScrollView>
           </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    trendingcontainer: {        
    },
    text1: {
        color: "#fff",
        fontSize: 15,
        fontWeight: '600',
        marginTop: 15,
        marginLeft: 15,
    },
});