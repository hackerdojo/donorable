/* CSS styles for Registration Screen */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginBottom: 40,
  },
  input: {
    fontFamily: "Montserrat_400Regular",
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    margin: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  regButton: {
    backgroundColor: "#6200ee",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 60,
    marginBottom: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  logButton: {
    backgroundColor: "#03dac5",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
