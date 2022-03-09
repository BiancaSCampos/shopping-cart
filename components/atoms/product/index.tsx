import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { AddCart, Favorite } from "../../../assets/icons";
import colors from "../../../constants/colors";

const Product = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <Favorite fill={colors.disabled} width={25} height={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AddCart width={25} height={25} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://imgcentauro-a.akamaihd.net/230x230/95195931.jpg",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Text>Product</Text>
    </TouchableOpacity>
  );
};

export default Product;
