import { StyleSheet } from "pr-unit";
import colors from "../../constants/colors";
import metrics from "../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    padding: metrics.spacers.medium,
    backgroundColor: colors.secondary,
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    marginTop: metrics.spacers.small,

    fontSize: metrics.text.fontSize.xlarge,
    color: colors.white,
    fontFamily: metrics.text.fontFamily.bold,
  },

  filtersContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: metrics.spacers.medium,
  },

  productsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
