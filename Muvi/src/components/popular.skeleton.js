import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export default function PopularSkeleton () {
    return(
        <SkeletonPlaceholder speed={10}
            backgroundColor={"#fed130"}>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" >
        <SkeletonPlaceholder.Item flexDirection='column' alignItems="center" marginHorizontal={15} marginTop={20}>
            <SkeletonPlaceholder.Item width={110} height={80} borderRadius={6} />
            <SkeletonPlaceholder.Item width={110} height={10} borderRadius={2} marginTop={10}/>
            <SkeletonPlaceholder.Item width={110} height={20} borderRadius={2} marginTop={5}/>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection='column' alignItems="center" marginRight={15} marginTop={20}>
            <SkeletonPlaceholder.Item width={110} height={80} borderRadius={6} />
            <SkeletonPlaceholder.Item width={110} height={10} borderRadius={2} marginTop={10}/>
            <SkeletonPlaceholder.Item width={110} height={20} borderRadius={2} marginTop={5}/>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection='column' alignItems="center" marginRight={15} marginTop={20}>
            <SkeletonPlaceholder.Item width={110} height={80} borderRadius={6} />
            <SkeletonPlaceholder.Item width={110} height={10} borderRadius={2} marginTop={10}/>
            <SkeletonPlaceholder.Item width={110} height={20} borderRadius={2} marginTop={5}/>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection='column' alignItems="center" marginRight={15} marginTop={20}>
            <SkeletonPlaceholder.Item width={110} height={80} borderRadius={6} />
            <SkeletonPlaceholder.Item width={110} height={10} borderRadius={2} marginTop={10}/>
            <SkeletonPlaceholder.Item width={110} height={20} borderRadius={2} marginTop={5}/>
        </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>                 
                </SkeletonPlaceholder>
    );
}