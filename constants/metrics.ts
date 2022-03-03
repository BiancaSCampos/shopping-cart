import { Platform, StatusBar } from "react-native";

const metrics = {
  text: {
    fontSize: {
      small: 20,
      medium: 30,
      large: 40,
      xlarge: 50,
    },

    fontFamily: {
      light: "Comfortaa_300Light",
      regular: "Comfortaa_400Regular",
      medium: "Comfortaa_500Medium",
      semiBold: "Comfortaa_600SemiBold",
      bold: "Comfortaa_700Bold",
    },
  },

  padding: {
    small: 30,
    medium: 60,
    large: 90,
  },

  statusBar: Platform.OS === "android" ? `_${StatusBar.currentHeight}` : 0,
};
