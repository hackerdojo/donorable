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
  keyButton: {
    backgroundColor: "#03dac5",
    marginLeft: 80,
    marginRight: 80,
    marginTop: 25,
    marginBottom: 20,
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
  leftButton: {
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
  rightButton: {
    backgroundColor: "#03dac5",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
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
