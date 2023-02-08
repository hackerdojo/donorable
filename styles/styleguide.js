import theme from "./theme.style";
import {StyleSheet} from "react-native";


export default {
  textForegroundColor: {
    color: theme.TEXT_COLOR,
  },
  listScreen: {
    backgroundColor:theme.BACKGROUND_COLOR
  },

  screen: {
    backgroundColor: theme.BACKGROUND_COLOR,
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "space-evenly",
    paddingLeft: theme.VIEW_PADDING,
    paddingRight: theme.VIEW_PADDING,
    color: theme.TEXT_COLOR,
    width:"100%"
  },
  screenDetail: {
    alignItems: "center",
    paddingLeft: theme.VIEW_PADDING_DETAIL,
    paddingTop: theme.VIEW_PADDING_DETAIL,
    paddingRight: theme.VIEW_PADDING_DETAIL,
    backgroundColor: theme.BACKGROUND_COLOR,
    width:"100%",
    height:"100%"
  },

  screenFormMod: {
    alignItems:"left",
    height:"100%",
  },

  mainAreaForm: {
    flex: 1,
    flexDirection:"column",
    justifyContent:"flex-start",
    width:"100%"
  },

  square100 : {
    width:100,
    height:100
  },

  square75: {
    width:75,
    height:75
  },

  square25: {
    width:25,
    height:25
  },

  defaultBackgroundColor: {
    backgroundColor: theme.BACKGROUND_COLOR
  },

  fullWidth: {
    width: "100%",
  },

  spaceBetween: {
    justifyContent:"space-between"
  },

  button : {
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
    marginTop:15,
    view:1
  },

  buttonPrimary : {
    backgroundColor: theme.PRIMARY_COLOR,
  },

  buttonSecondary: {
    backgroundColor: theme.SECONDARY_COLOR,
  },

  buttonTertiary: {
    backgroundColor: theme.TERTIARY_COLOR,
  },

  buttonDanger: {
    backgroundColor: theme.DANGER_COLOR,
  },

  buttonGhost: {
    backgroundColor: "transparent",
  },

  buttonTitle: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.BUTTON_TITLE_COLOR,
    fontSize: theme.BUTTON_FONT_LARGE,
  },

  buttonTitleGhost: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.PRIMARY_COLOR,
    fontSize: theme.BUTTON_FONT_LARGE,
  },

  buttonSizeMedium: {
    height: theme.BUTTON_HEIGHT_MEDIUM,
  },

  buttonTitleSizeMedium: {
    fontSize: theme.BUTTON_FONT_MEDIUM,
  },

  buttonSizeSmall: {
    height: theme.BUTTON_HEIGHT_SMALL,
    borderRadius:5,
    padding:4
  },

  buttonTitleSizeSmall: {
    fontSize: theme.BUTTON_FONT_SMALL,
  },

  hr: {
    borderBottomColor: theme.NEUTRAL_COLOR,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text : {
    fontFamily: theme.FONT_FAMILY,
    textAlign:"center",
    color: theme.TEXT_COLOR,
    fontSize: 50,
  },
  description: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 15,
    fontWeight: '500',
  },

  textCentered: {
    fontSize: theme.TEXT_FONT_P3,
    textAlign: "center",
    color: theme.TEXT_COLOR
  },
  textCenteredP3: {
    fontSize: theme.TEXT_FONT_P3,
    textAlign: "center",
    color: theme.TEXT_COLOR
  },
  textCenteredP1: {
    fontSize: theme.TEXT_FONT_P1,
    textAlign: "center",
    color: theme.TEXT_COLOR
  },

  textLeft: {
    textAlign: "left",
    color: theme.TEXT_COLOR
  },
  textP2: {
    fontSize: theme.TEXT_FONT_P2,
  },
  textP1: {
    fontSize: theme.TEXT_FONT_P1,
  },
  textP3: {
    fontSize: theme.TEXT_FONT_P3,
  },

  textCenteredP2: {
    fontSize: theme.TEXT_FONT_P2,
    textAlign: "center",
    color: theme.TEXT_COLOR
  },

  iconButtonColor: {
    color: theme.ICON_BUTTON_COLOR
  },
  inputLabel: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    paddingTop: theme.FONT_SIZE_MEDIUM
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: theme.INPUT_BORDER_COLOR,
    backgroundColor: "white"
  },
  inputContainerDisabled: {
    borderWidth: 1,
    borderColor: theme.INPUT_BORDER_COLOR,
    backgroundColor: "transparent"
  },
  input: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 16,
    height: 30,
    paddingLeft:5,
    overflow: "hidden",
    width: "100%",
  },
  disabled : {
    disabled: true
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  leftJustified: {
    alignItems:"left",
    justifyContent:"start",

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
  tagContainer: {
    flexDirection:"row",
    flexWrap:"wrap",
    gap:20,
    alignItems:"center",
    justifyContent:"space-between"
  },

  tagSelected: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: "40%",
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    borderWidth: 1,
    borderColor:theme.IMAGE_BORDER_COLOR,
    alignItems: "center",
    justifyContent: "center",
    marginTop:20
  },
  tagUnselected: {
    marginTop:20,
    backgroundColor: theme.TERTIARY_COLOR,
    width: "40%",
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    borderColor:theme.IMAGE_BORDER_COLOR,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
},

  messageCard: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    marginVertical: 5
  },

  messagePreview: {
    color:theme.TEXT_COLOR,
    maxWidth: "80%"
  },

  messageSender: {
    fontWeight: "bold",
    width:"100%",
    color:theme.TEXT_COLOR
  },
  iconButton: {
    shadowColor:"grey",
    shadowOpacity:0.5,
    shadowRadius:2,
    shadowOffset: {width:2,height:2},
  },

  avatarImage: {
    width: 50,
    height: 50
  },

  modalView: {
    margin: 20,
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

}
