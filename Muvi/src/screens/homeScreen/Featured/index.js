import React, { useEffect } from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { fetchTrendingMovies }  from "../../../redux/actions";
import { fetchPopularMovies }  from "../../../redux/actions";
import { fetchNewMovies } from '../../../redux/actions/new.actions';
import { useDispatch, useSelector } from 'react-redux';
import TrendingComponent from '../../../components/trending.movies';
import PopularComponent from '../../../components/popular.movies';
import NewMoviesComponent from '../../../components/new.movies';
import TrendingSkeleton from '../../../components/trending.skeleton';
import NewSkeleton from '../../../components/new.skeleton';
import PopularSkeleton from '../../../components/popular.skeleton';


export default function FeaturedScreen () {
    const dispatch = useDispatch();
    const  { trending_movies, trending_loading } = useSelector((state) => state.Trending);
    const { new_movies, new_loading } = useSelector((state) => state.New);
    const { popular_movies, popular_loading } = useSelector((state) => state.Popular);

    useEffect(()=>{
        dispatch(fetchTrendingMovies());
        dispatch(fetchNewMovies());
        dispatch(fetchPopularMovies());
    }, []);

    console.log(trending_movies);
    console.log(new_movies);

    return (
        <ScrollView style={{backgroundColor: "#26272b"}} showsVerticalScrollIndicator={false}>
           <View style={StyleSheet.trendingcontainer}>
             <Text style={styles.text1}>
                Trending this week
             </Text>
             {trending_loading && <TrendingSkeleton />}
             <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginVertical: 15}}>
                
               {trending_movies?.map((movies, index) => {
                return (
                    <TrendingComponent 
                        key={movies.id}
                        trendTitle={movies.title}
                        trendImage={movies.backdrop_path}
                        trendDate={movies.release_date}
                    />
                );
             })} 
             
             </ScrollView>
             <Text style={styles.text2}>
                Popular Movies
             </Text>
             {popular_loading && <PopularSkeleton />}
             <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginVertical: 15,}}>
             {popular_movies?.map((trendMovies, index) => {
                return (
                    <PopularComponent
                        key={trendMovies.id}
                        popTitle={trendMovies.title}
                        popImage={trendMovies.backdrop_path}
                        popDetails={trendMovies.overview}
                    />
                );
             })} 
             </ScrollView>
             <Text style={styles.text3}>
                New on Cinemas
             </Text>
             {new_loading && <NewSkeleton/>}
             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {new_movies?.reverse().map((new_movies, index) => {
                    return (
                        <NewMoviesComponent 
                        key={new_movies.id}
                        newTitle={new_movies.title}
                        newImage={new_movies.poster_path}
                        newDate={new_movies.release_date}
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
        marginTop: 10,
        marginLeft: 15,
    },
    text2: {
        color: "#fff",
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 15,
    },
    text3: {
        color: "#fff",
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 15,
    },
});