import { StyleSheet } from "pr-unit";
import metrics from "../../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderRadius: 300,
    elevation: metrics.elevation,
  },

  image: {
    height: "100%",
    width: "100%",
    borderRadius: 300,
    borderWidth: 2,
    borderColor: "#fff",
  },
});

export default styles;
