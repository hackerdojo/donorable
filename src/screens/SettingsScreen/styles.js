import { StyleSheet } from "react-native";

export default StyleSheet.create({
  text: {
    fontFamily: "Montserrat_400Regular",
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
  },
  button: {
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
  },
});
