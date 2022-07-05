import ContentLoader, {Rect} from "react-content-loader/native";


export default function SeriesSkeleton (props) {
    return(
      <ContentLoader
      width={400}
      height={800}
      viewBox="0 0 400 800"
      backgroundColor="#fed130"
      foregroundColor="#000"
      {...props}
    >
      <Rect x="15" y="15" rx="10" ry="10" width="380" height="185" />
      <Rect x="15" y="220" rx="10" ry="10" width="380" height="185" />
    </ContentLoader>
    );
}