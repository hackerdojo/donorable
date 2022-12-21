import theme from "./theme.style";


export default {
  container: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-evenly",
    paddingLeft: theme.VIEW_PADDING,
    paddingRight: theme.VIEW_PADDING,
    color: theme.TEXT_COLOR,
    width:"100%"
  },
  title: {
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
    height: "100%",
    justifyContent: "space-around",
    color: theme.TEXT_COLOR
  }
}
