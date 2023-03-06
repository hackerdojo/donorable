import theme from "./theme.style";
import {StyleSheet} from "react-native";

export default {

  activeTabColor: {
    color: theme.ACTIVE_TAB_ICON_COLOR,
  },

  inActiveTabColor: {
    color: theme.INACTIVE_TAB_ICON_COLOR,
  },

  textForegroundColor: {
    color: theme.TEXT_COLOR,
  },

  textBold: {
    fontWeight: "bold"
  },

  listItemFirst : {
    borderTopLeftRadius: theme.BUTTON_RADIUS_MEDIUM,
    borderTopRightRadius: theme.BUTTON_RADIUS_MEDIUM,
  },

  listItemLast : {
    borderBottomLeftRadius: theme.BUTTON_RADIUS_MEDIUM,
    borderBottomRightRadius: theme.BUTTON_RADIUS_MEDIUM,
  },

  listElementInput :{
    fontFamily: theme.FONT_FAMILY,
    fontSize: 14,
    height: 30,
    paddingLeft:5,
    overflow: "hidden",
    width:"65%"
  },

  listScreen : {
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
    backgroundColor:theme.LIGHT_NEUTRAL_COLOR,
    overflow:"hidden",
  },
// used by the lists screen of liked, disliked, favorites
  listCard: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    marginVertical: 5,
  },

// used by the search and filter screen
  listItem: {
    flex:1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.LIGHT_NEUTRAL_COLOR,
    height:40,
    maxWidth:"90%",
    alignItems:"flex-start",
    justifyContent:"center",
    paddingLeft:10,
    marginLeft: theme.VIEW_PADDING/2,
    marginRight: theme.VIEW_PADDING/2,
    backgroundColor: "white",
  },

  listPreview: {
    color:theme.TEXT_COLOR,
    maxWidth: "80%"
  },

  listHeader: {
    fontWeight: "bold",
    width:"100%",
    color:theme.TEXT_COLOR
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

  neutralBackgroundColor: {
    backgroundColor: theme.NEUTRAL_COLOR
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
    marginLeft:"auto",
    marginRight:"auto",
    view:1
  },

  buttonPrimary : {
    backgroundColor: theme.PRIMARY_COLOR,
    color: theme.BUTTON_TITLE_PRIMARY_COLOR
  },

  buttonSecondary: {
    backgroundColor: theme.SECONDARY_COLOR,
    color: theme.BUTTON_TITLE_SECONDARY_COLOR
  },

  buttonTertiary: {
    backgroundColor: theme.TERTIARY_COLOR,
    color: theme.BUTTON_TITLE_TERTIARY_COLOR
  },

  buttonDanger: {
    backgroundColor: theme.DANGER_COLOR,
    color: theme.BUTTON_TITLE_DANGER_COLOR
  },

  buttonGhost: {
    backgroundColor: "transparent",
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
  textCenteredP2: {
    fontSize: theme.TEXT_FONT_P2,
    textAlign: "center",
    color: theme.TEXT_COLOR
  },
  textCenteredP1: {
    fontSize: theme.TEXT_FONT_P1,
    textAlign: "center",
    color: theme.TEXT_COLOR
  },
  textCenteredP0: {
    fontSize: theme.TEXT_FONT_P0,
    textAlign: "center",
    color: theme.TEXT_COLOR
  },

  textLeft: {
    textAlign: "left",
    color: theme.TEXT_COLOR
  },

  textP0: {
    fontSize: theme.TEXT_FONT_P0,
    color: theme.TEXT_COLOR
  },

  textP1: {
    fontSize: theme.TEXT_FONT_P1,
    color: theme.TEXT_COLOR
  },

  textP2: {
    fontSize: theme.TEXT_FONT_P2,
    color: theme.TEXT_COLOR
  },

  textP3: {
    fontSize: theme.TEXT_FONT_P3,
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
    backgroundColor: "white",
    borderRadius:5
  },

  inputContainerDisabled: {
    borderWidth: 1,
    borderColor: theme.INPUT_BORDER_COLOR,
    backgroundColor: "transparent",
    borderRadius:5
  },

  input: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 16,
    height: 30,
    paddingLeft:5,
    overflow: "hidden",
    width:"100%"
  },

  inputNumeric: {
    alignItems:"flex-end"
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
    justifyContent: "space-between",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  tagContainer: {
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"space-between"
  },

  tag : {
    height: theme.BUTTON_HEIGHT_MEDIUM,
    borderRadius: 0,
    borderWidth: 0,
    borderColor:theme.IMAGE_BORDER_COLOR,
    alignItems:"flex-start",
    justifyContent: "center",
    marginTop:1,
    paddingLeft:10,
    paddingRight:10,
    view:1
  },

  tagFirst : {
    borderTopLeftRadius: theme.BUTTON_RADIUS_SMALL,
    borderTopRightRadius: theme.BUTTON_RADIUS_SMALL,
  },

  tagLast : {
    borderBottomLeftRadius: theme.BUTTON_RADIUS_SMALL,
    borderBottomRightRadius: theme.BUTTON_RADIUS_SMALL,
  },

  tagMiddle : {
  },

  tagOnly : {
    borderTopLeftRadius: theme.BUTTON_RADIUS_SMALL,
    borderTopRightRadius: theme.BUTTON_RADIUS_SMALL,
    borderBottomLeftRadius: theme.BUTTON_RADIUS_SMALL,
    borderBottomRightRadius: theme.BUTTON_RADIUS_SMALL,
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
    margin: 10,
    height:"75%",
    backgroundColor: "#f5f5f5" ,//theme.BACKGROUND_COLOR,
    borderRadius: 20,
    padding: 25,
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

  splashContainer: {
    flex: 0.8,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_LARGE
  },

  swiperContainer: {
    flex: 4,
    width: "100%",
    backgroundColor: theme.BACKGROUND_COLOR,
  },

  descriptionContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'left',
    width: "100%",
    paddingLeft: 20
  },

  bottomContainerMeta: {
    alignContent: 'flex-start',
    alignItems: 'center',
    color: "white"
  },

  bottomContainerButtons: {
    width: "100%",
    alignItems:"center",
    paddingTop:5,
    paddingBottom:5,
  },

  cardImage: {
    width: "70%",
    flex: 1,
    resizeMode: 'contain'
  },

  card: {
    width:"100%",
    flex: 0.6,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    padding: 10
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  searchBox: {
    height:40,
    flex:1,
    backgroundColor: "#eee",
    borderRadius: 25,
    justifyContent: 'center',
    alignItems:'center',
    paddingLeft:5,
    paddingRight:5,
    marginLeft:5,
    marginRight:5
  },

  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },

  name: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 24,
    color: theme.TEXT_COLOR,
    fontWeight: "bold"
  },
}
