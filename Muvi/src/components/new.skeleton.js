import ContentLoader, { Rect } from "react-content-loader/native";

export default function NewSkeleton(props) {
  return (
    <ContentLoader
      width={400}
      height={150}
      viewBox="0 0 400 150"
      backgroundColor="#fed130"
      foregroundColor="#000"
      {...props}
    >
      <Rect x="15" y="15" rx="10" ry="10" width="100" height="80" />
      <Rect x="15" y="110" rx="5" ry="5" width="100" height="20" />

      <Rect x="135" y="15" rx="10" ry="10" width="100" height="80" />
      <Rect x="135" y="110" rx="5" ry="5" width="100" height="20" />

      <Rect x="255" y="15" rx="10" ry="10" width="100" height="80" />
      <Rect x="255" y="110" rx="5" ry="5" width="100" height="20" />

      <Rect x="380" y="15" rx="10" ry="10" width="100" height="80" />
      <Rect x="380" y="110" rx="5" ry="5" width="100" height="20" />
    </ContentLoader>
  );
}
