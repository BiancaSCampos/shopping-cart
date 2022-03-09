import { StyleSheet } from "pr-unit";
import colors from "../../../constants/colors";
import metrics from "../../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    width: 450,
    height: 500,
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadius.large,
    alignItems: "center",
    justifyContent: "center",
    padding: metrics.spacers.medium,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default styles;
