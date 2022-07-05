import WebView from "react-native-webview";
import { View } from "react-native";

export default function Video(props) {
  const { movie } = props;

  return (
    <WebView
      source={{
        uri: `https://www.youtube.com/embed/${movie}?playlist=${movie}&autoplay=1&loop=1&autoplay=1`,
      }}
    />
  );
}
