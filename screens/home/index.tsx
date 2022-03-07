import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import Avatar from "../../components/atoms/avatar";
import styles from "./styles";
import colors from "../../constants/colors";
import BrandFilter from "../../components/atoms/brandFilter";
import { AdidasSymbol, NikeSymbol, PumaSymbol } from "../../assets/icons";

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <View style={styles.container}>
        <Avatar />

        <Text style={styles.text}>Catalog</Text>

        <BrandFilter children={<NikeSymbol />} />
        <BrandFilter children={<AdidasSymbol />} />
        <BrandFilter children={<PumaSymbol />} />
      </View>
    </>
  );
};

export default Home;
