import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.discordapp.net/attachments/894678872740753460/946209443358597160/20220223_181549.jpg?width=671&height=671",
        }}
        style={styles.image}
      />
    </View>
  );
};

export default Avatar;
