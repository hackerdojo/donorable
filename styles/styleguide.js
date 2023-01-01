import theme from "./theme.style";


export default {
  screen: {
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

  fullWidth: {
    width: "100%",
  },


  buttonPrimary : {
    backgroundColor: theme.PRIMARY_COLOR,
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonSecondary: {
    backgroundColor: theme.SECONDARY_COLOR,
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTertiary: {
    backgroundColor: theme.TERTIARY_COLOR,
    height: theme.BUTTON_HEIGHT_LARGE,
    borderRadius: theme.BUTTON_RADIUS_LARGE,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonGhost: {
    backgroundColor: "transparent",
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
    fontSize: 20,
    paddingTop:20

  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#5e5e5e",
    backgroundColor: "white"
  },
  input: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 20,
    height: 30,
    paddingLeft:5,
    overflow: "hidden",
    backgroundColor: "white",
    width: "100%",
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    gap: 20
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
    borderWidth: 2,
    borderColor:theme.PRIMARY_COLOR,
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
    borderColor:theme.PRIMARY_COLOR,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
},
  messageScreen: {
    paddingLeft: theme.VIEW_PADDING/2,
    paddingRight:theme.VIEW_PADDING/2
  },
  messageCard: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
  },
  messageGap: {
    marginLeft:10
  },
  messageLight: {
    flex:2
  },
  messageImage:{
    flex:2,
    width:75,
    height:75
  },
  messagePreview: {
    flex:10,
  },

  avatarImage: {
    width: 50,
    height: 50
  },
  divBar :{
    width: "100%"
  }
}
