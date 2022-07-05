import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { fetchSeries } from "../../../redux/actions/series.actions";
import SeriesComponent from "../../../components/series.component";
import { useDispatch, useSelector } from "react-redux";
import SeriesSkeleton from "../../../components/series.skeleton";

export default function SeriesScreen(props) {
  const dispatch = useDispatch();
  const { latest_series, series_loading } = useSelector((state) => state.LatestSeries);
  useEffect(() => {
    dispatch(fetchSeries());
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#26272b" }}>
      <Text
        style={{
          fontSize: scale(15),
          color: "#fff",
          fontWeight: "600",
          marginVertical: verticalScale(10),
          marginLeft: scale(15),
        }}
      >
        Trending series
      </Text>
      {series_loading && <SeriesSkeleton />}
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        {latest_series?.map((series, index) => {
          return (
            <SeriesComponent
              key={index}
              seriesImage={series.backdrop_path}
              seriesTitle={series.original_name}
              seriesDate={series.overview}
              navigation={()=>{props.navigation.navigate("DetailScreen", series)}}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
