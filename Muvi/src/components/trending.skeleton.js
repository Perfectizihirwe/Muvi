import ContentLoader, { Rect } from "react-content-loader/native";

export default function TrendingSkeleton(props) {
  return (
    <ContentLoader
      width={400}
      height={200}
      viewBox="0 0 400 200"
      backgroundColor="#fed130"
      foregroundColor="#000"
      {...props}
    >
      <Rect x="15" y="15" rx="10" ry="10" width="350" height="185" />
      <Rect x="380" y="15" rx="10" ry="10" width="350" height="185" />
    </ContentLoader>
  );
}
