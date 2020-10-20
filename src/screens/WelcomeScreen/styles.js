/* CSS styles for Intro Screen */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 30,
    marginBottom: 40,
    marginLeft: 50,
    maxWidth: 310,
    maxHeight: 140,
  },
  slogan: {
    fontFamily: "Montserrat_400Regular",
    color: "#5e5e5e",
    fontSize: 26,
    textAlign: "center",
    padding: 15,
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
    marginLeft: 80,
    marginRight: 80,
    marginTop: 50,
    marginBottom: 90,
    height: 85,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  regButton: {
    backgroundColor: "#03dac5",
    marginLeft: 80,
    marginRight: 80,
    marginTop: 10,
    height: 85,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 26,
  },
});
