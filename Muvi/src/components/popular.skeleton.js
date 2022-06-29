import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {scale, verticalScale} from "react-native-size-matters"
import { LinearGradient } from "expo-linear-gradient";

export default function PopularSkeleton() {
  return (
    <SkeletonPlaceholder backgroundColor={"#fed130"}>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          marginHorizontal={scale(10)}
          marginTop={verticalScale(20)}
        >
          <SkeletonPlaceholder.Item width={90} height={80} borderRadius={6} />
          <SkeletonPlaceholder.Item
            width={scale(80)}
            height={verticalScale(10)}
            borderRadius={scale(2)}
            marginTop={verticalScale(10)}
          />
          <SkeletonPlaceholder.Item
            width={scale(80)}
            height={verticalScale(20)}
            borderRadius={scale(2)}
            marginTop={verticalScale(5)}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          marginRight={scale(10)}
          marginTop={verticalScale(20)}
        >
          <SkeletonPlaceholder.Item width={90} height={80} borderRadius={6} />
          <SkeletonPlaceholder.Item
            width={scale(80)}
            height={verticalScale(10)}
            borderRadius={scale(2)}
            marginTop={verticalScale(10)}
          />
          <SkeletonPlaceholder.Item
            width={scale(80)}
            height={verticalScale(20)}
            borderRadius={scale(2)}
            marginTop={verticalScale(5)}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          marginRight={scale(10)}
          marginTop={verticalScale(20)}
        >
          <SkeletonPlaceholder.Item width={90} height={80} borderRadius={6} />
          <SkeletonPlaceholder.Item
            width={scale(80)}
            height={verticalScale(10)}
            borderRadius={scale(2)}
            marginTop={verticalScale(10)}
          />
          <SkeletonPlaceholder.Item
            width={scale(80)}
            height={verticalScale(20)}
            borderRadius={scale(2)}
            marginTop={verticalScale(5)}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          marginRight={scale(10)}
          marginTop={verticalScale(20)}
        >
          <SkeletonPlaceholder.Item width={90} height={80} borderRadius={6} />
          <SkeletonPlaceholder.Item
            width={scale(80)}
            height={verticalScale(10)}
            borderRadius={scale(2)}
            marginTop={verticalScale(10)}
          />
          <SkeletonPlaceholder.Item
            width={scale(80)}
            height={verticalScale(20)}
            borderRadius={scale(2)}
            marginTop={verticalScale(5)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
