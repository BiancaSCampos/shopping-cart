import { Platform, StatusBar } from "react-native";

const metrics = {
  text: {
    fontSize: {
      small: 30,
      medium: 50,
      large: 70,
      xlarge: 90,
    },

    fontFamily: {
      light: "Comfortaa_300Light",
      regular: "Comfortaa_400Regular",
      medium: "Comfortaa_500Medium",
      semiBold: "Comfortaa_600SemiBold",
      bold: "Comfortaa_700Bold",
    },
  },

  spacers: {
    small: 30,
    medium: 60,
    large: 90,
  },

  borderRadius: {
    small: 15,
    medium: 30,
    large: 45,
  },

  statusBar: Platform.OS === "android" ? `_${StatusBar.currentHeight}` : 0,
};

export default metrics;
