import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export default function TrendingSkeleton () {
    return(
        <SkeletonPlaceholder speed={80}
                backgroundColor={"#fed130"}
                highlightColor={"#000"}>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item
                      marginLeft={15}
                      marginTop={15}
                      width={365}
                      height={200}
                      borderRadius={10}
                    />
                    <SkeletonPlaceholder.Item
                      marginLeft={15}
                      marginTop={15}
                      width={365}
                      height={200}
                      borderRadius={10}
                    />
                  </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder>
    );
}