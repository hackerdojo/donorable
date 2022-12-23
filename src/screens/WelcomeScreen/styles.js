/* CSS styles for Intro Screen */


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
  hViewTop: {
    marginTop:30,
    marginBottom: 30,
  },
  hViewBottom: {
    marginBottom:20,
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
  walkButton: {
    backgroundColor: "#6200ee",
    marginLeft: 80,
    marginRight: 80,
    marginTop: 25,
    marginBottom: 20,
    height: 85,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  startButton: {
    backgroundColor: "#03dac5",
    marginLeft: 80,
    marginRight: 80,
    marginTop: 5,
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
