import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import Avatar from "../../components/atoms/avatar";
import styles from "./styles";
import colors from "../../constants/colors";

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <View style={styles.container}>
        <Avatar />

        <Text style={styles.text}>Catalog</Text>
      </View>
    </>
  );
};

export default Home;
