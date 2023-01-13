/* CSS styles for Home Screen */
import { StyleSheet } from 'react-native';
import styleguide from "../../../styles/styleguide";
//import { block } from 'react-native-reanimated';


export default StyleSheet.create({...styleguide,
      container: {
        backgroundColor: "white",
      },
      swiperContainer: {
        flex:4,
        width:"100%",
        backgroundColor:styleguide.defaultBackgroundColor.backgroundColor,
      },
      descriptionContainer: {
        flex: 1.5,
        justifyContent: 'space-evenly',
        width:"100%"
      },
      bottomContainerMeta: {
        alignContent: 'flex-start',
        alignItems: 'center',
        color:"white"
      },
      bottomContainerButtons: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        backgroundColor:'transparent',
        width:"100%"
      },

      cardImage: {
        width: "70%",
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

      done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
      },

      name: {
        fontSize: 24,
      }
});
