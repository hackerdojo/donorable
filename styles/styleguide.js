import theme from "./theme.style";


export default {

  screen: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-evenly",
    paddingLeft: theme.VIEW_PADDING,
    paddingRight: theme.VIEW_PADDING,
    color: theme.TEXT_COLOR,
    width:"100%"
  },

  screenFormMod: {
    alignItems:"left",
    justifyContent:"flex-start",
    height:"100%"
  },

  containerKeyboardAvoidingView: {
    flexDirection:"column",
    justifyContent:"space-around" ,
    height:"75%",
    width:"100%"
  },

  image100 : {
    width:100,
    height:100
  },
  fullWidth: {
    width: "100%",
  },

  button :{
    backgroundColor: theme.PRIMARY_COLOR,
    width: "100%",
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonPrimary : {
    backgroundColor: theme.PRIMARY_COLOR,
    width: "100%",
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonSecondary: {
    backgroundColor: theme.SECONDARY_COLOR,
    width: "100%",
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTertiary: {
    backgroundColor: theme.TERTIARY_COLOR,
    width: "100%",
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTitle: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.BUTTON_TITLE_COLOR,
    fontSize: theme.BUTTON_FONT_LARGE,
  },

  textCentered: {
    fontSize: theme.TEXT_FONT_P3,
    textAlign: "center",
    color: theme.TEXT_COLOR
  },
  textCenteredP2: {
    fontSize: theme.TEXT_FONT_P2,
    textAlign: "center",
    color: theme.TEXT_COLOR
  },
  inputLabel: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.TEXT_COLOR,
    fontSize: 26,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#5e5e5e",
    backgroundColor: "white",
  },
  input: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 26,
    height: 40,
    marginLeft: 7,
    overflow: "hidden",
    backgroundColor: "white",
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  horizontalButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}
