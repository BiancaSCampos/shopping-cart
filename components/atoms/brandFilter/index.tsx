import React from "react";
import { TouchableOpacity } from "react-native";
import { BrandFilterProps } from "./types";
import styles from "./styles";

const BrandFilter = ({ icon }: BrandFilterProps) => {
  return <TouchableOpacity style={styles.container}>{icon}</TouchableOpacity>;
};

export default BrandFilter;
