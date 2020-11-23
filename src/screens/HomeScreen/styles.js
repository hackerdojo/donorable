/* CSS styles for Home Screen */
import { StyleSheet } from 'react-native';
//import { block } from 'react-native-reanimated';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
      },
      swiperContainer: {
        flex: 0.55,
        top: 55,
      },
      bottomContainer: {
        flex: 0.45,
        justifyContent: 'space-evenly'
      },
      bottomContainerMeta: {
        alignContent: 'flex-end',
        alignItems: 'center'
      },
      bottomContainerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        top: 65,
      },
      header: {
        flex: 0.5,
        // justifyContent: 'space-between'
      },
      cardImage: {
        width: 160,
        flex: 1,
        resizeMode: 'contain'
      },
      card: {
        flex: 0.45,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: "black",
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
      },
      text: {
        fontFamily: "Montserrat_400Regular",
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
      },
      done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
      },
      heading: {
        fontSize: 24,
        marginBottom: 10,
        color: "gray",
        top: 65,
      },
      price: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 15,
        fontWeight: '500',
        top: 60,
      },
      settingsIcon: {
        position: 'absolute',
        left: 5,
        right: 5,
        top: -599,
        height: 35,
        width: 5,
        margin: 7,
        marginBottom:20,
      },
      messageIcon: {
        position: 'absolute',
        left: 320,
        right: 5,
        top: -589,
        bottom: 0,
      },
      donorableTitle: {
        position: 'absolute',
        left: 60,
        right: 40,
        top: -610,
        bottom: 0,
        maxWidth: "70%",
        maxHeight: "40%",
        //maxWidth: 310,
        //maxHeight: 140,
      },
      divBar: {
        position: 'absolute',
        top: 150,
        left: 10,
      },

      undoButton: {
        top: 15,
        left: 55,
      },
      mapButton: {
        left: 117,
      },

      dislikeButton: {
        top: 88,
        right: 115,
      },

      likeButton: {
        top: 90,
        right: 70,
      },
      divTop: {
        top: 100,
        left: 10,
        marginTop: 10,
        marginBottom: 15,
      },
});