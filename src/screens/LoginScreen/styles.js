/* CSS styles for Login Screen */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    marginBottom: 100,
  },
  input: {
    fontFamily: "Montserrat_400Regular",
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  loginButton: {
    backgroundColor: "#6200ee",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 100,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  signupButton: {
    backgroundColor: "#03dac5",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
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
