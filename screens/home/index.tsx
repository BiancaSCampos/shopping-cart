import { View, Text, StatusBar } from "react-native";
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
        <View style={styles.filtersContainer}>
          <BrandFilter icon={<NikeSymbol width={40} height={18} />} />
          <BrandFilter icon={<AdidasSymbol width={40} height={30} />} />
          <BrandFilter icon={<PumaSymbol width={40} height={50} />} />
        </View>
      </View>
    </>
  );
};

export default Home;
