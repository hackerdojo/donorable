/* CSS styles for Intro Screen */
import { StyleSheet } from "react-native";
import theme from '../../../styles/theme.style.js';


export default StyleSheet.create({
  container: {
    flexDirection:"column",
    alignItems: "center",
    height:"100%",
    justifyContent:"space-evenly",
    paddingLeft: theme.VIEW_PADDING,
    paddingRight: theme.VIEW_PADDING
  },
  title: {
    width: "100%",
  },
  slogan: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.TEXT_COLOR,
    fontSize: theme.TEXT_FONT_P3,
    textAlign: "center",
  },

  loginButton: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: "100%",
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
  },
  regButton: {
    backgroundColor: theme.SECONDARY_COLOR,
    height: theme.BUTTON_HEIGHT_LARGE,
    width: "100%",
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.BUTTON_TITLE_COLOR,
    fontSize: theme.BUTTON_FONT_LARGE,
  },
});
