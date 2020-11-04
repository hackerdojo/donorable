import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        margin: 10,
    },
    name: {
       fontSize: 50,
       textAlign: 'center'
    },
    lineStyle:{
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
   },
   disLikeIcon: {
       marginLeft :70,
       marginBottom: 20,
       width: 60,
       height: 60,

   },
   likeIcon: {
        marginRight: 70,
        marginBottom: 20,
        alignSelf: 'flex-end',
        width: 60,
        height: 60,


    },
   questions: {
       fontSize: 30,
       alignItems: 'center',
   },
   icons: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       flexWrap: 'wrap',
       alignItems: 'flex-end',
       marginTop: 50
       
   },
   info: {
       marginTop: 60,
       margin:10,
   }, 
   modalView: {
        backgroundColor : 'white',
        margin: 50,
        padding: 20,
        borderRadius: 10,
        flex: 1
    }, 
    textModal: {
        fontSize: 15,
        marginLeft: 5
    },
    buttonModal: {
        backgroundColor: "#03dac5",
        borderRadius: 30,
        padding: 10,
        elevation: 10,
        textAlign: 'center',
        fontSize: 20,
        margin: 5
        
    }, 
    centeredModal: {
        backgroundColor: "#000000aa",
        flex: 1,
    }, 
    textQ: {
        textDecorationLine: 'underline',
        padding: 10,
    }, 
    logoStyle: {
        width: '100%',
    }, 
    scrollView: {
        marginHorizontal: 20
    }
})