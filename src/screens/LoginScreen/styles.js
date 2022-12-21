/* CSS styles for Login Screen */
import { StyleSheet } from "react-native";
import styleguide from "../../../styles/styleguide";

export default StyleSheet.create(
  { ...styleguide,

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    backgroundColor: "#03dac5",
    marginRight: 90,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "#6200ee",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 26,
  },
  forgotPW: {
    fontFamily: "Montserrat_400Regular",
    color: "#6200ee",
    fontSize: 26,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 45,
  },
});
