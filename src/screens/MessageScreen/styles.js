/* CSS styles for Login Screen */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontFamily: "Montserrat_400Regular",
    color: "#6200ee",
    textAlign: "center",
    fontSize: 26, 
    marginTop: 30,
    marginBottom: 10,
    padding: 12,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    marginLeft: 47,
    marginRight: 47,
    borderColor: "#5e5e5e",
    backgroundColor: "white",
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
   // alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    backgroundColor: "#03dac5",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    top: -50,
  },

  buttonTitle: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 26,
  },
  smallCard: {
    maxWidth: "10%",
    maxHeight: "5%",
    marginLeft: 70,
  },
  divBar: {
    maxWidth: "70%",
    margin: 15,
    marginLeft: 65,
  },

  msgPreview: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 26,
    color: "#929292",
    marginLeft: 65,
    
  },
});
