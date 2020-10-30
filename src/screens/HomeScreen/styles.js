/* CSS styles for Home Screen */
import { StyleSheet } from 'react-native';

// color handler for all colors we need.
// just put the colors you need and call it.
colors = {
    red: '#EC2379',
    blue: '#0070FF',
    gray: '#777777',
    white: '#ffffff',
    black: '#000000'
 };

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
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
        shadowColor: colors.black,
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
      },
      text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
      },
      done: {
        textAlign: 'center',
        fontSize: 30,
        color: colors.white,
        backgroundColor: 'transparent'
      },
      text: {
        fontFamily: 'Courier'
      },
      heading: {
        fontSize: 24,
        marginBottom: 10,
        color: colors.gray,
        top: 65,
      },
      price: {
        color: colors.blue,
        fontSize: 15,
        fontWeight: '500',
        top: 60,
      },
      settingsIcon: {
        position: 'absolute',
        left: 5,
        right: 5,
        top: -599,
        bottom: 0,
        height: 35,
        width: 5,
        margin: 7,
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
        left: 95,
        right: 5,
        top: -608,
        bottom: 0,
      },
});
