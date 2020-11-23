/* CSS styles for Liked Screen */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontFamily: "Montserrat_400Regular",
    color: "#363c3d",
    fontSize: 26,
    textAlign: "center",
    padding: 3,
  },
  headView: {
    marginTop: 40,
  },
  tealButton: {
    padding: 10,
    height: 70,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "#03dac5",
    alignItems: "center",
    justifyContent: "center",
  },
  tealTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "#03dac5",
    fontSize: 26,
    marginLeft: 10,
    marginRight: 10,
  },
  purpleButton:{
    padding: 10,
    height: 70,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "#6200ee",
    alignItems: "center",
    justifyContent: "center",
  },
  purpleTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "#6200ee",
    fontSize: 26,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonView: {
    marginTop: 28,
    marginLeft: 35,
    marginRight: 35,
  },
  greenHeart: {
    position: 'absolute',
    left: 217,
    top: 216,
    maxWidth: "50%",
    maxHeight: "50%",
  },
});
