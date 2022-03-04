import { StyleSheet } from "pr-unit";
import colors from "../../constants/colors";
import metrics from "../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    padding: metrics.spacers.small,
    backgroundColor: colors.secondary,
    flex: 1,
  },

  text: {
    marginTop: metrics.spacers.small,

    fontSize: metrics.text.fontSize.xlarge,
    color: colors.white,
    fontFamily: metrics.text.fontFamily.bold,
  },
});

export default styles;
