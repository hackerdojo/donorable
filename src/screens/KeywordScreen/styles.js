/* CSS styles for Keyword Screen */
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


  localButton: {
    backgroundColor: "#03dac5",
    marginRight: 90,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    height: 70,
    left: 7,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    },
    
  globalButton: {
    backgroundColor: "#03dac5",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,
    left: -15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  localTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 26,
    marginLeft: 10,
    marginRight: 10,
  },

  globalTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 26,
    marginLeft: 10,
    marginRight: 10,
  },

  healthButton: {
    backgroundColor: "#03dac5",
    marginRight: 90,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,
    left: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    },
    healthTitle: {
      fontFamily: "Montserrat_400Regular",
      color: "white",
      fontSize: 26,
      marginLeft: 10,
      marginRight: 10,
    },

  stemButton: {
    backgroundColor: "#03dac5",
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    left: -20,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  stemTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 26,
    marginLeft: 10,
    marginRight: 10,
  },

  artsButton: {
    backgroundColor: "#03dac5",
    marginRight: 90,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 70,
    left: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    },
    artsTitle: {
      fontFamily: "Montserrat_400Regular",
      color: "white",
      fontSize: 26,
      marginLeft: 20,
      marginRight: 20,
    },

    faithButton: {
      backgroundColor: "#03dac5",
      padding: 10,
      paddingLeft: 25,
      paddingRight: 25,
      left: -25,
      height: 70,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    faithTitle: {
      fontFamily: "Montserrat_400Regular",
      color: "white",
      fontSize: 26,
      marginLeft: 15,
      marginRight: 15,
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
