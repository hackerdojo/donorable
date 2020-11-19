/* CSS styles for Quick Donate Screen */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontFamily: "Montserrat_400Regular",
    color: "#6200ee",
    fontSize: 30,
    textAlign: "center",
    padding: 3,
  },
  headView: {
    marginTop: 50,
  },
  title: {
    fontFamily: "Montserrat_400Regular",
    color: "#8d9293",
    fontSize: 30,
    textAlign: "center",
    padding: 3,
    margin: 10,
  },
  titleView: {
    marginTop: 50,
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

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    marginLeft: 47,
    marginRight: 47,
    marginTop: 40,
    borderColor: "#5e5e5e",
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 3,
  },
  input: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 26,
    height: 40,
    marginLeft: 7,
    backgroundColor: "white",
    borderRadius: 15,
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