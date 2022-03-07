import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import Avatar from "../../components/atoms/avatar";
import styles from "./styles";
import colors from "../../constants/colors";
import BrandFilter from "../../components/atoms/brandFilter";

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <View style={styles.container}>
        <Avatar />

        <Text style={styles.text}>Catalog</Text>

        <BrandFilter />
      </View>
    </>
  );
};

export default Home;
