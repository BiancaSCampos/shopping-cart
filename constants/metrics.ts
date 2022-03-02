import { Platform, StatusBar } from "react-native";

const metrics = {
  statusBar: Platform.OS === "android" ? `_${StatusBar.currentHeight}` : 0,
};
