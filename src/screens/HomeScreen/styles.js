/* CSS styles for Home Screen */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    flexDirection: "row",
    height: 80,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontFamily: "Montserrat_400Regular",
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#6200ee",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 16,
  },
  listContainer: {
    marginTop: 20,
    padding: 20,
  },
  entityContainer: {
    marginTop: 16,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  entityText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    color: "#333333",
  },
  settingsIcon: {
    height: 35,
    width: 35,
    margin: 10,
    alignSelf: "stretch",
  },
});
