import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        margin: 10,
        
    },
    name: {
       fontSize: 28,
       textAlign: 'center',
       fontWeight: 'bold',
       color: 'red',
       marginBottom: 10,
    },
    lineStyle:{
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        margin: 10
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
        width: 70,
        height: 70,

    },
   questions: {
       alignItems: 'center',
       textAlign: 'center',
   },
   icons: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       flexWrap: 'wrap',
       alignItems: 'flex-end',
       marginTop: 10       
   },
   info: {
       marginTop: 30,
       margin:10,
   }, 
   modalView: {
        backgroundColor : 'white',
        margin: 50,
        padding: 20,
        borderRadius: 10,
        flex: 1,
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
        textAlign: 'center',
        fontSize: 18,

    }, 
    logoStyle: {
        width: '100%',
        height: '20%'

        
    }, 
    scrollView: {
        marginHorizontal: 20
    },

    description: {
        fontStyle: 'italic',
        fontSize: 16,
        textAlign: 'center',
    }, 
    infoStyle: {
        fontSize: 20,
    }
})