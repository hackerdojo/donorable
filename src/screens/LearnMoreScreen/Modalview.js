import React from 'react';
import { View, Image, ScrollView, Text, Modal, TouchableOpacity} from 'react-native';
import styles from './styles'

const ModalView = ({modalVisible, hideModal, selectedItem, nonprofit}) =>  {
  return (
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}          
            onRequestClose={hideModal}
        >
            <View style={styles.centeredModal}>
                <View style={styles.modalView}>                                            
                    <Image style={styles.logoStyle} source={{uri: nonprofit.image}} />
                    <View style ={styles.lineStyle}></View>                      
                    <ScrollView style={styles.scroolView}>
                        <Text style={styles.textModal}>{selectedItem.answer}</Text>                                                        
                    </ScrollView>
                    <TouchableOpacity>
                        <Text style={styles.buttonModal} onPress={hideModal}>Got it</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
        </Modal>
  )
}

export default ModalView;