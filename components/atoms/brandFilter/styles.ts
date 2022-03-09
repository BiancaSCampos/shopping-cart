import { StyleSheet } from "pr-unit";
import colors from "../../../constants/colors";
import metrics from "../../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 300,

    padding: metrics.spacers.small,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: metrics.borderRadius.large,

    backgroundColor: colors.primary,

    marginTop: metrics.spacers.medium,

    elevation: metrics.elevation,
  },
});

export default styles;
