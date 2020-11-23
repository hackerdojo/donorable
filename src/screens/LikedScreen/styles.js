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





  buttonRow: {
    marginTop: 20,
  },
  
  buttonContainer: {
      flex: 1,
      flexDirection: "row",
      marginTop: 80,
      alignItems: "center",
      justifyContent: "center",
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
  




  healthButton: {
    marginRight: 90,
    paddingLeft: 20,
    paddingRight: 20,
    left: 10,
  },



  stemButton: {
    paddingLeft: 25,
    paddingRight: 25,
    left: -20,
  },





  artsButton: {
    marginRight: 90,
    paddingLeft: 30,
    paddingRight: 30,
    left: 15,
    },
  artsTitle: {
    marginLeft: 20,
    marginRight: 20,
  },



  faithButton: {
    paddingLeft: 25,
    paddingRight: 25,
    left: -25,
    },
  faithTitle: {
    marginLeft: 15,
    marginRight: 15,
  },



  unButton: {
    borderWidth: 1,
    borderColor: "#03dac5",
    backgroundColor: "white",
  },
  unText: {
    color: "#03dac5",
  },



  doneButton: {
    backgroundColor: "#6200ee",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 140,
    marginRight: 140,
    marginTop: 80,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
