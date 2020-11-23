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
    fontSize: 30,
    textAlign: "center",
    padding: 3,
  },
  headView: {
    marginTop: 40,
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
  buttonTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 26,
  },






  keyButton: {
    backgroundColor: "#03dac5",
    padding: 10,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  keyTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 26,
    marginLeft: 10,
    marginRight: 10,
  },




  localButton: {
    marginRight: 90,
    paddingLeft: 25,
    paddingRight: 25,
    left: 7,
  },


   globalButton: {
     paddingLeft: 20,
     paddingRight: 20,
     left: -15,
   },

});
