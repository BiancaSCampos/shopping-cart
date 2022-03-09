import { View, Text, StatusBar } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../constants/colors";

import Avatar from "../../components/atoms/avatar";
import BrandFilter from "../../components/atoms/brandFilter";
import {
  AdidasSymbol,
  NikeSymbol,
  PumaSymbol,
  Search,
} from "../../assets/icons";
import Product from "../../components/atoms/product";

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar />
          <Search height={30} width={30} />
        </View>

        <Text style={styles.text}>Catalog</Text>

        <View style={styles.filtersContainer}>
          <BrandFilter icon={<NikeSymbol width={40} height={18} />} />
          <BrandFilter icon={<AdidasSymbol width={40} height={30} />} />
          <BrandFilter icon={<PumaSymbol width={40} height={50} />} />
        </View>

        <View style={styles.productsContainer}>
          <Product />
          <Product />
        </View>
      </View>
    </>
  );
};

export default Home;
