import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import ModalView from './ModalView';

export default  LearnMoreScreen = ({navigation})=> {
    const { nonprofit } = navigation.state.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const showModal = (selectedItem) => {
        setModalVisible(true);
        setSelectedItem(selectedItem)
    }  

    const hideModal = () => {
        setModalVisible(false)
    }

    return (    
        <View style={styles.container}> 
            <Text style={styles.name}>{nonprofit.name}</Text>  
            <View style={styles.lineStyle}></View>          
            <View style={styles.questions}>                
                <FlatList
                    data={nonprofit.QAs}
                    keyExtractor={(item) => item.id.toString()}                                  
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={()=> showModal(item)}>
                                    <Text style={styles.textQ}>{item.question}</Text>
                                </TouchableOpacity>
                            </View>    
                        )
                    }}
                />
                { modalVisible && 
                <ModalView 
                    modalVisible={modalVisible}
                    selectedItem={selectedItem}
                    hideModal={hideModal}
                    nonprofit={nonprofit}
                />
}
               
                <View style={styles.info}>
                    <Text>Budget:       {nonprofit.budget}</Text>
                    <Text>Org Type:     {nonprofit.type}</Text>
                    <Text>Keywords:     {nonprofit.keywords}</Text>
                </View>
            </View>                         
            <View style={styles.icons}> 
                <TouchableOpacity>
                    <Image
                        style={styles.disLikeIcon}
                        source={require("../../../assets/dislike.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.likeIcon}
                        source={require("../../../assets/like.png")}
                    />
                </TouchableOpacity>
            </View> 
        </View>
    )
}

            