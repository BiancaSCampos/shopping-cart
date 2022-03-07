import { View, Text } from "react-native";
import React from "react";
import { AdidasSymbol, NikeSymbol, PumaSymbol } from "../../../assets/icons";
import styles from "./styles";

const BrandFilter = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <View style={styles.container}>{children}</View>;
};

export default BrandFilter;
