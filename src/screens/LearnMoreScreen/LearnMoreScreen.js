import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import ModalView from './ModalView';

export default  LearnMoreScreen = ({navigation})=> {
    
    const { nonprofit } = navigation.state.params;
    let nameSize = nonprofit.name.length;

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
            <View>
                <Text style={[styles.name, {fontSize: nameSize > 25 ? 20 : 30 }]}>{nonprofit.name}</Text>  
                <Text style={styles.description}>{nonprofit.description}</Text> 
                <View style={styles.lineStyle}></View>
            </View>

                      
            <View style={styles.questions}>                
                <FlatList
                    data={nonprofit.QAs}
                    keyExtractor={(item) => item.id.toString()}                                  
                    renderItem={({item, index}) => {
                        return (
                            <View >
                                <TouchableOpacity onPress={()=> showModal(item)}>
                                    <Text style={[styles.textQ, { color: index % 2 === 0 ? 'purple' : 'green'}]}>{item.question}</Text>
                                </TouchableOpacity>
                            </View>    
                        )
                    }}
                />
                { 
                    modalVisible && 
                    <ModalView 
                        modalVisible={modalVisible}
                        selectedItem={selectedItem}
                        hideModal={hideModal}
                        nonprofit={nonprofit}
                    />
                }
        </View>               
                <View style={styles.info}>
                    <Text style={styles.infoStyle}>Budget:       {nonprofit.budget}</Text>
                    <Text style={styles.infoStyle}>Org Type:     {nonprofit.type}</Text>
                    <Text style={styles.infoStyle}>Keywords:     {nonprofit.keywords}</Text>
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

            